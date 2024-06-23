import CartItems from "components/common/CartItems";
import Container from "components/UI/Container";
import Box from "components/UI/Box";
import OrderSummary from "components/common/OrderSummary";
import { Fragment } from "react";
import EmptyCart from "components/cart/EmptyCart";

const Cart = () => {
  return (
    <Fragment>
      <EmptyCart />
      <CartItems />
    </Fragment>
  );
};

export default Cart;
