"use client";
import { useProduct } from "hooks/useProduct";
import CartItem from "./CartItem";
import Box from "components/UI/Box";
import OrderSummary from "./OrderSummary";
import Container from "components/UI/Container";
import SimpleBar from "simplebar-react";
import PageTitle from "components/common/PageTitle";
import { Fragment } from "react";

const CartItems = () => {
  const { products } = useProduct();

  return (
    <Fragment>
      {products.length > 0 && (
        <Container>
          <PageTitle title="Cart" />
          <div className="flex flex-col md:flex-row items-start justify-between w-full gap-8">
            <Box className={"w-full md:w-7/12"}>
              <SimpleBar style={{ maxHeight: 400 }}>
                <ul className="">
                  {products.map((product: any) => (
                    <CartItem product={product} key={product.id} />
                  ))}
                </ul>
              </SimpleBar>
            </Box>
            <Box className={"w-full md:w-5/12"}>
              <OrderSummary />
            </Box>
          </div>
        </Container>
      )}
    </Fragment>
  );
};

export default CartItems;
