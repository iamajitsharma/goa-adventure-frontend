import React, { useCallback, useState } from "react";
import Input from "../common/inputs/Input";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { FiSmartphone } from "react-icons/fi";
import useAuthModal from "@/hook/useAuthModal";
import { useSelector } from "react-redux";
import MobileInput from "../common/inputs/MobileInput";
import { useRouter } from "next/router";
import { customerEmailLogIn } from "@/lib/api";
import useCustomer from "@/hook/useCustomer";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";

const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const { customer, setCustomer } = useCustomer();

  // Subscribing Login Modal From Redux
  const isLoginModalOpen = useSelector(
    (state: any) => state.authModal.isLoginModalOpen
  );
  const { closeLogin, openRegister } = useAuthModal();
  console.log("CUSTOEMR Login Modal", customer);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({});

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Email ID", data.email);
    console.log("Password", data.password);

    const response = await customerEmailLogIn(data.email, data.password);
    console.log("Response from login", response);

    setCustomer(data);
    reset();
    closeLogin();
  };

  const onToggle = useCallback(() => {
    closeLogin();
    openRegister();
  }, [closeLogin, openRegister]);

  const togglePasswordVisiblity = () => setShowPassword(!showPassword);

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

      <div>
        <Input
          id="password"
          label="Password"
          disabled={isLoading}
          type={showPassword ? "text" : "password"}
          icon={
            showPassword ? (
              <AiOutlineEye
                onClick={togglePasswordVisiblity}
                className="cursor-pointer"
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={togglePasswordVisiblity}
                className="cursor-pointer"
              />
            )
          }
          register={register}
          errors={errors}
          required
          rules={{
            required: "Password is required",
            min: 8,
          }}
        />
        {errors.password && (
          <p className="text-xs text-neutral-500">
            Please enter valid password
          </p>
        )}
      </div>

      <div className="flex items-center justify-between text-sm text-neutral-600 pt-4">
        {/* <label className="inline-flex items-center gap-2">
          <input type="checkbox" className="p-2 rounded-sm" />
          Remember me
        </label> */}
      </div>
    </div>
  );
  const footerContent = (
    <div>
      {/* <SocialLogin /> */}
      <h4 className="text-center text-sm font-semibold text-neutral-600 py-2">
        Don't have an account?
        <span className="cursor-pointer pl-2 text-primary" onClick={onToggle}>
          Register
        </span>
      </h4>
    </div>
  );

  return (
    <Modal
      isOpen={isLoginModalOpen}
      onClose={closeLogin}
      title="Login"
      actionLabel="Log In"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
      error={error}
    />
  );
};

export default LoginModal;
