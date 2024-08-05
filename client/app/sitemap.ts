import { MetadataRoute } from "next";
import { getAllProductParams } from "sanity/query/productQuery";
import { BASE_URL } from "helper/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Products
  const product = await getAllProductParams();

  // Generate Product Sitemap links
  const productEnteries: MetadataRoute.Sitemap = product.map((item: any) => ({
    url: `${BASE_URL}/${item.category_slug}/${item.slug}`,
    lastModified: new Date(item.lastUpdated),
    priority: 0.5,
  }));

  // href={`/${state_slug}/${category_slug}/${slug}`}

  console.log(productEnteries, "Product");
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/cancellation-policy`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/terms-conditions`,
      lastModified: new Date(),
      priority: 1,
    },
    ...productEnteries,
  ];
}
