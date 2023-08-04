import React, { useState } from "react";
import Input from "@/components/common/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import Container from "@/components/common/Container";
import { FiSmartphone } from "react-icons/fi";
import { Button } from "@/components/common/Button";
import Link from "next/link";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({});
  return (
    <Container>
      <div className="w-full h-full py-4">
        <h3 className="font-poppins font-semibold text-2xl">Checkout</h3>
      </div>
      <div className="w-full h-full flex gap-4 items-start font-poppins my-4">
        <div className="w-8/12 h-full">
          <div className="py-4 shadow-3xl p-2">
            <h4 className="font-semibold text-base">Billing Information</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full gap-4">
              <Input
                id="fullname"
                label="Full Name"
                icon={<AiOutlineUser />}
                type="text"
                register={register}
                disabled={isLoading}
                errors={errors}
                required
              />
              <Input
                id="mobilenumber"
                label="Mobile Number"
                icon={<FiSmartphone />}
                type="text"
                register={register}
                disabled={isLoading}
                errors={errors}
                required
              />
              <Input
                id="email"
                label="Email ID"
                icon={<AiOutlineMail />}
                type="text"
                register={register}
                disabled={isLoading}
                errors={errors}
                required
              />
              <Input
                id="country"
                label="Country"
                icon={<AiOutlineUser />}
                type="text"
                register={register}
                disabled={isLoading}
                errors={errors}
                required
              />
              <Input
                id="state"
                label="State"
                icon={<AiOutlineUser />}
                type="text"
                register={register}
                disabled={isLoading}
                errors={errors}
                required
              />
              <Input
                id="city"
                label="City"
                icon={<AiOutlineUser />}
                type="text"
                register={register}
                disabled={isLoading}
                errors={errors}
                required
              />
            </div>
            <div className="pt-6 text-right">
              <Button>Add Details</Button>
            </div>
          </div>
        </div>
        <div className="w-4/12  h-full shadow-3xl p-2">
          <h4 className="py-2 font-semibold text-xl">Order Summary</h4>
          <div className="flex items-center w-full shadow-3xl p-0 rounded-sm">
            <input
              type="text"
              placeholder="Have coupon code?"
              className="w-full border-none focus:ring-0 outline-none bg-gray-100 placeholder:text-sm"
            />
            <Button>Apply</Button>
          </div>
          <div className="w-full h-full flex flex-col gap-4 px-1 py-4 font-semibold text-sm">
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span>2500</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Discount</span>
              <span>200</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Future Payment</span>
              <span>1675</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Pay Deposit</span>
              <span>625</span>
            </div>
            <div className="flex items-center justify-between text-sm text-neutral-600 pt-4">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="p-2 rounded-sm" />I agree with
                the{" "}
                <Link href="/terms-conditions" className="text-blue-400">
                  terms & condition
                </Link>
              </label>
            </div>
          </div>
          <Button size="xl" variant="dark" href="/checkout">
            Proceed to checkout
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
