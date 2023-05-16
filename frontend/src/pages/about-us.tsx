import React from "react";
import Image from "next/image";
import AboutImage from "../../public/assets/aboutus-img.jpg";
import Heading from "@/components/common/Heading";
import MasonryImagesGallery from "@/components/featured/MasonryImagesGallery";
import profileImg from "../../public/assets/mdshabirali-01.svg";
import Link from "next/link";
import { SlSocialYoutube, SlSocialTwitter } from "react-icons/sl";
import { AiOutlineFacebook } from "react-icons/ai";
import { RxInstagramLogo } from "react-icons/rx";

const AboutUs = () => {
  return (
    <section className="w-full relative font-poppins">
      <div className="relative flex items-center">
        <div className="object-cover">
          <Image src={AboutImage} alt="" className="w-full" />
        </div>
        <div className="absolute text-center w-full">
          <h2 className="text-2xl md:text-6xl font-semibold md:font-bold text-white">
            Where you wil find peace
          </h2>
        </div>
      </div>
      <div className="max-h-fit h-full w-full bg-worldPattern bg-no-repeat bg-cover bg-white">
        <div className="text-center md:max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-500/80 py-6">
            Who We Are
          </h2>
          <p className="text-sm py-2 leading-loose px-4">
            Whereas disregard and contempt for human rights have resulted
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-2 md:flex-row items-center justify-around my-12 py-8 px-2">
          <div className="text-center text-mainColor bg-white w-56 h-56 shadow-md flex items-center justify-center flex-col about-box hover:text-white">
            <h4 className="text-5xl font-semibold">100+</h4>
            <span className="text-lg font-normal leading-loose tracking-widest">
              ACTIVITY
            </span>
          </div>
          <div className="text-center text-mainColor bg-white w-56 h-56 shadow-md flex items-center justify-center flex-col about-box hover:text-white">
            <h4 className="text-5xl font-semibold">250+</h4>
            <span className="text-lg font-normal leading-loose tracking-widest">
              TOUR PACKAGES
            </span>
          </div>
          <div className="text-center text-mainColor bg-white w-56 h-56 shadow-md flex items-center justify-center flex-col about-box hover:text-white">
            <h4 className="text-5xl font-semibold">50+</h4>
            <span className="text-lg font-normal leading-loose tracking-widest">
              DESTINATION
            </span>
          </div>
          <div className="text-center text-mainColor bg-white w-56 h-56 shadow-md flex items-center justify-center flex-col about-box hover:text-white">
            <h4 className="text-5xl font-semibold">20K</h4>
            <span className="text-lg font-normal leading-loose tracking-widest">
              USERS
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:max-w-7xl mx-auto">
        <div className="md:w-1/2 w-full p-4">
          <Image
            src={profileImg}
            alt="Founder"
            className="object-contain mx-auto rounded-full shadow-lg "
          />
        </div>
        <div className="flex-1">
          <div className="px-4">
            <h4 className="text-2xl font-semibold text-gray-600 capitalize text-center md:text-left">
              Our Mission
            </h4>
            <p className="text-sm py-4 leading-loose text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              cupiditate velit totam excepturi fugiat ducimus repellendus aut
              repellat cumque dolores molestias fugit quae impedit, ipsum
              provident aliquam! Beatae, ad dicta? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptas cupiditate velit totam
              excepturi fugiat ducimus repellendus aut repellat cumque dolores
              molestias fugit quae impedit, ipsum provident aliquam! Beatae, ad
              dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas cupiditate velit totam excepturi fugiat ducimus
              repellendus aut repellat cumque dolores molestias fugit quae
              impedit, ipsum provident aliquam! Beatae, ad dicta?
            </p>
            <div>
              <h4 className="text-2xl font-semibold text-gray-600 capitalize text-center md:text-left">
                Join us
              </h4>
              <ul className="flex flex-row justify-center items-center gap-4 py-4 md:justify-start">
                <li className="text-orange-500  ">
                  <Link href="https://youtube.com">
                    <AiOutlineFacebook fontSize={30} />
                  </Link>
                </li>
                <li className="text-orange-500">
                  <Link href="https://youtube.com">
                    <RxInstagramLogo fontSize={30} />
                  </Link>
                </li>
                <li className="text-orange-500">
                  <Link href="https://youtube.com">
                    <SlSocialYoutube fontSize={30} />
                  </Link>
                </li>
                <li className="text-orange-500">
                  <Link href="https://youtube.com">
                    <SlSocialTwitter fontSize={30} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
