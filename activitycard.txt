import React from "react";

export default function Activity() {
  return (
    <div className="flex flex-col text-black text-sm mx-8 my-2">
      <img src="thrillingactivity.png" alt="Activity image" />

      <div className="flex flex-row">
        <div className=" mr-2 justify-start flex flex-col">
          <span className="my-2">Bungee Jumping in Goa</span>
          <div className="my-2 flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6  text-gray-600"
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

            <span className="mx-1  text-gray-400">Goa, India</span>
          </div>

          <div className="my-2 flex flex-row items-center">
            <span className=" text-gray-400 text-decoration-line: line-through text-xs">
              3750
            </span>

            <span className="mx-2  text-gray-600">2999 per person</span>
          </div>
        </div>
        <div className="flex flex-col justify-start  ml-2">
          <div className="flex flex-row justify-end items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-yellow-500 m-1 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <span className="px-1">4.5</span>
          </div>
          <div className="flex flex-row justify-end items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="px-1">30 mins</span>
          </div>
        </div>
      </div>
    </div>
  );
}
