import React, { useState } from "react";
import { Button } from "../common/Button";
import Link from "next/link";
import { BsCurrencyRupee } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import Box from "../common/Box";

import DatePicker, { DayValue } from "react-modern-calendar-datepicker";

interface PricingProps {
  price: string | number;
  salePrice: string | number;
  discount: string | number;
  date?: Date;
}

const Pricing: React.FC<PricingProps> = ({
  price,
  salePrice,
  discount,
  date,
}) => {
  return <></>;
};

export default Pricing;
