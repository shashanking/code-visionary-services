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
  content?: any[]; // For Sanity block content
}
