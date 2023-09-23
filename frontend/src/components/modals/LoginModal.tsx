import React, { useCallback, useState } from "react";
import Input from "../common/inputs/Input";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { FiSmartphone } from "react-icons/fi";
import useAuthModal from "@/hook/useAuthModal";
import { useSelector } from "react-redux";
import MobileInput from "../common/inputs/MobileInput";
import SocialLogin from "../login/SocialLogin";
import { useRouter } from "next/router";

const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ status: false, message: "" });
  // function handleDataSubmit(mobileNo: string) {
  const handleDataSubmit = () => {
    if (mobileNo.length < 10) {
      const errorStatus = {
        status: true,
        message: "MObile Number must be equal to 10 digits",
      };
      setError(errorStatus);
    } else if (mobileNo.length == 0) {
      const errorStatus = {
        status: true,
        message: "Please enter mobile Number",
      };
      setError(errorStatus);
    } else if (password.length == 0) {
      const errorStatus = {
        status: true,
        message: "Please enter Password",
      };
      setError(errorStatus);
    } else {
      const errorStatus = {
        status: false,
        message: "",
      };
      setError(errorStatus);
      console.log("Captured Value", mobileNo, password);
    }
  };

  const isLoginModalOpen = useSelector(
    (state: any) => state.authModal.isLoginModalOpen
  );
  const { closeLogin, openRegister, openLogin } = useAuthModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({});

  const SubmitHandler = (e: any) => e.preventDefault();

  const onToggle = useCallback(() => {
    closeLogin();
    openRegister();
  }, [closeLogin, openRegister]);

  const bodyContent = (
    <div className="mt-8 px-4 flex flex-col gap-2">
      <MobileInput
        id="mobilenumber"
        label="Mobile Number"
        icon={<FiSmartphone />}
        register={register}
        disabled={isLoading}
        errors={error}
        mobileNo={mobileNo}
        setMobileNo={setMobileNo}
        setError={setError}
        required
      />

      <Input
        id="password"
        label="Password"
        type="password"
        register={register}
        disabled={isLoading}
        errors={error}
        inputData={password}
        setInputData={setPassword}
        setError={setError}
        required
      />

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
      onSubmit={handleDataSubmit}
      body={bodyContent}
      footer={footerContent}
      error={error}
    />
  );
};

export default LoginModal;
