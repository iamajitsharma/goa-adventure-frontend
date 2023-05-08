import React from "react";
import Image from "next/image";
import AboutImage from "../../public/assets/aboutus-img.jpg";
import Heading from "@/components/Heading";
import MasonryImagesGallery from "@/components/featured/MasonryImagesGallery";

const AboutUs = () => {
  return (
    <section className="w-full relative font-poppins">
      <div className="relative flex items-center">
        <div className="w-full object-cover">
          <Image src={AboutImage} alt="" className="w-full" />
        </div>
        <div className="absolute text-center w-full">
          <h2 className="text-6xl font-bold text-white">
            Where you wil find peace
          </h2>
        </div>
      </div>
      <div className="max-h-fit h-full w-full bg-worldPattern bg-no-repeat bg-cover bg-white">
        <div className="text-center md:max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-slate-500 py-6">
            Who We Are
          </h2>
          <p className="text-base font-normal text-gray-500 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos atque
            eligendi architecto? Numquam perferendis sunt quisquam. Optio culpa,
            consequuntur fugit perspiciatis beatae quidem ratione, facere, ullam
            qui odio blanditiis aliquam! Molestias voluptatibus maxime
            laudantium, a illo pariatur sed quaerat doloribus consequatur
            voluptatum quo nam id in consectetur veniam at impedit ducimus
            sequi?
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
    </section>
  );
};

export default AboutUs;
