import React from "react";
import Image from "next/image";
import placeholderImage from "../../../public/assets/placeholder.jpg";
import { Button } from "../common/Button";
import { RiSave3Fill } from "react-icons/ri";

const ProfileForm = () => {
  return (
    <>
      <div className="flex items-center gap-2 my-6">
        <Image
          src={placeholderImage}
          alt=""
          className="rounded-full w-28 h-28"
        />
        <input
          type="file"
          className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-orange-200/40 file:text-primary
      hover:file:bg-violet-100"
        />
      </div>
      <div className="grid grid-cols-2 w-full py-4 font-poppins gap-4">
        <div className="border-2 border-neutral-500 rounded-md">
          <input
            type="text"
            placeholder="FullName"
            className="w-full border-none bg-transparent"
          />
        </div>
        <div className="border-2 border-neutral-500 rounded-md">
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full border-none bg-transparent"
          />
        </div>
        <div className="border-2 border-neutral-500 rounded-md">
          <input
            type="text"
            placeholder="Email Address"
            className="w-full border-none bg-transparent"
          />
        </div>
        <div className="border-2 border-neutral-500 rounded-md">
          <input
            type="text"
            placeholder="City"
            className="w-full border-none bg-transparent"
          />
        </div>
        <div className="border-2 border-neutral-500 rounded-md">
          <input
            type="text"
            placeholder="State"
            className="w-full border-none bg-transparent"
          />
        </div>
        <div className="border-2 border-neutral-500 rounded-md">
          <input
            type="text"
            placeholder="Country"
            className="w-full border-none bg-transparent"
          />
        </div>
      </div>
      <div className="flex justify-end w-full py-2">
        <Button>Save</Button>
      </div>
    </>
  );
};

export default ProfileForm;
