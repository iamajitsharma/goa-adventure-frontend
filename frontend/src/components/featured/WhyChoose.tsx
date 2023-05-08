import React from "react";
import Image from "next/image";
import experienceImg from "../../../public/assets/experience.png";

const WhyChoose = () => {
  return (
    <section className="h-fit p-6 font-poppins bg-sky-300/70">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex-1">
          <h4 className="text-3xl font-semibold py-2 font-poppins">
            With our all experience we will serve you
          </h4>
          <p
            className="text-sm leading-loose text-black font-normal
          "
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ipsam
            magnam atque, magni, animi illum assumenda sed dolore quod
            consequatur, rem sit autem nostrum commodi impedit cupiditate quam.
            Ad, possimus.
          </p>
          <div className="flex md:flex-row pt-8 items-center justify-center md:justify-start w-full gap-8">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-20 h-20 bg-orange-500 flex items-center justify-center rounded-tl-3xl rounded-br-3xl shadow-lg">
                <span className="text-white text-4xl font-medium">12K</span>
              </div>
              <h4 className="text-lg font-medium">Successful Trip</h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-20 h-20 bg-orange-500 flex items-center justify-center rounded-tl-3xl rounded-br-3xl shadow-lg">
                <span className="text-white text-4xl font-medium">20K</span>
              </div>
              <h4 className="text-lg font-medium">Users</h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-20 h-20 bg-orange-500 flex items-center justify-center rounded-tl-3xl rounded-br-3xl shadow-lg">
                <span className="text-white text-4xl font-medium">15</span>
              </div>
              <h4 className="text-lg font-medium">Year Experience</h4>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-center">
            <Image src={experienceImg} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
