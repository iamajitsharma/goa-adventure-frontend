import { client } from "../lib/client";

export async function getTourPackage() {
  const query = `
    *[_type == "product" && category->slug.current == "tour"] {
    _id,
    product_title,
    "slug":slug.current,
    "category":category->category_name,
    "category_slug":category->slug.current,
    "images":images[0].asset->url,
    price,
    discount,
    state,
    location,
    duration
    }
`;

  const product = await client.fetch(query);

  return product;
}

export async function getActivities() {
  const query = `
    *[_type == "product" && category->slug.current == "activity"] {
    _id,
    product_title,
    "slug":slug.current,
    "category":category->category_name,
    "category_slug":category->slug.current,
    "images":images[0].asset->url,
    price,
    discount,
    state,
    location,
    duration
    }
`;

  const product = await client.fetch(query);

  return product;
}

export async function getProductDetails(slug: string) {
  const query = `
  *[_type == "product" && slug.current == "${slug}"][0]{
      _id,
  product_title,
  "slug":slug.current,
  "category":category->category_name,
  "sub_category":subcategory->subcategory_title,
    images,
    video,
  price,
    deposit,
    location,
    "state":state->state,
    discount,
    highlight,
    inclusion,
    exclusion,
    min_people,
    duration,
    booking_period,
    meeting_point,
    overview
  }
  `;

  const product = await client.fetch(query);
  return product;
}

export async function getProductByCategory(category: string) {
  const query = `
    *[_type == "product" && category->slug.current == "${category}"] {
    _id,
    product_title,
    "slug":slug.current,
    "category":category->category_name,
    "category_slug":category->slug.current,
    "images":images[0].asset->url,
    price,
    discount,
    state,
    location,
    duration
    }
`;

  const product = await client.fetch(query);

  return product;
}
