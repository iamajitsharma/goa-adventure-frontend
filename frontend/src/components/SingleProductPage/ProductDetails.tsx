//import custom components
import Box from "../common/Box";
import ProductTitle from "./ProductTitle";
import { FiMapPin, FiClock } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

interface ProductDetailsProps {
  title: string;
  location: string;
  state: string;
  duration: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  location,
  state,
  duration,
}) => {
  return (
    <Box className="bg-white">
      <ProductTitle level={1} title={title} />

      <div className="flex flex-row items-center w-full gap-4 py-4 font-roboto">
        <span className="flex flex-row items-center gap-2 text-neutral-600 text-sm font-medium sm:text-base">
          <FiMapPin className="text-primary text-xl" />
          {location} {state}
        </span>

        <span className="flex flex-row items-center gap-2 text-neutral-600 text-sm font-medium sm:text-base">
          <FiClock className="text-primary text-xl" />
          {duration}
        </span>
        <div className="flex items-center gap-1">
          <span className="flex flex-row items-center gap-2 text-neutral-600 text-sm font-medium sm:text-base">
            <AiFillStar className="text-primary text-xl" />
            4.5
          </span>
          <button className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm bg-green-600/80 text-white  rounded-full">
            450 reviews
          </button>
        </div>
      </div>

      {/* Product Title Section End */}
    </Box>
  );
};

export default ProductDetails;
