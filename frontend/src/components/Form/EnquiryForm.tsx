//import node module libraries
import { useState } from "react";

//import custom components
import Box from "../common/Box";
import { Button } from "../common/Button";
import Input from "../common/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { sendContactForm } from "@/lib/api";
import toast from "react-hot-toast";

const EnquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,

    formState: { errors },
  } = useForm<FieldValues>({});

  const currentDate = new Date().toLocaleDateString("en-GB");

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      await sendContactForm(data);
      setValue("fullName", "");
      setValue("email", "");
      setValue("mobile", "");
      setValue("date", "");
      setValue("person", "");
      setValue("message", "");
      toast.success("Form submitted successfully", {
        position: "bottom-right",
      });
    } catch (error) {
      setIsSubmitting(false);
      console.error(error);
      toast.error("Form submission failed", {
        position: "bottom-right",
      });
    }
  };

  return (
    <Box className="bg-white my-6 sm:py-2">
      <div>
        <div>
          <h4 className="text-xl font-semibold text-red-500 font-poppins">
            Looking for a best price?
          </h4>
          <p className="text-slate-700 font-medium font-poppins text-base">
            Fill out our enquiry form
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-sm font-poppins text-black py-4">
            <div className="py-2">
              <input
                type="text"
                placeholder="Your Name"
                className="
              p-2
              w-full 
              rounded-md 
              border-slate-300 
              border-2
              outline-none 
              focus:ring-0
             
              
              "
                {...register("fullName", { required: true })}
              />
            </div>

            <div className="flex  flex-col sm:flex-row gap-1 w-full">
              <div className="py-2 w-full sm:w-1/2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="
              p-2  
              w-full 
              rounded-md 
              border-slate-300 
              border-2
              outline-none 
              focus:ring-0
                    
              "
                  {...register("email", { required: true })}
                />
              </div>

              <div className="py-2 w-full sm:w-1/2">
                <input
                  type="text"
                  placeholder="Your Mobile No"
                  className="
                p-2
              w-full 
              rounded-md 
              border-slate-300 
              border-2
              outline-none 
              focus:ring-0
              font-poppins
            
              "
                  {...register("mobile", { required: true })}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full items-center gap-1 py-5 relative">
              <div className="py-2 w-full sm:w-1/2">
                <label className="absolute top-1 text-sm font-medium">
                  Choose Date
                </label>
                <input
                  type="date"
                  defaultValue={currentDate}
                  className="
              w-full 
              rounded-md 
              border-slate-300 
              border-2
              outline-none 
              focus:ring-0
              font-poppins
              "
                  {...register("date", { required: true })}
                />
              </div>

              <div className="py-2 w-full sm:w-1/2">
                <input
                  type="number"
                  placeholder="Total Traveller"
                  className="
              w-full 
              rounded-md 
              border-slate-300 
              border-2
              outline-none 
              focus:ring-0
              font-poppins
              
              "
                  {...register("person", { required: true })}
                />
              </div>
            </div>
            <textarea
              rows={4}
              placeholder="Message"
              className=" w-full 
              rounded-md 
              border-slate-300 
              border-2
              outline-none 
              focus:ring-0
              font-poppins"
              {...register("message", { required: true })}
            ></textarea>
          </div>

          <Button
            size={"lg"}
            variant={"dark"}
            className="w-full bg-blue-600 text-lg"
            type="submit"
          >
            {isSubmitting ? "Submitting" : "Enquiry Now"}
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default EnquiryForm;
