/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";

import CarouselNextArrow from "./CarouselNextArrow";
import TourCardImg from "../../public/assets/tourcard.jpeg";
import {
  ChatBubbleBottomCenterIcon,
  InboxIcon,
  Bars3Icon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import dynamic from "next/dynamic";
import HeavenEarth from "../components/HeavenEarth";
import BannerSlider from "./featured/BannerSlider";

const ThrillingActivity = dynamic(
  () => import("../components/ThrillingActivity"),
  {
    ssr: false,
  }
);

const ListingCard = dynamic(() => import("./listings/ListingCard"), {
  ssr: false,
});
const Navbar = dynamic(() => import("../components/navbar/Navbar"), {
  ssr: false,
});
const LogIn = dynamic(() => import("../components/login/LogIn"), {
  ssr: false,
});
const Heading = dynamic(() => import("../components/Heading"), {
  ssr: false,
});
const Partners = dynamic(() => import("./featured/PartnerLogo"), {
  ssr: false,
});

const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];
const navigation = [
  { name: "Pricing", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Company", href: "#" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Hero() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  // function openModal() {
  //   setIsOpen(true);
  // }

  return (
    <div className="xl:bg-white bg-transparent">
      <Navbar setIsOpen={setIsOpen} />
      <main>
        <div>
          {/* Hero card */}
          <LogIn setIsOpen={setIsOpen} isOpen={isOpen} />

          <div className="relative  ">
            <div className="absolute inset-x-0 bottom-0   lg:h-1/2 bg-gray-100 " />
            <div className="w-screen lg:translate-y-16 ">
              <div className="relative sm:overflow-hidden ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-screen  lg:flex hidden"
                    src="assets/hero.png"
                    alt="Hero Pic"
                  />
                  <img
                    className="h-full w-screen object-cover flex lg:hidden"
                    src="mobilehomepage.png"
                    alt="Hero Pic"
                  />
                </div>

                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 flex flex-col items-center">
                  <h1 className="font-nunito text-center text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl m-7">
                    <span className="lg:block text-white hidden">
                      Where will you find yourself
                    </span>
                    <span className="lg:hidden text-white block ">
                      Where do you want to go?
                    </span>
                  </h1>

                  <div className="w-fit ">
                    <div className="lg:flex Lg:flex-row items-center justify-center text-black hidden text-sm  rounded-full  overflow-hidden">
                      <div className="lg:flex lg:flex-row justify-center items-center bg-white w-100 h-100 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 ml-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                        <span className="text-sm py-2.5 pl-2 pr-40">
                          <input
                            className="border-none w-auto border-transparent focus:border-transparent focus:ring-0"
                            name="Location"
                            type="text"
                            placeholder=" Search Destination"
                          />
                        </span>
                      </div>
                      <div className="bg-orange-500 text-white py-5 pr-10 pl-4 w-100 h-200 overflow-hidden">
                        <span>Search</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center text-black lg:hidden text-sm  overflow-hidden">
                      <div className="flex flex-row justify-center items-center bg-white rounded-md ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 ml-2 p-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                        <span className="text-sm py-1 ">
                          <input
                            className="border-none w-auto border-transparent focus:border-transparent focus:ring-0 sm:w-72"
                            name="Location"
                            type="text"
                            placeholder="Destination, Tours, Activites"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
