import React, { useState } from "react";
import { deviceSize } from "../Responsive";
import { useMediaQuery } from "react-responsive";
import parse, {
  DOMNode,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";

interface OverviewsProps {
  description?: string;
  className?: string;
}

const Overviews: React.FC<OverviewsProps> = ({ description, className }) => {
  const [readMore, setReadMore] = useState(false);
  const isTablet = useMediaQuery({ maxWidth: deviceSize.mobile });

  const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.class === "remove"
      ) {
        return <></>;
      }
    },
  };

  // const parsedContent = parse(description options);

  // console.log("Overview", parsedContent);

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  const truncatedText = description?.substring(0, 1500);

  const renderText = () => {
    if (readMore && description) {
      return (
        <div dangerouslySetInnerHTML={{ __html: description as string }} />
      );
    } else {
      return (
        <div dangerouslySetInnerHTML={{ __html: truncatedText as string }} />
      );
    }
  };

  return (
    <div
      className={`font-roboto bg-transparent text-base text-justify text-textBlack leading-loose transition ease-in-out duration-1000 delay-1000 py-3 overflow-hidden ${className}`}
    >
      {renderText()}
      <span
        onClick={readMoreHandler}
        className="text-primary font-semibold flex justify-end cursor-pointer"
      >
        {readMore ? "Read Less" : "Read More"}
      </span>
    </div>
  );
};

export default Overviews;
