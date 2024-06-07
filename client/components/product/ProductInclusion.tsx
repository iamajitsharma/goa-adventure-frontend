import Accordion from "components/UI/Accordion";
import { BadgeCheck } from "lucide-react";

interface AccordionListProps {
  inclusion: string[];
}

const ProductInclusion: React.FC<AccordionListProps> = ({ inclusion }) => {
  return (
    <Accordion title="Inclusion" isOpen>
      <ul>
        {inclusion &&
          inclusion.map((item: any) => (
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
              <span className="text-green-500">
                <BadgeCheck size={16} />
              </span>
              {item}
            </li>
          ))}
      </ul>
    </Accordion>
  );
};

export default ProductInclusion;
