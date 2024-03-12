//import custom components
import Box from "../common/Box";
import ProductTitle from "./ProductTitle";
import { TfiTarget } from "react-icons/tfi";

interface ProductHighlightProps {
  title: string;
  highlight: string[];
}

const ProductHighlight: React.FC<ProductHighlightProps> = ({
  title,
  highlight,
}) => {
  return (
    <Box className="bg-white">
      <ProductTitle level={2} title={`${title} Highlights`} />
      <ul className="py-4">
        {highlight?.map((item: any) => (
          <li
            className="flex items-center gap-3 py-1 font-roboto text-sm text-neutral-700"
            key={item}
          >
            <TfiTarget className="text-primary text-base" />
            {item}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default ProductHighlight;
