import { createClient } from '@sanity/client';

export const serverClient = createClient({
  projectId: 'cz1w2qmj',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});
