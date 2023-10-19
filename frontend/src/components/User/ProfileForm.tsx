import Image from "next/image";
import placeholderImage from "../../../public/assets/placeholder.jpg";
import { Button } from "../common/Button";
import { RiSave3Fill } from "react-icons/ri";

import { useState, useContext, useEffect } from "react";

import axios, * as others from "axios";
import { useForm, Controller } from "react-hook-form";
import { AiOutlineCamera } from "react-icons/ai";
import useCustomer from "@/hook/useCustomer";
import { fetchUserInfo } from "@/lib/api";
const FormData = require("form-data");

const ProfileForm = () => {
  const { customer, setCustomer }: any = useCustomer();
  // return (
  //   <>
  //     <div className="flex items-center gap-2 my-6">
  //       <Image
  //         src={placeholderImage}
  //         alt=""
  //         className="rounded-full w-28 h-28"
  //       />
  //       <input
  //         type="file"
  //         className="block w-full text-sm text-slate-500
  //     file:mr-4 file:py-2 file:px-4
  //     file:rounded-full file:border-0
  //     file:text-sm file:font-semibold
  //     file:bg-orange-200/40 file:text-primary
  //     hover:file:bg-violet-100"
  //       />
  //     </div>
  //     <div className="grid grid-cols-2 w-full py-4 font-poppins gap-4">
  //       <div className="border-2 border-neutral-500 rounded-md">
  //         <input
  //           type="text"
  //           placeholder="FullName"
  //           className="w-full border-none bg-transparent"
  //         />
  //       </div>
  //       <div className="border-2 border-neutral-500 rounded-md">
  //         <input
  //           type="text"
  //           placeholder="Mobile Number"
  //           className="w-full border-none bg-transparent"
  //         />
  //       </div>
  //       <div className="border-2 border-neutral-500 rounded-md">
  //         <input
  //           type="text"
  //           placeholder="Email Address"
  //           className="w-full border-none bg-transparent"
  //         />
  //       </div>
  //       <div className="border-2 border-neutral-500 rounded-md">
  //         <input
  //           type="text"
  //           placeholder="City"
  //           className="w-full border-none bg-transparent"
  //         />
  //       </div>
  //       <div className="border-2 border-neutral-500 rounded-md">
  //         <input
  //           type="text"
  //           placeholder="State"
  //           className="w-full border-none bg-transparent"
  //         />
  //       </div>
  //       <div className="border-2 border-neutral-500 rounded-md">
  //         <input
  //           type="text"
  //           placeholder="Country"
  //           className="w-full border-none bg-transparent"
  //         />
  //       </div>
  //     </div>
  //     <div className="flex justify-end w-full py-2">
  //       <Button>Save</Button>
  //     </div>
  //   </>
  // );

  const [profileImage, setProfileImage] = useState<any>(undefined);
  const [passengerInfo, setPassengerInfo] = useState({});

  let valueAssignment;
  if (customer?.user?.id) {
    valueAssignment = customer.user;
  }
  console.log("VALUE ASSIGNMENT", valueAssignment);
  const {
    handleSubmit,
    register,
    control,
    setError,
    clearErrors,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: valueAssignment,
  });

  const onError = (errors: any) => console.log(errors);
  console.log("FEtch user", customer);

  // async function updateClient() {
  //   let passInfo = await PassengerInfo(customer?.loginData?.id);
  //   if (passInfo) {
  //     setPassengerInfo(passInfo);
  //     let newClient = customer;
  //     newClient.loginData.customer = passInfo;
  //     setClient(newClient);
  //   } else {
  //     console.log("eErr", passInfo);
  //     toast.error("Could not fetch Passenger Login info");
  //   }
  // }

  useEffect(() => {
    if (customer?.user?.profile_image) {
      setProfileImage(customer?.user?.profile_image);
    }
  }, []);
  console.log("Client", customer);

  const onSubmit = async (data: any) => {
    console.log("Data 123", data);
    var formData = new FormData();
    data.status = true;
    if (data.profile_image[0]?.size) {
      console.log("Update profile pic", data.profile_image[0]);
      // formData.append("profilePic", data.profile_image[0]);
      formData.append("profile_image", data.profile_image[0]);
    }
    formData.append("name", data.name.trim());
    formData.append("mobile_number", data.mobile_number.trim());
    formData.append("email", data.email.trim());
    formData.append("state", data.state.trim());
    formData.append("city", data.city.trim());
    formData.append("country", data.country.trim());
    formData.append("status", data.status);

    let headers = { "content-type": "multipart/form-data" };
    console.log("Form data", formData);
    var requestOptions: any = {
      method: "PUT",
      url: `https://backend.goaadventure.in/v1/customer/${customer?.user?.id}`,
      headers: {
        headers: { "content-type": "multipart/form-data" },
      },
      data: formData,
    };

    axios(requestOptions)
      .then(async (response) => {
        console.log("Response after uploading image", response);
        const fetchUser = await fetchUserInfo(customer?.user.id);
        console.log("USer fetched ", fetchUser);
        let custInfo = customer;
        custInfo.user = fetchUser;
        setCustomer(custInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="max-w-3xl w-full h-full shadow-3xl relative p-2">
        {/* Profile Image */}
        <div className="w-32 h-32 absolute -top-16 left-1/2 -translate-x-1/2">
          <img
            className="rounded-full h-32 w-32 object-fill shadow-3xl relative"
            src={
              profileImage
                ? profileImage
                : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
            }
          />
          <div className="absolute top-0  rounded-full h-10 w-10 flex justify-center items-center bg-cyan-400">
            <label
              htmlFor="fileInput"
              className="rounded-full h-10 w-10  bg-primary  pb-0.5 flex justify-center items-center cursor-pointer"
            >
              <input
                type="file"
                id="fileInput"
                placeholder=""
                className="hidden"
                {...register("profile_image", {
                  onChange: (e) => {
                    setProfileImage(URL.createObjectURL(e.target.files[0]));
                    console.log("Ankit");
                  },
                })}
                // onChange={handleFileChange}
              />

              <AiOutlineCamera className="text-white  scale-110" />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 relative h-full pt-20">
          <div className="border-2 border-neutral-500 rounded-md">
            <Controller
              name="name"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  type="text"
                  className="w-full border-none bg-transparent"
                  placeholder="Full Name"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
          <div className="border-2 border-neutral-500 rounded-md">
            <Controller
              name="email"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  type="email"
                  className="w-full border-none bg-transparent"
                  placeholder="Email"
                  value={value}
                  onChange={onChange}
                  disabled={true}
                />
              )}
            />
          </div>
          <div className="border-2 border-neutral-500 rounded-md">
            <Controller
              name="mobile_number"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  type="number"
                  className="w-full border-none bg-transparent"
                  placeholder="Mobile Number"
                  value={value}
                  onChange={onChange}
                  disabled={true}
                />
              )}
            />
          </div>
          <div className="border-2 border-neutral-500 rounded-md">
            <Controller
              name="state"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  type="text"
                  className="w-full border-none bg-transparent"
                  placeholder="State"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
          <div className="border-2 border-neutral-500 rounded-md">
            <Controller
              name="city"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  type="text"
                  className="w-full border-none bg-transparent"
                  placeholder="City"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
          <div className="border-2 border-neutral-500 rounded-md">
            <Controller
              name="country"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  type="text"
                  className="w-full border-none bg-transparent"
                  placeholder="Country"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
        </div>
        <div className="text-right py-4">
          <button
            type="submit"
            className="w-auto m-auto bg-red-400 text-white rounded px-4 py-2"
            data-bs-dismiss="modal"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
