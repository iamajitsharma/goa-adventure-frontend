import Accordion from "@/components/common/Accordion";

interface AccordionListProps {
  data: string[];
  title: string;
  icon: any;
}

const AccordionList: React.FC<AccordionListProps> = ({ data, title, icon }) => {
  return (
    <Accordion title={title} isOpen>
      <ul>
        {data &&
          data.map((item: any) => (
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
              {icon}
              {item}
            </li>
          ))}
      </ul>
    </Accordion>
  );
};

export default AccordionList;
