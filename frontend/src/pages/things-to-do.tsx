import React from "react";
import Image from "next/image";
import ImageSection from "../components/ThingsToDo/ImgSection";
import PriceAndPlaceSection from "../components/ThingsToDo/PriceAndPlaceSection";
import AboutImage from "../../public/assets/aboutus-img.jpg";
import Heading from "@/components/Heading";
import MasonryImagesGallery from "@/components/featured/MasonryImagesGallery";
import profileImg from "../../public/assets/mdshabirali-01.svg";
import Link from "next/link";
import { SlSocialYoutube, SlSocialTwitter } from "react-icons/sl";
import { AiOutlineFacebook } from "react-icons/ai";
import { RxInstagramLogo } from "react-icons/rx";

const ThingsToDo = () => {
  return (
    <div>
      <ImageSection />
      <div className="m-12">
        <PriceAndPlaceSection />
      </div>
    </div>
  );
};

export default ThingsToDo;
