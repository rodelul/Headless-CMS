// ==========================================
// TIPURI TYPESCRIPT PENTRU WPGRAPHQL
// Structura datelor diferă de REST API
// ==========================================

// Post WordPress (format GraphQL)
export interface WPPost {
  databaseId: number;
  slug: string;
  title: string;          // GraphQL returnează string direct, nu { rendered }
  content: string;
  excerpt: string;
  date: string;
  modified: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
      mediaDetails?: {
        width: number;
        height: number;
      };
    };
  } | null;
  author: {
    node: {
      name: string;
      avatar?: {
        url: string;
      };
    };
  };
  categories: {
    nodes: WPTerm[];
  };
  tags?: {
    nodes: WPTerm[];
  };
  seo?: WPSeo;
}

// Pagină WordPress (format GraphQL)
export interface WPPage {
  databaseId: number;
  slug: string;
  title: string;
  content: string;
  acfHome?: ACFHome;
  acfAbout?: ACFAbout;
  seo?: WPSeo;
}

// Categorie / Tag
export interface WPTerm {
  databaseId?: number;
  id?: string;
  name: string;
  slug: string;
  count?: number;
}

// Item meniu
export interface WPMenuItem {
  id: string;
  label: string;
  url: string;
  path: string;
  parentId: string | null;
  order: number;
}

// SEO (Rank Math via WPGraphQL)
export interface WPSeo {
  title?: string;
  metaDesc?: string;
  focusKeywords?: string[];
  opengraphTitle?: string;
  opengraphDescription?: string;
  opengraphImage?: {
    sourceUrl: string;
  };
}

// ==========================================
// TIPURI ACF
// IMPORTANT: în GraphQL, numele câmpurilor
// devin camelCase automat:
// hero_title → heroTitle
// short_description → shortDescription
// ==========================================

// ACF pentru pagina Home
export interface ACFHome {
  heroTitle: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroCtaLink: string;
  ctaTitle: string;
  ctaDescription: string;
}

// ACF pentru pagina About
export interface ACFAbout {
  aboutTitle: string;
  aboutDescription: string;
}

// ACF pentru CPT "Servicii"
export interface ACFServiciu {
  shortDescription: string;
  price: string;
  icon: string;
  features: Array<{
    featureText: string;
  }>;
}

// ACF pentru CPT "Testimoniale"
export interface ACFTestimonial {
  clientName: string;
  clientRole: string;
  testimonialText: string;
  rating: number;
}

// ACF pentru CPT "Team Members"
export interface ACFTeamMember {
  role: string;
  bio: string;
  photo: {
    sourceUrl: string;
    altText: string;
  } | null;
}

// ACF pentru CPT "Features"
export interface ACFFeature {
  description: string;
  icon: string;
}
