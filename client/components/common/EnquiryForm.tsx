"use client";
import { Button } from "components/UI/Button";
import Input from "components/UI/Input";
import TextArea from "components/UI/TextArea";
import Flatpickr from "react-flatpickr";
import { usePathname } from "next/navigation";
import { useForm, FieldValues, Controller } from "react-hook-form";
import { createEnquiry, sendContactForm } from "helper/utils";
import useEnquiryModal from "hooks/useEnquiryModal";

const EnquiryForm = () => {
  const pathname = usePathname();
  const { handleCloseEnquiry } = useEnquiryModal();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm<FieldValues>({});

  const submitHandler = async (data: any) => {
    const enquiryData = {
      fullname: data.fullname,
      mobile_number: Number(data.mobilenumber),
      email: data.email,
      travel_date: new Date(data.traveldate[0]).toISOString().slice(0, 10),
      traveller_count: Number(data.travellers),
      message: data.message,
      url: pathname,
    };

    const response = await createEnquiry(enquiryData);

    setValue("fullname", "");
    setValue("mobilenumber", "");
    setValue("email", "");
    setValue("traveldate", "");
    setValue("travellers", "");
    setValue("message", "");

    handleCloseEnquiry();

    return response;
  };

  return (
    <form className="p-4" onSubmit={handleSubmit(submitHandler)}>
      <Input
        type="text"
        placeholder="Full Name"
        id="fullname"
        register={register}
        errors={errors}
        required={"Please enter your fullname"}
      />
      <Input
        type="tel"
        placeholder="Your Phone"
        id="mobilenumber"
        register={register}
        errors={errors}
        required={"Please enter your mobile number"}
      />
      <Input
        type="email"
        placeholder="Email"
        id="email"
        register={register}
        errors={errors}
        rules={{
          required: "Please enter your email",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Invalid email address",
          },
        }}
      />
      <div className="flex items-center gap-2">
        <Controller
          render={({ field }) => (
            <Flatpickr
              placeholder="Choose Date"
              {...field}
              className="border py-2.5 px-2 outline-none border-gray-300 rounded w-1/2"
            />
          )}
          control={control}
          name="traveldate"
          rules={{
            required: "Please select your travel date",
            validate: (value) => {
              // Custom validation logic for date format or other requirements
              // Example: Check if the date is in the future
              return value && new Date(value) > new Date()
                ? undefined // Return undefined if validation succeeds
                : "Please select a future date";
            },
          }}
        />

        <Input
          type="number"
          placeholder="Traveller Count"
          id="travellers"
          register={register}
          errors={errors}
        />
      </div>
      <TextArea
        placeholder="Message"
        register={register}
        id="message"
        rows={4}
        errors={errors}
        required
      />
      <Button size={"xl"} variant={"primary"} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default EnquiryForm;
