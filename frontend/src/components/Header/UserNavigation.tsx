import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import profileImage from "../../../public/assets/user-profile.jpg";
import Link from "next/link";

const userNavigation = [
  { name: "My Booking", href: "booking-history" },
  { name: "Your Profile", href: "my-profile" },
  { name: "Settings", href: "settings" },
  { name: "Sign out", href: "logout" },
];

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "/assets/placeholder.jpg",
};
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const UserNavigation = () => {
  return (
    <div className="block">
      <div className="flex items-center">
        <Menu as="div" className="relative ml-3">
          <div className="w-12 h-12">
            <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">Open user menu</span>
              <Image src={profileImage} alt="" className="rounded-full" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link
                      href={`/user/${item.href}`}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default UserNavigation;
