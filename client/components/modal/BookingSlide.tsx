"use client";
import { useState, useEffect } from "react";
import { Button } from "components/UI/Button";
import { FiMinus, FiPlus } from "react-icons/fi";
import Flatpickr from "react-flatpickr";
import { ProductCardProps } from "helper/interface";
import { useProduct } from "hooks/useProduct";
import { calculateSalePrice } from "helper/utils";
import moment from "moment";
import { urlForImage } from "sanity/lib/image";
import { useRouter } from "next/navigation";
import Select from "components/UI/Select";

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
  const [date, setDate] = useState<Date | null>(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [meetingPoint, setMeetingPoint] = useState("");
  const router = useRouter();

  const {
    _id,
    product_title,
    price,
    deposit,
    meeting_point,
    location,
    discount,
    images,
    category,
  } = product;

  useEffect(() => {
    if (meetingPoint.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [meetingPoint]);

  // Destructure custom hooks
  const { setProduct } = useProduct();

  //Calculate sale price
  const salePrice = calculateSalePrice(price, discount);

  //Handle Increment Function
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  // Handle Descrement Function
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  //Add Item to cart
  const handleItemToCard = () => {
    const item = {
      id: _id,
      product_title,
      price,
      salePrice: Number(salePrice),
      quantity: quantity,
      activityDate: moment(date).format("DD-MM-YYYY"),
      deposit,
      discount,
      image: urlForImage(images[0]),
      meeting_point,
      location,
    };

    setProduct(item);
    router.push("/cart");
  };

  return (
    <div
      className="
        fixed 
        overflow-y-auto 
        inset-0 
        z-[999] 
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
          transform-gpu
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
            <Flatpickr
              placeholder="Choose Date"
              className="w-full py-2 px-2 rounded mt-3 bg-gray-200"
              options={{ dateFormat: "d-M-Y" }}
              onChange={(selectedDates: Date[]) => {
                setIsDisabled(false);
                setDate(selectedDates[0]);
              }}
            />

            {category !== "Tour" && (
              <Select
                items={product?.meeting_point}
                id="meeting_point"
                defaultItem="Meeting Point"
                onChange={(e) => {
                  setMeetingPoint(e.target.value);
                }}
                value={meetingPoint}
                required
              />
            )}
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-base font-medium">Adult: {quantity}</span>
            <div className="flex items-center gap-2">
              <span
                className="bg-white w-9 h-9 flex items-center justify-center shadow rounded cursor-pointer"
                onClick={() => handleDecrement()}
              >
                <FiMinus />
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
                <FiPlus />
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
              onClick={handleItemToCard}
              disabled={isDisabled}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSlide;
