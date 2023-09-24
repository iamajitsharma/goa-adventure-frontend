import React from "react";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import { getHomePageSearch } from "@/lib/api";

const SearchBar = () => {
  const [text, setText] = React.useState("");
  const router = useRouter();
  async function handleClick() {
    console.log("Text captured", text);
    const data = await getHomePageSearch(text);
    console.log("Response from api", data);
    if (data.length == 0) {
      router.push("/activity");
    } else {
      let path = `?filter_type=${data[0].table_name}&id=${data[0].id}`;
      router.push("/activity" + path);
    }
  }
  return (
    <div className="flex flex-row gap-2 items-center bg-white md:max-w-3xl w-full rounded-lg shadow-3xl mt-4 font-poppins py-1 md:py-2 px-2 relative">
      <input
        type="text"
        id="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Destination Activity Tour"
        className="w-full focus:ring-0 border-none text-lg text-neutral-800 font-medium placeholder:text-sm placeholder:md:text-base"
      />
      <button
        className="bg-secondary text-white p-3 rounded-md"
        onClick={() => handleClick()}
      >
        <BsSearch className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchBar;
