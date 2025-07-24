import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-07-23', // Updated to current API version
  useCdn: false, // Set to false for writes/uploads
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export default client;
