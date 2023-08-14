import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/common/Button";
import successImage from "../../public/assets/success-tick.png";
import { useRouter, useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  const [isGrowing, setIsGrowing] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log("ROuter", router);
    const interval = setInterval(() => {
      setIsGrowing((prevIsGrowing) => !prevIsGrowing);
    }, 1000);

    setTimeout(() => {
      router.push(`/invoice?order_id=${searchParams.get("order_id")}`);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const size = isGrowing ? "100px" : "120px";

  return (
    <div className="w-full h-[70vh] py-8 flex items-center justify-center flex-col font-poppins">
      <Image src={successImage} alt="" className="animate-bounce w-20 h-20" />
      <div className="flex items-center justify-center flex-col gap-0">
        <h2 className="text-3xl font-bold text-green-600 mt-8">
          Payment Successful!
        </h2>
        <p className="text-base text-gray-600 py-2 text-center">
          Thank you for your payment. Your transaction has been successfully
          processed.
        </p>
      </div>
      <Button variant="primary" className="my-8" href="/user/booking-history">
        Dashboard
      </Button>
    </div>
  );
}
