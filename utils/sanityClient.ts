import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-11-16',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export default client;
