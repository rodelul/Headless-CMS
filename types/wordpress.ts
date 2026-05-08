export interface SEOData {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: {
      url?: string;
    };
  };
}

export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText: string;
    mediaDetails?: {
      width: number;
      height: number;
    };
  };
}

export interface Category {
  name: string;
  slug: string;
}

export interface Post {
  databaseId: number;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  modified: string;
  featuredImage?: FeaturedImage;
  categories?: {
    nodes: Category[];
  };
  author?: {
    node: {
      name: string;
      avatar: {
        url: string;
      };
    };
  };
  seo?: SEOData;
}

export interface Service {
  databaseId: number;
  slug: string;
  title: string;
  content?: string;
  acfServicii?: {
    shortDescription?: string;
    price?: string;
    link?: string;
    features?: Array<{
      featureText?: string;
    }>;
  };
}

export interface TeamMember {
  databaseId: number | string;
  title: string;
  acfTeamMember: {
    role: string;
    bio?: string;
    photo: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    };
  };
}

export interface Faq {
  databaseId: number;
  title: string;
  content: string;
  acfFaq?: {
    answer: string;
  };
}

export interface Page {
  slug: string;
  title: string;
  content?: string;
  seo?: SEOData;
  acfHome?: any;
}
