// Base types for Sanity content
export interface SanityBaseContent {
  _type: string;
  _key: string;
}

// Sanity-specific types
export interface SanityBlogItem {
  _id: string;
  slug: string;
  blogId: string;
  title: string;
  date: string;
  author: string;
  description: string;
  image: string;
  readTime?: string;
}

export interface SanityBlogDetails extends SanityBlogItem {
  content: SanityBaseContent[];
}

// Blog type
export interface BlogItem {
  id: string;
  slug: string;
  blogId: string;
  title: string;
  date: Date;
  image: string;
  author?: string;
  description?: string;
  readTime?: string;
}

export interface BlogItemDetails extends BlogItem {
  content?: SanityBaseContent[];
}
