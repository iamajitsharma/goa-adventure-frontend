import React, { useCallback, useState } from "react";
import Input from "../common/inputs/Input";
import Modal from "./Modal";

const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <h4>Welcome back</h4>
      <input type="text" id="email" required />
      <input type="password" id="password" required />
    </div>
  );
  const footerContent = <div>Footer</div>;

  return <Modal title="Login" body={bodyContent} />;
};

export default LoginModal;
