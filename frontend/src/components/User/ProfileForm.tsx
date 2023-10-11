import Image from "next/image";
import placeholderImage from "../../../public/assets/placeholder.jpg";
import { Button } from "../common/Button";
import { RiSave3Fill } from "react-icons/ri";

import { useState, useContext, useEffect } from "react";

import axios, * as others from "axios";
import { useForm, Controller } from "react-hook-form";
import { AiOutlineCamera } from "react-icons/ai";
import useCustomer from "@/hook/useCustomer";
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
      url: `http://localhost:4000/v1/customer/${customer?.user?.id}`,
      headers: {
        headers: { "content-type": "multipart/form-data" },
      },
      data: formData,
    };

    axios(requestOptions)
      .then(async (response) => {
        console.log("Response after uploading image", response);
        const fetchUser = await fetchUserInfo(id);
        let custInfo = customer;
        custInfo.user = fetchUser;
        setCustomer(custInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="p-8 lg:col-span-5">
        <div className="col-md-12">
          <div className="table-responsive">
            <div className="p-4 grid grid-cols-2 pb-8 mb-3"></div>

            {/* <div className="flex flex-col justify-center items-center"> */}
            <form onSubmit={handleSubmit(onSubmit, onError)} className="">
              <div className="ml-4 mt-4 mb-8">
                <img
                  className="rounded-full h-32 w-32"
                  src={
                    profileImage
                      ? profileImage
                      : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                  }
                />

                <span className=" rounded-full h-10 w-10 absolute flex justify-center items-center translate-x-24 -translate-y-10">
                  <label
                    htmlFor="fileInput"
                    className="rounded-full h-10 w-10  bg-[#404298]  pb-0.5 flex justify-center items-center cursor-pointer"
                  >
                    <input
                      type="file"
                      id="fileInput"
                      placeholder=""
                      className="hidden"
                      {...register("profile_image", {
                        onChange: (e) => {
                          setProfileImage(
                            URL.createObjectURL(e.target.files[0])
                          );
                          console.log("Ankit");
                        },
                      })}
                      // onChange={handleFileChange}
                    />
                    <AiOutlineCamera className="text-white  scale-110" />
                  </label>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-8 gap-y-4 mb-8">
                <div className="mr-2 ml-2 ">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <input
                        type="text"
                        className="rounded-lg w-11/12"
                        placeholder="Full Name"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </div>
                <div className="">
                  <Controller
                    name="email"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <input
                        type="email"
                        className="rounded-lg w-11/12"
                        placeholder="Email"
                        value={value}
                        onChange={onChange}
                        disabled={true}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 gap-y-4 mb-8">
                <div className="mr-2 ml-2 ">
                  <Controller
                    name="mobile_number"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <input
                        type="number"
                        className="rounded-lg w-11/12"
                        placeholder="Mobile Number"
                        value={value}
                        onChange={onChange}
                        disabled={true}
                      />
                    )}
                  />
                </div>
                <div className="">
                  <Controller
                    name="state"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <input
                        type="text"
                        className="rounded-lg w-11/12"
                        placeholder="State"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 gap-y-4 mb-8">
                <div className="mr-2 ml-2 ">
                  <Controller
                    name="city"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <input
                        type="text"
                        className="rounded-lg w-11/12"
                        placeholder="City"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </div>
                <div className="mr-2 ml-2 ">
                  <Controller
                    name="country"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <input
                        type="text"
                        className="rounded-lg w-11/12"
                        placeholder="Country"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </div>
              </div>
              {/* <div className="flex justify-center">
              <button
                onClick={() => console.log("Handle submit")}
                type="submit"
              >
                Edit
              </button>
            </div> */}

              <div className="pb-4 text-center mt-2">
                {/* <button data-dismiss="modal" type="submit" /> */}
                <button
                  type="submit"
                  className="w-auto m-auto bg-red-400 text-white rounded px-4 py-2"
                  data-bs-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
