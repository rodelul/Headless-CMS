async function test() {
  const query = `
    query GetHomepage {
      page(id: "home", idType: URI) {
        seo {
          title
          description
          canonicalUrl
          openGraph {
            title
            description
            image {
              url
            }
          }
        }
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

  const response = await fetch("https://headless.404hosting.ro/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();
  console.log(JSON.stringify(json, null, 2));
}

test();
