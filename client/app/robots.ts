import { MetadataRoute } from "next";
import { BASE_URL } from "helper/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/privacy-policy",
        "/terms-conditions",
        "/cancellation-policy",
        "/order-failed",
        "/payment-success",
        "/checkout",
        "/cart",
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
