import React from "react";
import Container from "../common/Container";
import ProductCard from "../Card/ProductCard";

const ProductList = ({ data }: any) => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center w-full gap-4">
          {data.slice(0, 4).map((item: any) => (
            <ProductCard item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductList;
