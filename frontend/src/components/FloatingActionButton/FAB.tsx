import React, { useState } from "react";
import { BsWhatsapp, BsTelephoneOutbound } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const actions = [
  {
    label: "Whatsapp",
    icon: <BsWhatsapp />,
    href: "https://web.whatsapp.com/send?phone=917387960861&text=Hello!",
  },
  {
    label: "Profile",
    icon: <BsTelephoneOutbound />,
    href: "tel:+917387960861",
  },
  {
    label: "Email",
    icon: <MdOutlineEmail />,
    href: "mailto:choiceyourtrip@gmail.com",
  },
];

const FAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.5,
      },
    },
  };

  return (
    <ul
      className="fixed flex  items-center gap-3 flex-col-reverse m-0 p-0 right-2 bottom-6 md:bottom-28 z-50"
      onClick={toggleHandler}
    >
      <li className="rounded-full shadow-2xl cursor-pointer p-3 relative grid place-content-center bg-variant text-2xl md:text-3xl text-white">
        <FiHelpCircle />
      </li>
      {isOpen &&
        actions.map((action, index) => (
          <AnimatePresence>
            <motion.li
              className="translate-y-0 transition ease-in-out duration-300 delay-150 text-2xl bg-white text-variant p-3 shadow-4xl rounded-full"
              key={index}
              variants={container}
              initial="hidden"
              animate="show"
            >
              <Link href={action.href}>{action.icon}</Link>
            </motion.li>
          </AnimatePresence>
        ))}
    </ul>
  );
};

export default FAB;