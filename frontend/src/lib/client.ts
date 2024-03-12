import createImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import type { Image } from "sanity";

export const client = createClient({
  projectId: process.env.SANITY_STUDIO_SANITY_PROJECT_ID || "5c3bceyl",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  apiVersion: "2024-03-08",
  useCdn: true,
});

const imageBuilder = imageUrlBuilder(client);

export const urlForImage = (source: Image) => {
  return imageBuilder.image(source).url();
};
