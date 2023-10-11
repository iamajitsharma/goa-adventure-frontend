import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import profileImage from "../../../public/assets/user-profile.jpg";
import Link from "next/link";
import useCustomer from "@/hook/useCustomer";

const userNavigation = [
  { name: "My Booking", href: "booking-history" },
  { name: "Wishlist", href: "wishlist" },
  { name: "Your Profile", href: "my-profile" },
  // { name: "Sign out", href: "" },
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
  const { customer, setCustomer, logoutCustomer }: any = useCustomer();
  return (
    <div className="block">
      <div className="flex items-center">
        <Menu as="div" className="relative ml-3">
          <div className="w-10 h-10">
            <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">Open user menu</span>
              <Image
                src={
                  customer?.user?.profile_image
                    ? customer.user.profile_image
                    : profileImage
                }
                alt=""
                className="rounded-full "
                width={"100"}
                height={"100"}
              />
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
              <Menu.Item key={"Sign out"}>
                {({ active }) => (
                  <Link
                    href={`/`}
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    <button
                      onClick={() => logoutCustomer(customer)}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Sign out
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default UserNavigation;
