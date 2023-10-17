import React, { useState } from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import useAuthModal from "@/hook/useAuthModal";
import Input from "../common/inputs/Input";
import { AiOutlineMail } from "react-icons/ai";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ForgetPWDModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isForgetModalOpen = useSelector(
    (state: any) => state.authModal.isForgetModalOpen
  );
  const { openForget, closeForget, closeLogin, openEmailOTP } = useAuthModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({});

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    closeForget();
    openEmailOTP();
  };

  const bodyContent = (
    <div className="mt-8 px-4 flex flex-col gap-2">
      <div>
        <Input
          id="email"
          label="Email"
          icon={<AiOutlineMail />}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: "Invalid email address",
            },
          }}
        />
        {errors.email && (
          <p className="text-xs text-neutral-500">Please enter valid email</p>
        )}
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={isForgetModalOpen}
      onClose={closeForget}
      title="Forget Password"
      actionLabel="Reset"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default ForgetPWDModal;
