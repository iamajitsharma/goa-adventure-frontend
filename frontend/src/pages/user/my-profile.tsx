import ProfileForm from "@/components/User/ProfileForm";
import UserContent from "@/components/User/UserContent";
import React from "react";

const ProfileSetting = () => {
  return (
    <UserContent>
      <h3 className="text-xl font-poppins py-2 font-semibold tracking-wider uppercase">
        Profile
      </h3>
      <ProfileForm />
    </UserContent>
  );
};

export default ProfileSetting;
