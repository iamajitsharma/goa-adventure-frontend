import Link from "next/link";
import { CircleChevronRight } from "lucide-react";

const ProductSectionTitle = ({
  title,
  link,
}: {
  title: string;
  link?: string;
}) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-lg md:text-2xl font-semibold border-l-4 pl-2 border-orange-500">
        {title || "Product Section Title"}
      </h2>
      {link && (
        <span className="text-orange-500 font-medium">
          <Link href={link || "#"} className="inline-flex items-center gap-2">
            See All <CircleChevronRight size={20} />
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProductSectionTitle;
