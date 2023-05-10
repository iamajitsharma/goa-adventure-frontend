import React, { Fragment, useState } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";
import { FaGoogle } from "react-icons/fa";
import DropDown from "./DropDown";
interface ILogIn {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LogIn({ setIsOpen, isOpen }: ILogIn) {
  function closeModal() {
    setIsOpen(false);
  }
  const [mouseX, setMouseX] = useState<number>(50);
  const [mouseY, setMouseY] = useState<number>(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) * 100) / e.currentTarget.clientWidth;
    const y = ((e.clientY - rect.top) * 100) / e.currentTarget.clientHeight;
    setMouseX(x);
    setMouseY(y);
  };

  const buttonStyle = {
    "--mouse-x": mouseX,
    "--mouse-y": mouseY,

    backgroundSize: "200% 200%",
    backgroundPosition: `calc((100% - ${mouseX}%) * 1%) calc((100% - ${mouseY}%) * 1%)`,
    backgroundImage:
      "radial-gradient(circle,rgb(215, 4, 102) 0%, rgba(255,49,91,1) 100%)",
    cursor: "pointer",
    border: "none",

    fontFamily: `'Raleway', sans-serif`,
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={() => closeModal()}>
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
              enter="ease-out duration-800"
              enterFrom="opacity-100 scale-100  -bottom-24 md:-bottom-48 lg:-bottom-32"
              enterTo="opacity-100 scale-100  bottom-24 md:bottom-48 lg:bottom-32"
              leave="ease-in duration-400 bottom-24  md:-bottom-48 lg:bottom-32"
              leaveFrom="opacity-100 scale-100 "
              leaveTo="opacity-0 scale-100"
            >
              <Dialog.Panel className="w-10/12 md:w-3/6 -translate-x-2 translate-y-5 lg:w-full lg:max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all absolute">
                <div>
                  <header className="flex flex-col ">
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
                    <div className="mt-4 h-10">
                      {/* <input
                        className="rounded-t-md w-full focus:border-black focus:border-md focus:border-b-0 mt-6 p-4"
                        type="text"
                        placeholder="Country/Region"
                      /> */}
                      <DropDown />
                    </div>

                    {/* <input
                        type="text"
                        className="rounded-b-md w-full mb-2 p-4"
                        placeholder="Mobile Number"
                      /> */}
                    <div className="relative mb-4">
                      <input
                        type="text"
                        id="floating_filled"
                        className="block rounded-b-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400  dark:bg-white  border-2 border-gray-400 appearance-none dark:text-gray-400 dark:border-gray-400 dark:border dark:focus:border-black  dark:focus:border-2 dark:focus:rounded-md focus:outline-none focus:ring-0  peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="floating_filled"
                        className="absolute text-sm text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        Phone number
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="bg-red-500 w-full p-4 rounded-xl login-btn"
                      style={buttonStyle}
                      onMouseMove={handleMouseMove}
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
                        <div className="">
                          {" "}
                          <img
                            src="google.svg"
                            alt="Google Icon"
                            className="w-6 h-6"
                          />
                        </div>
                        <div className="text-black">Continue with Google</div>
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
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-black"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                          </svg>
                        </div>
                        <div className="text-black">Continue with email</div>
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
                        <div className="text-black">Continue with Facebook</div>
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
  );
}
