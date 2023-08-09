import UserContent from "@/components/User/UserContent";
import { Button } from "@/components/common/Button";
import React from "react";
import { RiSave3Fill } from "react-icons/ri";

const Settings = () => {
  return (
    <UserContent>
      <h3 className="text-xl font-poppins py-2 font-semibold tracking-wider uppercase">
        Change Password
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full py-4 font-poppins gap-4">
        <div className="border-2 border-neutral-500 rounded-md">
          <input
            type="text"
            placeholder="New Password"
            className="w-full border-none bg-transparent"
          />
        </div>
        <div className="border-2 border-neutral-500 rounded-md">
          <input
            type="text"
            placeholder="Confirm Password"
            className="w-full border-none bg-transparent"
          />
        </div>
      </div>
      <div className="flex justify-end w-full py-2">
        <Button>Save</Button>
      </div>
    </UserContent>
  );
};

export default Settings;
