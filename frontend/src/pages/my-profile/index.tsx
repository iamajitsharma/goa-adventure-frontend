import { AiOutlineCamera } from "react-icons/ai";

export default function Profile(props: any) {
  return (
    <>
      <div>
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
            <AiOutlineCamera className=" text-white" />
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row mx-2 my-6 justify-center items-center ">
            <div className="mr-2 ml-2 ">
              <input
                type="text"
                className="rounded-lg w-11/12"
                placeholder="Full Name"
              />
            </div>
            <div className="">
              <input
                type="text"
                className="rounded-lg w-11/12"
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <div className="flex flex-row mx-2 my-6 justify-center items-center ">
            <div className="mr-2 ml-2 ">
              <input
                type="text"
                className="rounded-lg w-11/12"
                placeholder="Email Id"
              />
            </div>
            <div className="">
              <input
                type="text"
                className="rounded-lg w-11/12"
                placeholder="City"
              />
            </div>
          </div>
          <div className="flex flex-row mx-2 my-6 justify-center items-center ">
            <div className="mr-2 ml-2 ">
              <input
                type="text"
                className="rounded-lg w-11/12"
                placeholder="State"
              />
            </div>
            <div className="">
              <input
                type="text"
                className="rounded-lg w-11/12"
                placeholder="Country"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
