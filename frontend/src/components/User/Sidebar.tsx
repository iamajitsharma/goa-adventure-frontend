import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoGridOutline, IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const userMenu = [
  {
    name: "Booking",
    href: "/user/bookings",
    icon: <IoGridOutline className="text-xl" />,
  },

  {
    name: "Profile",
    href: "/user/my-profile",
    icon: <CgProfile className="text-xl" />,
  },
];

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="w-full hidden md:block md:w-3/12 h-auto bg-transparent md:bg-white p-2">
      <ul className="font-poppins overflow-x-scroll no-scrollbar leading-loose w-full flex flex-col gap-2 items-center justify-start md:items-start ">
        {userMenu.map((item) => (
          <li
            key={item.name}
            className={`
                  px-6 py-2 border-2 border-neutral-600 rounded-md  text-neutral-700 font-medium  transition ease-in-out duration-300 delay-200 text-center min-w-[160px] sm:min-w-[200px] md:w-full md:border-b-[1px] md:border-x-0 md:border-t-0  md:border-slate-100 
                  ${
                    router.pathname === item.href
                      ? "bg-primary border-primary transition ease-in-out duration-200"
                      : "bg-transparent"
                  }

                  `}
          >
            <Link
              href={item.href}
              className="flex items-center justify-center md:justify-start flex-row gap-2 text-sm  font-semibold sm:text-base sm:font-medium"
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
