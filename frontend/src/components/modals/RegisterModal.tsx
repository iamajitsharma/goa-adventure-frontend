import React, { useCallback, useState } from "react";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FiSmartphone } from "react-icons/fi";
import useAuthModal from "@/hook/useAuthModal";
import { useSelector } from "react-redux";
import Input from "../common/inputs/Input";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import MobileInput from "../common/inputs/MobileInput";
import { createCustomerAndLogin } from "../../lib/api";
import { RiMapPin5Line } from "react-icons/ri";
import { FcGoogle } from "react-icons/FC";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const RegisterModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasFilled, setHasFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const isRegisterModalOpen = useSelector(
    (state: any) => state.authModal.isRegisterModalOpen
  );
  const { closeLogin, openRegister, closeRegister, openLogin } = useAuthModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      mobileNo: "",
      city: "",
      state: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
    reset();
    closeRegister();
    openLogin();
  };

  // const handleDataSubmit = (data: any) => {
  //   console.log(data);
  //   //   //console.log("Email MObilenumber name", email, mobileNo, name);
  //   //   let errorVal = 0;
  //   //   if (name.trim().length === 0) {
  //   //     const errorStatus = {
  //   //       status: true,
  //   //       message: "Please enter your full name",
  //   //     };
  //   //     setError(errorStatus);
  //   //     errorVal = 1;
  //   //   }
  //   //   if (email.length == 0) {
  //   //     const errorStatus = {
  //   //       status: true,
  //   //       message: "Please enter email",
  //   //     };
  //   //     setError(errorStatus);
  //   //     errorVal = 1;
  //   //   }
  //   //   if (mobileNo.length == 0) {
  //   //     const errorStatus = {
  //   //       status: true,
  //   //       message: "Please enter mobile Number",
  //   //     };
  //   //     setError(errorStatus);
  //   //     errorVal = 1;
  //   //   } else if (mobileNo.length < 10) {
  //   //     const errorStatus = {
  //   //       status: true,
  //   //       message: "MObile Number must be equal to 10 digits",
  //   //     };
  //   //     setError(errorStatus);
  //   //     errorVal = 1;
  //   //   }
  //   //   //console.log("");
  //   //   if (errorVal == 0) {
  //   //     setError({
  //   //       status: false,
  //   //       message: "",
  //   //     });
  //   //     // const logInData = await createCustomerAndLogin(email, mobileNo, name);
  //   //     //console.log("LOGIN DATA", logInData);
  //   //   }
  // };

  //Modal Toggle Function
  const onToggle = useCallback(() => {
    closeRegister();
    openLogin();
  }, [closeRegister, openLogin]);

  //Password Visible Function
  const togglePasswordVisiblity = () => setShowPassword(!showPassword);

  const bodyContent = (
    <div className="mt-6 px-4 flex flex-col gap-2">
      <div>
        <Input
          id="name"
          label="Full Name"
          icon={<AiOutlineUser />}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          rules={{
            required: "Please enter your fullname",
            minLength: 3,
          }}
        />
        {errors.name && (
          <p className="text-xs text-neutral-500">Please valid fullname</p>
        )}
      </div>
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
          id="mobileNo"
          label="Mobile No"
          icon={<FiSmartphone />}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          rules={{
            required: "Please enter 10 digit mobile number",
            min: 3,
          }}
        />
        {errors.mobileNo && (
          <p className="text-xs text-neutral-500">
            Please enter 10 digit mobile number
          </p>
        )}
      </div>

      {/* City and State */}
      <div className="flex items-center gap-2">
        <div>
          <Input
            id="city"
            label="City"
            icon={<RiMapPin5Line />}
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            rules={{
              required: "City is required",
              minLength: 3,
            }}
          />
          {errors.city && (
            <p className="text-xs text-neutral-500">
              Please enter valid city name
            </p>
          )}
        </div>
        <div>
          <Input
            id="state"
            label="State"
            icon={<RiMapPin5Line />}
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            rules={{
              required: "State is required",
              minLength: 3,
            }}
          />
          {errors.state && (
            <p className="text-xs text-neutral-500">
              Please enter valid state name
            </p>
          )}
        </div>
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
            password must be at least 8 characters
          </p>
        )}
      </div>
    </div>
  );
  const footerContent = (
    <div>
      <div>
        {/* <SocialLogin /> */}
        <h4 className="text-center text-sm font-semibold text-neutral-600 py-2">
          Already have an account?
          <span className="cursor-pointer pl-2 text-primary" onClick={onToggle}>
            Sign In
          </span>
        </h4>
      </div>
      <div className="flex items-center justify-center gap-6 text-xl px-4 py-4 text-neutral-500">
        <motion.span
          className="border-2 border-neutral-400 p-2 rounded-md cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <FaGoogle />
        </motion.span>
        <motion.span
          className="border-2 border-neutral-400 p-2 rounded-md cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <FaFacebookF />
        </motion.span>
        <motion.span
          className="border-2 border-neutral-400 p-2 rounded-md cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <FaTwitter />
        </motion.span>
        <motion.span
          className="border-2 border-neutral-400 p-2 rounded-md cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={onToggle}
        >
          <FaEnvelope />
        </motion.span>
      </div>
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
