// import React, { useState } from "react";

// import { motion } from "framer-motion";
// import router from "next/router";
// import { title } from "process";
// import { BsCurrencyRupee } from "react-icons/bs";
// import { FiMinus, FiPlus } from "react-icons/fi";
// import { Button } from "../common/Button";
// import Box from "../common/Box";
// import useProduct from "@/hook/useProduct";

// interface DesktopPricingProps {
//   price?: number;
//   salePrice?: number;
//   discount?: number;
//   title: string;
//   product_id: number;
//   deposit_value: any;
// }
// const DesktopPricing: React.FC<DesktopPricingProps> = ({
//   price,
//   salePrice,
//   discount,
//   date,
//   product_id,
//   title,
//   deposit_value,
// }) => {
//   const [fromDate, setFromDate] = useState<any>(null);
//   const [quantity, setQuantity] = useState(1);
//   const { product, setProduct, discardProduct } = useProduct();

//   const incrementHandler = () => {
//     console.log("Quantituy hitted");
//     setQuantity(quantity + 1);
//   };

//   const DecrementHandler = () => {
//     console.log("Quantituy hitted");
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <Box className="bg-white mt-0">
//       <div className="flex flex-col md:gap-3">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-1 text-sm text-gray-500">
//             <p>Starting from</p>
//             <span className="flex items-center line-through ">
//               <BsCurrencyRupee />
//               {price}
//             </span>
//           </div>
//           <button className="p-2 bg-orange-200/80 text-primary font-medium rounded-md max-w-fit">
//             {discount}% Off
//           </button>
//         </div>
//         <div className="flex items-center justify-between gap-0 md:flex-col md:gap-4 lg:flex-row ">
//           <div className="flex items-center">
//             <span className="flex items-center justify-center text-2xl font-semibold text-variant">
//               <BsCurrencyRupee />
//               {salePrice}
//             </span>
//             <span className="text-primary self-end">/Person</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <input
//               type="date"
//               className="rounded-md cursor-pointer"
//               onChange={(e) => setFromDate(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="flex justify-between items-center md:flex-col lg:flex-row">
//           <p className="md:hidden lg:block text-xs text-textBlack">
//             Just pay 25% now to book your seat
//           </p>
//           <div className="flex items-center gap-2">
//             <motion.span
//               className="shadow-md p-1 text-3xl rounded-md cursor-pointer"
//               whileTap={{ scale: 1.1 }}
//               onClick={() => DecrementHandler()}
//             >
//               <FiMinus />
//             </motion.span>

//             <input
//               type="text"
//               min={1}
//               value={quantity}
//               className="w-12 h-8 rounded-md text-base font-semibold"
//             />

//             <motion.span
//               className="shadow-md p-1 text-3xl rounded-md cursor-pointer"
//               whileTap={{ scale: 1.1 }}
//               onClick={() => incrementHandler()}
//             >
//               <FiPlus />
//             </motion.span>
//           </div>
//         </div>

//         <Button
//           size="xl"
//           variant="primary"
//           // href="/cart"
//           onClick={() => {
//             discardProduct({
//               quantity,
//               actualPrice: price,
//               priceToBePaid: salePrice,
//               toDate,
//               fromDate,
//               product_id,
//               title,
//               deposit_value,
//             });
//             setProduct({
//               quantity,
//               actualPrice: price,
//               priceToBePaid: salePrice,
//               toDate,
//               fromDate,
//               product_id,
//               title,
//               deposit_value,
//             });
//             router.push(`/cart`);
//           }}
//         >
//           Book Now
//         </Button>
//       </div>
//     </Box>
//   );
// };

// export default DesktopPricing;
