import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { RiMenu3Line } from "react-icons/ri";
import {
  MdOutlineFavoriteBorder,
  MdLogout,
  MdLogin,
  MdOutlineAccountBox,
  MdKitesurfing,
} from "react-icons/md";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import useLoginModal from "@/hook/useLoginModal";

const UserMenu = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  const menuToggleHandler = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div
        onClick={menuToggleHandler}
        className="min-w-fit w-20 px-2 py-1 flex flex-row items-center justify-between  gap-2 rounded-full cursor-pointer border-[1px] border-gray-400 shadow-md hover:shadow-md transition"
      >
        <RiMenu3Line fontSize="25" className="shrink-0" />
        <Avatar />
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[15vw] bg-white right-0 top-12 text-sm transition">
          {currentUser ? (
            <>
              <MenuItem
                icon={<MdKitesurfing className="w-5 h-5" />}
                label="My Booking"
                onClick={() => router.push("/my-booking")}
              />
              <MenuItem
                icon={<MdOutlineFavoriteBorder className="w-5 h-5" />}
                label="Wishlist"
                onClick={() => router.push("/my-booking")}
              />
              <MenuItem
                icon={<MdLogout className="w-5 h-5" />}
                label="Logout"
                onClick={() => setCurrentUser(false)}
              />
            </>
          ) : (
            <>
              <MenuItem
                icon={<MdLogin className="w-5 h-5" />}
                label="Login"
                onClick={loginModal.onOpen}
              />
              <MenuItem
                icon={<MdOutlineAccountBox className="w-5 h-5" />}
                label="Sign Up"
                onClick={() => router.push("/sign-up")}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
