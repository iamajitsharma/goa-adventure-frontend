import { createClient } from "next-sanity";
import { projectId, apiVersion, dataset } from "sanity/env";

export const client = createClient({
  apiVersion: apiVersion,
  dataset: dataset,
  projectId: projectId,
  useCdn: true,
});
