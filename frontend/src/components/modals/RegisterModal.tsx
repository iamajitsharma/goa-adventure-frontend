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
  const [mobileNo, setMobileNo] = useState("");
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

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

  const handleDataSubmit = () => {
    console.log("Email MObilenumber name", email, mobileNo, name);
    let errorVal = 0;
    if (name.length == 0) {
      const errorStatus = {
        status: true,
        message: "Please enter email",
      };
      setError(errorStatus);
      errorVal = 1;
    }

    if (email.length == 0) {
      const errorStatus = {
        status: true,
        message: "Please enter email",
      };
      setError(errorStatus);
      errorVal = 1;
    }
    if (mobileNo.length == 0) {
      const errorStatus = {
        status: true,
        message: "Please enter mobile Number",
      };
      setError(errorStatus);
      errorVal = 1;
    } else if (mobileNo.length < 10) {
      const errorStatus = {
        status: true,

        message: "MObile Number must be equal to 10 digits",
      };
      setError(errorStatus);
      errorVal = 1;
    }
    console.log("");

    if (errorVal == 0) {
      setError({
        status: false,
        message: "",
      });
    }
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
        errors={error}
        inputData={name}
        setInputData={setName}
        setError={setError}
        required
      />

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

      {/* <Input
        id="otp"
        label="OTP"
        type="text"
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      /> */}
    </div>
  );
  const footerContent = (
    <div>
      {/* <SocialLogin /> */}
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
      onSubmit={handleDataSubmit}
      body={bodyContent}
      footer={footerContent}
      error={error}
    />
  );
};

export default RegisterModal;
