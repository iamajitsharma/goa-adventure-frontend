import React, { useState, useCallback } from "react";
import Modal from "./Modal";
import useAuthModal from "@/hook/useAuthModal";
import { useSelector } from "react-redux";
import Input from "../common/inputs/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import SocialLogin from "../login/SocialLogin";

const EmailLoginModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isEmailLoginModalOpen = useSelector(
    (state: any) => state.authModal.isEmailLoginModalOpen
  );
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ status: false, message: "" });

  const handleDataSubmit = () => {
    if (email.length == 0) {
      const errorStatus = {
        status: true,
        message: "Please enter email",
      };
      setError(errorStatus);
    } else {
      const errorStatus = {
        status: false,
        message: "",
      };
      setError(errorStatus);
      console.log("Captured Value email", email);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({});

  const { closeEmailLogin, openRegister } = useAuthModal();
  const onToggle = useCallback(() => {
    closeEmailLogin();
    openRegister();
  }, [closeEmailLogin, openRegister]);

  const bodyContent = (
    <>
      <div className="mt-8 px-4 flex flex-col gap-2">
        <Input
          id="email"
          label="Email"
          type="email"
          register={register}
          disabled={isLoading}
          errors={error}
          inputData={email}
          setInputData={setEmail}
          setError={setError}
          required
        />

        <div className="flex items-center justify-between pt-4">
          <div className="text-sm text-neutral-600">
            {/* <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="p-2 rounded-sm" />
              Remember me
            </label> */}
          </div>
          <span className="text-sm text-neutral-600 cursor-pointer">
            Forget password?
          </span>
        </div>
      </div>
    </>
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
      isOpen={isEmailLoginModalOpen}
      onClose={closeEmailLogin}
      disabled={isLoading}
      onSubmit={handleDataSubmit}
      title="Log in with email"
      body={bodyContent}
      footer={footerContent}
      actionLabel="Continue with email"
      error={error}
    />
  );
};

export default EmailLoginModal;
