import React, { useCallback, useState } from "react";
import Modal from "./Modal";
import useLoginModal from "@/hook/useLoginModal";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = () => {
    setIsLoading(true);
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <h4>Welcome back</h4>
      <input type="text" id="email" required />
      <input type="password" id="password" required />
    </div>
  );

  const footerContent = <div>Footer</div>;
  return (
    <Modal
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Log In"
      onSubmit={onSubmitHandler}
      onClose={loginModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
