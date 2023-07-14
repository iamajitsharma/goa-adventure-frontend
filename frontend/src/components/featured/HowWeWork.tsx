import React from "react";
import Heading from "../common/Heading";
import Container from "../common/Container";
import Image from "next/image";
import flightImg from "../../../public/assets/images/flight.png";

interface servicesProps {
  icon: any;
  title: String;
  description: String;
}
const services: servicesProps[] = [
  {
    icon: <i className="ri-road-map-line"></i>,
    title: "Choose Destination",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    icon: <i className="ri-coupon-line"></i>,
    title: "Book Ticket",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    icon: <i className="ri-shield-check-line"></i>,
    title: "Get Confirmation",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    icon: <i className="ri-camera-lens-line"></i>,
    title: "Ready To Explore",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
];

const HowWeWork = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center font-poppins max-h-fit h-full px-4 ">
        <div className="w-full md:w-1/2">
          <Heading heading="We Offer Best Services" subheading="How We Work" />
          {services.map((item, index) => (
            <div className="flex items-center gap-5 py-4">
              <div className="p-4 text-3xl shadow-md rounded-md bg-white text-primary w-16 h-16 flex items-center justify-center">
                {item.icon}
              </div>

              <div className="flex flex-col gap-2">
                <h5 className="font-semibold text-base text-variant tracking-wide">
                  {item.title}
                </h5>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 shrink-0">
          <Image src={flightImg} alt="" className="object-cover" />
        </div>
      </div>
    </Container>
  );
};

export default HowWeWork;
