import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-08-31',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
