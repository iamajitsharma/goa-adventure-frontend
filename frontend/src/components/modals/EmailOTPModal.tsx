import React, { useState } from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import useAuthModal from "@/hook/useAuthModal";
import Input from "../common/inputs/Input";
import { TbPointer } from "react-icons/tb";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const EmailOTPModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isEmailOTPModalOpen = useSelector(
    (state: any) => state.authModal.isEmailOTPModalOpen
  );
  const { closeEmailOTP, openLogin } = useAuthModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({});

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const bodyContent = (
    <div className="mt-8 px-4 flex flex-col gap-2">
      <div>
        <Input
          id="email"
          label="ENTER OTP"
          icon={<TbPointer />}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          rules={{
            required: "OTP is required",
          }}
        />
        {errors.email && (
          <p className="text-xs text-neutral-500">Please enter valid otp</p>
        )}
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={isEmailOTPModalOpen}
      onClose={closeEmailOTP}
      title="Validate OTP"
      actionLabel="Reset"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default EmailOTPModal;
