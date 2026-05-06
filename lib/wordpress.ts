// ==========================================
// WORDPRESS GRAPHQL CLIENT
// Toate funcțiile de comunicare cu WordPress
// prin WPGraphQL
// ==========================================

// ==========================================
// CONFIGURARE
// ==========================================

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL;
const GRAPHQL_URL = `${WORDPRESS_URL}/graphql`;
const REVALIDATE_TIME = 60;

// ==========================================
// FUNCȚIE DE BAZĂ — TRIMITE QUERY GRAPHQL
// ==========================================

async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, any> = {}
): Promise<T> {
  const response = await fetch(GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: REVALIDATE_TIME },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    console.error(`GraphQL Error: ${response.status}`);
    throw new Error(`GraphQL request failed: ${response.statusText}`);
  }

  const json = await response.json();

  if (json.errors) {
    console.error("GraphQL Errors:", JSON.stringify(json.errors, null, 2));
    throw new Error(json.errors[0]?.message || "GraphQL query error");
  }

  return json.data;
}

// ==========================================
// HOMEPAGE — UN SINGUR QUERY PENTRU TOT
// Asta e puterea GraphQL: 1 request, toate datele
// ==========================================

export async function getHomepageData() {
  const query = `
    query GetHomepage {
      page(id: "home", idType: URI) {
        acfHome {
          heroTitle
          heroSubtitle
          heroCtaText
          heroCtaLink
          ctaTitle
          ctaDescription
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
      servicii(first: 6, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
        nodes {
          slug
          title
          acfServicii {
            shortDescription
            price
            icon
          }
        }
      }
      testimoniale(first: 6) {
        nodes {
          title
          acfTestimoniale {
            clientName
            clientRole
            testimonialText
            rating
          }
        }
      }
      features(first: 6, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
        nodes {
          title
          acfFeature {
            description
            icon
          }
        }
      }
    }
  `;

  return fetchGraphQL<{
    page: { acfHome: any } | null;
    posts: { nodes: any[] };
    servicii: { nodes: any[] };
    testimoniale: { nodes: any[] };
    features: { nodes: any[] };
  }>(query);
}

// ==========================================
// POSTS (ARTICOLE BLOG)
// ==========================================

export async function getPosts(
  first: number = 10,
  after: string | null = null
) {
  const query = `
    query GetPosts($first: Int!, $after: String) {
      posts(first: $first, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          databaseId
          slug
          title
          excerpt
          date
          modified
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ posts: any }>(query, { first, after });

  return {
    posts: data.posts.nodes,
    hasNextPage: data.posts.pageInfo.hasNextPage,
    endCursor: data.posts.pageInfo.endCursor,
  };
}

// Obține un singur post după slug
export async function getPostBySlug(slug: string) {
  const query = `
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        databaseId
        slug
        title
        content
        excerpt
        date
        modified
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ post: any }>(query, { slug });
  return data.post;
}

// Toate slug-urile (pentru generateStaticParams)
export async function getAllPostSlugs(): Promise<string[]> {
  const query = `
    query GetAllSlugs {
      posts(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ posts: { nodes: { slug: string }[] } }>(query);
  return data.posts.nodes.map((n) => n.slug);
}

// ==========================================
// PAGES (PAGINI)
// ==========================================

export async function getPageBySlug(slug: string) {
  const query = `
    query GetPage($slug: ID!) {
      page(id: $slug, idType: URI) {
        databaseId
        slug
        title
        content
        acfAbout {
          aboutTitle
          aboutDescription
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ page: any }>(query, { slug });
  return data.page;
}

// ==========================================
// CUSTOM POST TYPES
// ==========================================

// CPT: Servicii
export async function getServicii() {
  const query = `
    query GetServicii {
      servicii(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
        nodes {
          databaseId
          slug
          title
          content
          acfServicii {
            shortDescription
            price
            icon
            features {
              featureText
            }
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ servicii: { nodes: any[] } }>(query);
  return data.servicii.nodes;
}

// CPT: Testimoniale
export async function getTestimoniale() {
  const query = `
    query GetTestimoniale {
      testimoniale(first: 100) {
        nodes {
          databaseId
          title
          acfTestimoniale {
            clientName
            clientRole
            testimonialText
            rating
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ testimoniale: { nodes: any[] } }>(query);
  return data.testimoniale.nodes;
}

// CPT: Team Members
export async function getTeamMembers() {
  const query = `
    query GetTeamMembers {
      teamMembers(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
        nodes {
          databaseId
          title
          acfTeamMember {
            role
            bio
            photo {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ teamMembers: { nodes: any[] } }>(query);
  return data.teamMembers.nodes;
}

// CPT: Features ("De ce noi")
export async function getFeatures() {
  const query = `
    query GetFeatures {
      features(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
        nodes {
          databaseId
          title
          acfFeature {
            description
            icon
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ features: { nodes: any[] } }>(query);
  return data.features.nodes;
}

// ==========================================
// CATEGORII
// ==========================================

export async function getCategories() {
  const query = `
    query GetCategories {
      categories(first: 100, where: { hideEmpty: true }) {
        nodes {
          databaseId
          name
          slug
          count
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ categories: { nodes: any[] } }>(query);
  return data.categories.nodes;
}

// ==========================================
// MENIURI
// ==========================================

export async function getMenu(location: string = "PRIMARY") {
  const query = `
    query GetMenu($location: MenuLocationEnum!) {
      menuItems(where: { location: $location }) {
        nodes {
          id
          label
          url
          path
          parentId
          order
        }
      }
    }
  `;

  try {
    const data = await fetchGraphQL<{ menuItems: { nodes: any[] } }>(query, { location });
    return data.menuItems.nodes;
  } catch {
    return [];
  }
}

// ==========================================
// HELPERS
// ==========================================

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("ro-RO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function cleanExcerpt(excerpt: string): string {
  if (!excerpt) return "";
  return excerpt.replace(/<[^>]*>/g, "").replace(/\[&hellip;\]/, "...").trim();
}

export function getFeaturedImageUrl(post: any): string | null {
  return post?.featuredImage?.node?.sourceUrl || null;
}

export function getFeaturedImageAlt(post: any): string {
  return post?.featuredImage?.node?.altText || post?.title || "";
}
