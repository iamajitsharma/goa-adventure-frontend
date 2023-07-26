import React from "react";
import UserContent from "../../components/User/UserContent";
import Wishlists from "../../components/User/Wishlists";
import SampleImage from "../../../public/assets/Rectangle 32.png";
import Heading from "@/components/common/Heading";

let data = [
  {
    title: "Scuba Diving Grand Island",
    image: SampleImage,
    categoryType: "Scuba Diving",
    state: "Goa",
    country: "India",
  },
  {
    title: "Scuba Diving Grand Island",
    image: SampleImage,
    categoryType: "Scuba Diving",
    state: "Goa",
    country: "India",
  },
  {
    title: "Scuba Diving Grand Island",
    image: SampleImage,
    categoryType: "Scuba Diving",
    state: "Goa",
    country: "India",
  },
];

const WishList = () => {
  return (
    <UserContent>
      <h3 className="text-xl font-poppins py-2 font-semibold tracking-wider uppercase">
        Wishlist
      </h3>
      <Wishlists data={data} />
    </UserContent>
  );
};

export default WishList;
