/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\pages\studio\[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId: process.env.SANITY_STUDIO_SANITY_PROJECT_ID as string,
  dataset: process.env.SANITY_STUDIO_DATASET as string,
  schema,
  plugins: [
    structureTool(),
    visionTool({
      defaultApiVersion: (process.env.SANITY_STUDIO_API_VERSION = "2024-03-08"),
    }),
  ],
});
