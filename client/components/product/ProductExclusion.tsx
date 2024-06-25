import Accordion from "components/UI/Accordion";
import { LuBadgeX } from "react-icons/lu";

interface AccordionListProps {
  exclusion: string[];
}

const ProductExclusion: React.FC<AccordionListProps> = ({ exclusion }) => {
  return (
    <Accordion title="Exclusion" isOpen>
      <ul>
        {exclusion &&
          exclusion.map((item: any) => (
            <li
              key={item}
              className="
              flex
              items-center 
              gap-3 
              py-1 
              font-roboto 
              text-sm 
              text-neutral-700"
            >
              <span className="text-rose-600">
                <LuBadgeX size={16} />
              </span>
              {item}
            </li>
          ))}
      </ul>
    </Accordion>
  );
};

export default ProductExclusion;
