import SearchBar from "components/common/SearchBar";
import Image from "next/image";

const CategoryHero = () => {
  return (
    <div className="relative w-screen h-[60vh] overflow-hidden flex justify-center items-center rounded-b-3xl">
      <div className="absolute w-full h-full inset-0">
        <Image
          src="/images/beach.jpeg"
          alt=""
          width={1400}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full bg-black/25 absolute inset-0" />
      </div>
      <div className="z-10 p-2">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            Things to do in Goa
          </h1>
          <p className="text-xs md:text-sm py-2 text-gray-200">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <SearchBar className="rounded-full" />
      </div>
    </div>
  );
};

export default CategoryHero;
