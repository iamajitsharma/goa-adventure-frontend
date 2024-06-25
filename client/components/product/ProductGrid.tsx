"use client";
import { useState } from "react";
//import custom components
import Container from "components/UI/Container";
import ProductCard from "components/UI/ProductCard";
import { ProductCardProps } from "helper/interface";
import ProductSectionTitle from "./ProductSectionTitle";
import { Button } from "components/UI/Button";

type ProductGridPorps = {
  products: ProductCardProps[];
  title: string;
  link?: string;
  infinite?: boolean;
};

const ProductGrid = ({ products, title, link, infinite }: ProductGridPorps) => {
  const [sliced, setSliced] = useState(8);

  const getMoreData = () => {
    setSliced((prev) => prev + 4);
  };

  return (
    <section className="">
      <Container>
        <div className="py-8">
          <ProductSectionTitle title={title} link={link} />
          <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center py-2">
            {infinite
              ? products
                  ?.slice(0, sliced)
                  .map((item, idx) => (
                    <ProductCard product={item} key={item._id} />
                  ))
              : products?.map((item, idx) => (
                  <ProductCard product={item} key={item._id} />
                ))}
          </div>
          {sliced < products?.length && infinite && (
            <div className="flex justify-center items-center w-full mt-8">
              <Button onClick={getMoreData} variant={"primary"}>
                Load More
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ProductGrid;
