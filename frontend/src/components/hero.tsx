/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";
import Slider from "react-slick";
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

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="bg-white">
      <header>
        <Popover className="relative bg-white left-28">
          <div className="flex justify-between items-center max-w-7xl mx-4 px-4 py-3 sm:px-6 md:justify-start md:space-x-10 lg:px-2">
            {/* <div className="flex justify-start lg:w-0 lg:flex-1">
             
            </div> */}
            <div className="hidden md:flex items-center justify-start md:flex-1 -translate-x-20">
              <a href="#">
                {/* <span className="sr-only">Goa Adventure</span> */}
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/assets/logo.svg"
                  alt="Goa Adventure logo"
                />
              </a>
            </div>

            <div className="hidden md:flex items-center justify-between md:flex-1 lg:w-0 hover:rounded-full hover:bg-gray-300 p-3 pr-6 py-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-black scale-150"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer translate-x-2 "
              >
                Explore Destination
              </a>
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              >
                Tour Packages
              </a>
            </div>
            <div className="hidden md:flex items-center justify-center md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              >
                Things To Do
              </a>
            </div>
            <div className="hidden md:flex items-center justify-start md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              >
                Help
              </a>
            </div>
            <div className="ml-28">
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                {/* {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Ankit
                </a>
              ))} */}

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-orange-500 scale-125 ml-20"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white inline-flex items-center text-base font-medium border-2 rounded-full shadow-md py-1 "
                        )}
                      >
                        <div className="flex flex-row mx-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 ml-2 mr-2 my-2 scale-150  hover:text-gray-900 cursor-pointer"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                          </svg>
                          <div className="rounded-full bg-gray-300 mx-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 mx-2  my-2 scale-75  hover:text-gray-900 cursor-pointer"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                              />
                            </svg>
                          </div>
                        </div>
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform  w-48 lg:max-w-xs lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="flex flex-col gap-6 bg-white p-3">
                              <a
                                href="#"
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                onClick={openModal}
                              >
                                <div className=" flex items-center justify-start  text-black ">
                                  Sign up
                                </div>
                              </a>

                              <a
                                href="#"
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                onClick={openModal}
                              >
                                <div className=" flex items-center justify-start  text-black ">
                                  Log in
                                </div>
                              </a>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            </div>
          </div>
        </Popover>
      </header>

      <main>
        <div>
          {/* Hero card */}

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={() => closeModal()}
            >
              <Transition.Child
                as={Fragment}
                enter="transition duration-4000"
                enterFrom="opacity-100 "
                enterTo="opacity-100"
                leave="transition duration-4000"
                leaveFrom="opacity-100"
                leaveTo="opacity-100"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-400"
                    enterFrom="opacity-100 scale-100 -bottom-32"
                    enterTo="opacity-100 scale-100 bottom-32"
                    leave="ease-in duration-400 bottom-32"
                    leaveFrom="opacity-100 scale-100 "
                    leaveTo="opacity-0 scale-100"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all absolute">
                      <div>
                        <header className="flex flex-col">
                          <div className="flex flex-row justify-between text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-6 h-6 text-black cursor-pointer "
                              onClick={() => closeModal()}
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                            <div className="text-black font-semibold">
                              Log in or sign up
                            </div>
                            <div className="text-black"></div>
                          </div>
                          <div className="w-full border-b my-5  scale-125 overflow-hidden"></div>
                        </header>

                        <div className="text-black font-semibold text-xl ">
                          Welcome to Goa Adventures
                        </div>
                        <div>
                          <div>
                            <input
                              className="rounded-t-md w-full focus:border-black focus:border-md mt-6 p-4"
                              type="text"
                              placeholder="Country/Region"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              className="rounded-b-md w-full mb-2 p-4"
                              placeholder="Mobile Number"
                            />
                          </div>
                          <button
                            type="submit"
                            className="bg-red-500 w-full p-4 rounded-xl"
                          >
                            Continue
                          </button>
                          <div className="flex flex-row items-center my-2 ">
                            <div className="h-0.5 w-full bg-gray-200"></div>
                            <div className="text-black px-3">or</div>
                            <div className="h-0.5 w-full bg-gray-200"></div>
                          </div>

                          <button
                            type="submit"
                            className=" w-full p-4 rounded-xl border-e border-s border-t border-b border-black my-2"
                          >
                            <div className="flex flex-row justify-between ">
                              <div>
                                {" "}
                                <svg
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                  className="w-6 h-6 text-sky-500 scale-125 "
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <div className="text-black">
                                Continue with Google
                              </div>
                              <div></div>
                            </div>
                          </button>

                          <button
                            type="submit"
                            className=" w-full p-4 rounded-xl border-e border-s border-t border-b border-black my-2"
                          >
                            <div className="flex flex-row justify-between ">
                              <div>
                                {" "}
                                <svg
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                  className="w-6 h-6 text-sky-500 scale-125 "
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <div className="text-black">
                                Continue with Apple
                              </div>
                              <div></div>
                            </div>
                          </button>

                          <button
                            type="submit"
                            className=" w-full p-4 rounded-xl border-e border-s border-t border-b border-black my-2"
                          >
                            <div className="flex flex-row justify-between ">
                              <div>
                                {" "}
                                <svg
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                  className="w-6 h-6 text-sky-500 scale-125 "
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <div className="text-black">
                                Continue with email
                              </div>
                              <div></div>
                            </div>
                          </button>

                          <button
                            type="submit"
                            className=" w-full p-4 rounded-xl border-e border-s border-t border-b border-black my-2"
                          >
                            <div className="flex flex-row justify-between ">
                              <div>
                                {" "}
                                <svg
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                  className="w-6 h-6 text-sky-500 scale-125 "
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <div className="text-black">
                                Continue with Facebook
                              </div>
                              <div></div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>

          <div className="relative ">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100 " />
            <div className="w-screen">
              <div className="relative sm:overflow-hidden ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-screen object-cover"
                    src="assets/hero.png"
                    alt="Hero Pic"
                  />
                </div>

                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 flex flex-col items-center">
                  <h1 className="font-nunito text-center text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl m-7">
                    <span className="block text-white">
                      Where will you find yourself
                    </span>
                  </h1>

                  <div className="w-fit ">
                    <div className="flex flex-row items-center justify-center text-black text-sm  rounded-full  overflow-hidden">
                      <div className="flex flex-row justify-center items-center bg-white w-100 h-100 ">
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
