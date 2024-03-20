import { type SchemaTypeDefinition } from "sanity";
import product from "./schemaTypes/product";
import category from "./schemaTypes/category";
import subcategory from "./schemaTypes/subcategory";
import { websitepolicies } from "./schemaTypes/websitepolicies";
import bookings from "./schemaTypes/booking";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, subcategory, websitepolicies, bookings],
};
