"use client";
import Box from "components/UI/Box";
import { Button } from "components/UI/Button";
import Input from "components/UI/Input";
import Select from "components/UI/Select";
import TextArea from "components/UI/TextArea";
import { useForm } from "react-hook-form";

const CheckoutForm = () => {
  const { register } = useForm();
  return (
    <Box>
      <form>
        <div className="grid grid-cols-2 gap-2 w-full">
          <Input type="text" id="fullname" register={register} required />
          <Input type="text" id="mobile_number" register={register} required />
          <Input type="text" id="email" register={register} required />
          <Select id="meeting_point" register={register} items={[]} />
          <TextArea id="note" register={register} className="col-span-full" />
        </div>
        <Button>Proceed to pay</Button>
      </form>
    </Box>
  );
};

export default CheckoutForm;
