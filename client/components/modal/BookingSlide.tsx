"use client";
import { useState } from "react";
import { Button } from "components/UI/Button";
import { Minus, Plus } from "lucide-react";
import Flatpickr from "react-flatpickr";
import { ProductCardProps } from "helper/interface";

interface BookingSlideProps {
  isOpen: boolean;
  close: () => void;
  product: ProductCardProps;
}

const BookingSlide: React.FC<BookingSlideProps> = ({
  isOpen,
  close,
  product,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div
      className="
        fixed 
        overflow-hidden 
        inset-0 z-[999] 
        outline-none 
        focus:outline-none 
        bg-neutral-800/70 
        w-screen 
        h-screen
        flex
        items-end
        justify-center
        "
    >
      <div
        className={` relative 
          bg-white 
          backdrop-blur-lg 
          rounded-t-3xl 
          p-6 
          overflow-hidden 
          shadow-xl 
          transition-all 
          ease-in-out 
          w-full
          min-h-fit
          pb-14
          duration-300
          ${isOpen ? "translate-y-0" : "translate-y-full"}
         ${isOpen ? "opacity-100 ease-in duration-300" : "opacity-0 ease-out duration-300"}
         `}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg text-gray-700 font-semibold">
            {/* {product_title} */}
          </h3>
          <h5 className="text-2xl text-primary font-semibold">
            {/* {`₹${salePrice}`} */}
          </h5>
        </div>

        <div className="w-full h-full pt-8 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            {/* <input
              type="date"
              //   value={activityDate}
              //   onChange={(e) => setActivityDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full rounded-md border-2 border-gray-600"
            /> */}
            <Flatpickr
              placeholder="Choose Date"
              className="bg-gray-200 p-2 rounded"
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-base font-medium">Adult: {quantity}</span>
            <div className="flex items-center gap-2">
              <span
                className="bg-white w-9 h-9 flex items-center justify-center shadow rounded cursor-pointer"
                onClick={() => handleDecrement()}
              >
                <Minus />
              </span>

              <input
                type="text"
                min={1}
                value={quantity}
                className="text-center text-xl bg-gray-100 rounded font-semibold py-1 max-w-14 "
              />

              <span
                className="bg-white w-9 h-9 flex items-center justify-center shadow rounded cursor-pointer"
                onClick={() => handleIncrement()}
              >
                <Plus />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-4">
            <Button
              size="lg"
              variant="outline"
              className="w-full"
              onClick={() => close()}
            >
              Cancel
            </Button>
            <Button
              size="lg"
              variant="primary"
              className="w-full"
              //   onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSlide;
