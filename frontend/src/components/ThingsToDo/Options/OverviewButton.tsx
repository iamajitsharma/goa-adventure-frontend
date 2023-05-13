import React from "react";

interface IOverviewButtom {
  btnTitle: String;
}

export default function OverviewButton({ btnTitle }: IOverviewButtom) {
  return (
    <>
      <button className="bg-orange-100 border-orange-500 text-black px-4 py-2 rounded-md border-2 mr-8 ml-16">
        {btnTitle}
      </button>
    </>
  );
}
