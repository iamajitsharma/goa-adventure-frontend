import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

import { v4 as uuid } from "uuid";

export const contactLinks = [
  {
    id: uuid(),
    title: "+91 8237060861",
    link: "tel:+918237060861",
    icon: <FiPhone size={20} />,
  },
  {
    id: uuid(),
    title: "+91 7387960861",
    link: "tel:+917387960861",
    icon: <FiPhone size={20} />,
  },
  {
    id: uuid(),
    title: "info@goaadventure.in",
    link: "mailto:info@goaadventure.in",
    icon: <FiMail size={20} />,
  },
  {
    id: uuid(),
    title: "Car Parking Calngute Beach Goa 403516",
    link: "https://maps.app.goo.gl/javrPWZt5Mx5Xw6M7",
    icon: <FiMapPin size={20} />,
  },
];

export const quickLinks = [
  { id: uuid(), title: "About Us", link: "/about-us" },
  { id: uuid(), title: "Activity", link: "/activity" },
  { id: uuid(), title: "Tour Packages", link: "/tour" },
  { id: uuid(), title: "Privacy Policy", link: "/privacy-policy" },
  { id: uuid(), title: "Terms & Conditions", link: "/terms-conditions" },
  { id: uuid(), title: "Contact Us", link: "/contact-us" },
];
