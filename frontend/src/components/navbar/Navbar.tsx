import React, { Fragment, useState } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";

interface INavbar {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setIsOpen }: INavbar) {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
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
  );
}
