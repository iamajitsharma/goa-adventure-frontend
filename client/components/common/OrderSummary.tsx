"use client";
import Box from "components/UI/Box";
import { useProduct } from "hooks/useProduct";

const OrderSummary = () => {
  const { product } = useProduct();

  console.log("Item from cart", product);

  // Convert necessary properties to numbers
  const numericPrice = Number(product?.price);
  const numericSalePrice = Number(product?.salePrice);
  const numericQuantity = Number(product?.quantity);
  const numericDeposit = Number(product?.deposit);

  // Calculate productTotal
  const productTotal = numericSalePrice * numericQuantity;

  // Calculate discountAmt if salePrice is provided
  const discountAmt = product?.salePrice
    ? (numericPrice - numericSalePrice) * numericQuantity
    : 0;

  // Calculate depositAmount
  const depositAmount = (productTotal * numericDeposit) / 100;

  // Calculate balanceAmount
  const balanceAmount = productTotal - depositAmount;

  return (
    <Box>
      <div>
        <h4 className="py-2 font-semibold text-sm md:text-base">
          Order Summary
        </h4>

        <div
          className="
          w-full
          h-full 
          flex 
          flex-col 
          gap-4 
          px-1 
          py-4 
          font-semibold 
          text-xs 
          md:text-sm"
        >
          <div className="flex justify-between items-center">
            <div className="flex align-items-center gap-1">
              {/* <Image
              src={product?.image}
              alt=""
              width={60}
              height={60}
              className="object-cover object-center rounded-md"
            /> */}
              <div>
                <h4>{product?.product_title}</h4>
                <span className="text-xs font-light">
                  Total person : {product?.quantity} x {product?.price}
                </span>
              </div>
            </div>
            <span>{product?.quantity * product?.price}</span>
          </div>

          <div className="flex justify-between items-center text-xs text-green-500 font-light">
            <h5>Discount {product?.discount}% applied</h5>
            <span>{`-${discountAmt}`}</span>
          </div>
          <hr className="w-full" />
          <div className="flex justify-between items-center">
            <h5>Sub Total</h5>
            <span>{productTotal}</span>
          </div>
          <div className="flex justify-between items-center">
            <h5>{product?.deposit}% Deposit Amount</h5>
            <span>{depositAmount}</span>
          </div>
          <hr />
          <div className="flex justify-between items-center text-rose-500">
            <h5>Balance Amount</h5>
            <span>{balanceAmount}</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default OrderSummary;
