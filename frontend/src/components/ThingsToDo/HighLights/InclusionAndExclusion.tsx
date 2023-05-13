import React from "react";

interface IInclusionAndExclusionProps {
  heading: String;
  lists: String[];
}

export default function InclusionAndExclusion({
  heading,
  lists,
}: IInclusionAndExclusionProps) {
  return (
    <div className="flex flex-col justify-start items-center mx-4  px-4 py-5 ">
      <div className="bg-gray-300 w-full rounded-md py-2 px-6">{heading}</div>
      <div className="flex flex-col justify-start w-full px-6">
        <ul className="text-black list-disc my-4 flex justify-start flex-col">
          {lists.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
