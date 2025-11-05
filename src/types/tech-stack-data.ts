// Sanity-specific types
export interface SanityTechCategory {
  _id: string;
  name: string;
  image?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  highlighted: boolean;
  order: number;
}

export interface SanityTechnology {
  _id: string;
  name: string;
  image: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  active: boolean;
  highlighted: boolean;
  category: {
    _id: string;
    name: string;
    highlighted: boolean;
  };
}

export interface TechCategory {
  id: string;
  name: string;
  image?: string;
  imageAlt?: string;
  highlighted: boolean;
  order: number;
}

export interface Technology {
  id: string;
  name: string;
  image: string;
  imageAlt?: string;
  active: boolean;
  highlighted: boolean;
  category: {
    id: string;
    name: string;
    highlighted: boolean;
  };
}

export interface TechStackData {
  categories: TechCategory[];
  technologies: Technology[];
}
