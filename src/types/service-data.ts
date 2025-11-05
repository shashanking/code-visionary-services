// Sanity-specific types
export interface SanityService {
  _id: string;
  serviceId: string;
  label: string;
  date: string;
  image: string;
  description: string;
  tools: string[];
}

export interface Service {
  id: string;
  serviceId: string;
  label: string;
  image: string;
  tools: string[];
  description: string;
  date: string;
}
