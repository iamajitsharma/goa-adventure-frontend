"use client";
import { useProduct } from "hooks/useProduct";
import { Button } from "components/UI/Button";
import { Fragment } from "react";

const EmptyCart = () => {
  const { products } = useProduct();

  return (
    <Fragment>
      {products.length === 0 && (
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <h4 className="text-2xl font-semibold pb-8">
            !Opps Your Cart is Empty
          </h4>
          <Button href="/activity">Browse Activity</Button>
        </div>
      )}
    </Fragment>
  );
};

export default EmptyCart;
