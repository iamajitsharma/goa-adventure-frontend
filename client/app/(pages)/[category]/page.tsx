import CategoryHero from "components/hero/CategoryHero";
import ProductGrid from "components/product/ProductGrid";
import { getProductByCategory } from "sanity/query/productQuery";
import { capitalizeFirstLetter } from "helper/utils";

const CategoryPage = async ({ params }: any) => {
  const { category } = params;
  const products = await getProductByCategory(category);

  return (
    <section>
      <CategoryHero />
      <ProductGrid
        products={products}
        title={`Goa ${capitalizeFirstLetter(category)} Packages`}
        infinite
      />
    </section>
  );
};

export default CategoryPage;
