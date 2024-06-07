//import node module libraries
import { Fragment } from "react";
//import custom components
import Box from "components/UI/Box";
import { ChevronRight } from "lucide-react";

interface ProductHighlightProps {
  title?: string;
  highlights: string[];
}

const ProductHighlight: React.FC<ProductHighlightProps> = ({
  title,
  highlights,
}) => {
  return (
    <Fragment>
      {highlights?.length > 0 && (
        <Box className="bg-white">
          <div className="border-l-2 border-orange-500">
            <h3 className="text-sm md:text-lg font-medium pl-2">
              Highlights {title}
            </h3>
          </div>
          <ul className="py-4">
            {highlights?.map((item: any) => (
              <li
                className="flex items-center gap-3 py-1 font-roboto text-sm text-neutral-700"
                key={item}
              >
                <span className="text-orange-500">
                  <ChevronRight size={16} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Fragment>
  );
};

export default ProductHighlight;
