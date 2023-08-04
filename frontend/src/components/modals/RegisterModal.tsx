import React, { useCallback, useState } from "react";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FiSmartphone } from "react-icons/fi";
import useAuthModal from "@/hook/useAuthModal";
import { useSelector } from "react-redux";
import Input from "../common/inputs/Input";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import MobileInput from "../common/inputs/MobileInput";
import SocialLogin from "../login/SocialLogin";

const RegisterModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasFilled, setHasFilled] = useState(false);

  const isRegisterModalOpen = useSelector(
    (state: any) => state.authModal.isRegisterModalOpen
  );
  const { closeLogin, openRegister, closeRegister, openLogin } = useAuthModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({});

  const onSubmit: SubmitHandler<FieldValues> = () => {
    setIsLoading(true);
    setHasFilled(true);

    // axios
    //   .post("/api/register", data)
    //   .then(() => {
    //     toast.success("Registered!");
    //     registerModal.onClose();
    //     loginModal.onOpen();
    //   })
    //   .catch((error) => {
    //     toast.error(error);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  //Modal Toggle Function
  const onToggle = useCallback(() => {
    closeRegister();
    openLogin();
  }, [closeRegister, openLogin]);

  const bodyContent = (
    <div className="mt-6 px-4 flex flex-col gap-2">
      <Input
        id="fullname"
        label="Full Name"
        type="text"
        icon={<AiOutlineUser />}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />

      <Input
        id="email"
        label="Email"
        type="email"
        icon={<AiOutlineMail />}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />

      <MobileInput
        id="mobilenumber"
        label="Mobile Number"
        type="text"
        icon={<FiSmartphone />}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />

      <Input
        id="otp"
        label="OTP"
        type="text"
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
    </div>
  );
  const footerContent = (
    <div>
      <SocialLogin />
      <h4 className="text-center text-sm font-semibold text-neutral-600 py-2">
        Already have an account?
        <span className="cursor-pointer pl-2 text-primary" onClick={onToggle}>
          Sign In
        </span>
      </h4>
    </div>
  );

  return (
    <Modal
      isOpen={isRegisterModalOpen}
      title="Register"
      actionLabel="Create an account"
      onClose={closeRegister}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
