import React, { useCallback, useState } from "react";
import Input from "../common/inputs/Input";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import Button from "../common/Button";

const LoginModal = () => {
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <h4>Welcome back</h4>
      <Input id="countrycode" label="+91" required />
      <Input id="mobile" type="number" label="Mobile Number" required />
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Facebook"
        icon={ImFacebook2}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Email"
        icon={TfiEmail}
        onClick={() => {}}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <p>
          First time using goa adventure?
          <span
            onClick={() => {}}
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            {" "}
            Create an account
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={true}
      title="Log in or sign up"
      actionLabel="Login"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
