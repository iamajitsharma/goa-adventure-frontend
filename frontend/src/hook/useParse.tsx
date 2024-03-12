//import node module libraries
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";

interface useParseProps {
  htmlContent: string;
  maxLength: number;
}

export const useParse = (htmlContent: string, maxLength: number) => {
  const [parsedContent, setParsedContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (htmlContent) {
      const parsed = parse(htmlContent);
      setParsedContent(parsed as JSX.Element);
    }
  }, [htmlContent]);

  const truncateText = (text: any, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const extractTextFromElements = (element: any) => {
    if (typeof element === "string") {
      return element;
    }
    if (element.props && element.props.children) {
      const children = Array.isArray(element.props.children)
        ? element.props.children
        : [element.props.children];
      return children
        .map((child: any) => extractTextFromElements(child))
        .join("");
    }
    return "";
  };

  const textContent = parse(htmlContent);
  const truncatedContent = truncateText(
    extractTextFromElements(parsedContent),
    maxLength
  );

  return { textContent, truncatedContent };
};
