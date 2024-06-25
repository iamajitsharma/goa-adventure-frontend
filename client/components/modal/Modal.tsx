import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { RxCrossCircled } from "react-icons/rx";

import { truncateString } from "sanity";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isModalOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  isModalOpen,
  closeModal,
}) => {
  return (
    <>
      <Transition appear show={isModalOpen}>
        <Dialog
          as="div"
          className="relative w-full h-auto overflow-y-auto z-[100] focus:outline-none"
          onClose={closeModal}
        >
          <div className="fixed inset-0 z-10 overflow-y-auto w-screen h-screen">
            <div className="flex min-h-full items-center w-full justify-center p-5">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-gray-100/50 backdrop-blur-md relative shadow-xl">
                  <DialogTitle
                    as="h3"
                    className="py-2 text-base/7 font-medium text-black text-center"
                  >
                    {title}
                  </DialogTitle>
                  <div
                    onClick={closeModal}
                    className="cursor-pointer absolute top-0 right-0 bg-white p-1 rounded-full flex items-center justify-center hover:rotate-90 hover:ease-in-out hover:duration-150"
                  >
                    <RxCrossCircled className="text-orange-500" size={28} />
                  </div>
                  <div>{children}</div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
