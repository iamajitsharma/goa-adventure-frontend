export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSION || "2024-03-08";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityToken = process.env.NEXT_PUBLIC_SANITY_STUDIO_API_TOKEN;

export const useCdn = true;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
