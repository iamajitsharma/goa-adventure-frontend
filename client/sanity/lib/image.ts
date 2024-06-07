import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: "5c3bceyl",
  dataset: "production",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};
