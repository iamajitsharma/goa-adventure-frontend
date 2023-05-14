import { MenuItemsProps } from "@headlessui/react";
import React from "react";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  icon?: JSX.Element;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, icon }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-row items-center gap-2 px-4 py-3 h hover:bg-neutral-100 transition font-semibold text-gray-700/80 cursor-pointer"
    >
      {icon}
      {label}
    </div>
  );
};

export default MenuItem;
