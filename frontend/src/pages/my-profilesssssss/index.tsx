import { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import Button from "../../components/common/Button";
import { useForm, Controller } from "react-hook-form";
import Loader from "react-loader";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
var FormData = require("form-data");
export default function Profile(props: any) {
  const [loaded, setLoaded] = useState(true);
  const {
    handleSubmit,
    register,
    control,
    setError,
    clearErrors,
    setValue,
    reset,
    formState: { errors },
  } = useForm({});

  const onError = (errors: any) => console.log(errors);

  const onSubmit = async (data: any) => {
    setLoaded(false);
    console.log("Data", data);
    var formData = new FormData();
    data.status = true;
    data.activation_status = true;
    if (data.profile_image[0]?.size) {
      formData.append("profile_image", data.profile_image[0]);
    }
    formData.append("name", data.name.trim());
    formData.append("email", data.email.trim());
    formData.append("country", data.country.trim());
    formData.append("mobile_number", data.mobile_number.trim());
    formData.append("city", data.city.trim());
    formData.append("state", data.state.trim());
    var config: AxiosRequestConfig = {
      method: "POST",
      url: "http://localhost:4000/v1/customer/",
      headers: {
        "content-type": "multipart/form-data",
      },
      data: formData,
    };

    axios(config)
      .then((response) => {
        setLoaded(true);
        console.log("Response after submitting form", response);
      })
      .catch((err) => {
        setLoaded(true);
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="ml-4 mt-4 mb-2">
            <img
              className="rounded-full h-20 w-20"
              src={
                props.image
                  ? props.image
                  : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
              }
            />

            <span className=" rounded-full h-8 w-8 absolute bg-orange-500 flex justify-center items-center left-16 top-40">
              {/* <input
                type="file"
                placeholder=""
                className="-z-20"
                {...register("profile_image")}
              />
              <AiOutlineCamera className="z-50 text-white" /> */}
              <label
                htmlFor="fileInput"
                className="rounded-full h-8 w-8  bg-orange-500 flex justify-center items-center cursor-pointer"
              >
                <input
                  type="file"
                  id="fileInput"
                  placeholder=""
                  className="hidden"
                  {...register("profile_image")}
                  // onChange={handleFileChange}
                />
                <AiOutlineCamera className="text-white" />
              </label>
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row mx-2 my-6 justify-center items-center ">
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
                  defaultValue=""
                />
              </div>
              <div className="">
                <Controller
                  name="mobile_number"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <input
                      type="text"
                      className="rounded-lg w-11/12"
                      placeholder="Mobile Number"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                  defaultValue=""
                />
              </div>
            </div>
            <div className="flex flex-row mx-2 my-6 justify-center items-center ">
              <div className="mr-2 ml-2 ">
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <input
                      type="text"
                      className="rounded-lg w-11/12"
                      placeholder="Email"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                  defaultValue=""
                />
              </div>
              <div className="">
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
                  defaultValue=""
                />
              </div>
            </div>
            <div className="flex flex-row mx-2 my-6 justify-center items-center ">
              <div className="mr-2 ml-2 ">
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
                  defaultValue=""
                />
              </div>
              <div className="">
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
                  defaultValue=""
                />
              </div>
            </div>
            <div className="flex justify-center mb-6">
              <Button
                label="Submit"
                onClick={() => console.log("Handle submit")}
                type="submit"
              />
            </div>
          </div>
        </form>
        <div className="spinner">
          <Loader
            loaded={loaded}
            lines={13}
            length={20}
            width={10}
            radius={30}
            corners={1}
            rotate={0}
            direction={1}
            color="#000"
            speed={1}
            trail={60}
            shadow={false}
            hwaccel={false}
            className="spinner"
            zIndex={2e9}
            top="50%"
            left="50%"
            scale={1.0}
            loadedClassName="loadedContent"
          />
        </div>
      </div>
    </>
  );
}
