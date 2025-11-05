// Sanity-specific types
export interface SanityClient {
  _id: string;
  clientId: string;
  name: string;
  date: string;
  image: string;
}

export interface Client {
  id: string;
  clientId: string;
  name: string;
  image: string;
  date: string;
}
