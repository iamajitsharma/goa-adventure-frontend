import React from "react";
import Container from "../common/Container";
import Box from "../common/Box";
import ProductSidebar from "./ProductSidebar";

interface ProductLayoutProps {
  children: React.ReactNode;
  price: string | number;
  salePrice: string | number;
  discount: string | number;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({
  children,
  price,
  salePrice,
  discount,
}) => {
  return (
    <Container>
      <div className="flex flex-col gap-4 w-full  md:flex-row">
        <div className="w-full md:w-8/12 overflow-hidden break-words">
          {children}
        </div>
        <div className="md:w-4/12">
          <ProductSidebar
            price={price}
            salePrice={salePrice}
            discount={discount}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductLayout;
