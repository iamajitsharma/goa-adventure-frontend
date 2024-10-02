"use client";
import { useState, useEffect } from "react";
import Box from "components/UI/Box";
import { FiMinus, FiPlus } from "react-icons/fi";
import Flatpickr, { DateTimePickerProps } from "react-flatpickr";
import { ProductCardProps } from "helper/interface";
import { calculateSalePrice } from "helper/utils";
import { useProduct } from "hooks/useProduct";
import { urlForImage } from "sanity/lib/image";
import moment from "moment";
import { useRouter } from "next/navigation";
import { Button } from "components/UI/Button";
import useEnquiryModal from "hooks/useEnquiryModal";
import Select from "components/UI/Select";

interface DesktopBookingProps {
  product: ProductCardProps;
}

const DesktopBooking: React.FC<DesktopBookingProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState<Date | null>(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [meetingPoint, setMeetingPoint] = useState("");

  const router = useRouter();
  const { setProduct } = useProduct();
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

  const { handleOpenEnquiry } = useEnquiryModal();
  const salePrice = calculateSalePrice(price, discount);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleItemToCard = () => {
    const item = {
      id: _id,
      product_title,
      price,
      salePrice: Number(salePrice),
      quantity: quantity,
      activityDate: date?.toISOString().slice(0, 10),
      deposit,
      discount,
      image: urlForImage(images[0]),
      meeting_point: meetingPoint,
      location,
    };

    setProduct(item);
    router.push("/cart");
  };
  return (
    <Box className={"hidden md:block"}>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-base text-gray-500">
            <p>Starting from</p>
            <span className="flex items-center line-through">{`INR ${price}`}</span>
          </div>
          <button className="p-2 bg-orange-200/80 text-primary font-medium rounded-md max-w-fit">
            {`${discount} % Off`}
          </button>
        </div>
        <div>
          <div className="flex justify-between w-full items-center py-2">
            <div className="flex items-end gap-0">
              <div className="flex items-center gap-1 text-3xl font-semibold">
                <span className="">INR</span>
                <span className="">{salePrice}</span>
              </div>
              <span className="text-sm text-orange-500 font-normal pl-2">
                Per Person
              </span>
            </div>
            {category !== "Tour" && (
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
                  readOnly
                />

                <span
                  className="bg-white w-9 h-9 flex items-center justify-center shadow rounded cursor-pointer"
                  onClick={() => handleIncrement()}
                >
                  <FiPlus />
                </span>
              </div>
            )}
          </div>
          {category !== "Tour" && (
            <>
              <Flatpickr
                placeholder="Choose Date"
                className="w-full py-2 px-2 rounded mt-3 bg-gray-200"
                options={{ dateFormat: "d-M-Y" }}
                onChange={(selectedDates: Date[]) => {
                  setDate(selectedDates[0]);
                }}
                required={true}
              />
              <p className="text-sm font-medium text-gray-500 py-1">
                Just pay 25% now to book your seat
              </p>
            </>
          )}

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

          {category !== "Tour" ? (
            <Button
              onClick={handleItemToCard}
              size={"xl"}
              variant={"primary"}
              className="mt-4"
              disabled={isDisabled}
            >
              Book Now
            </Button>
          ) : (
            <Button
              size={"xl"}
              onClick={handleOpenEnquiry}
              variant={"primary"}
              className="mt-4"
            >
              Send Enquiry
            </Button>
          )}
        </div>
      </div>
    </Box>
  );
};

export default DesktopBooking;
