"use client";
import OrderSummary from "components/common/OrderSummary";
import CheckoutForm from "components/form/CheckoutForm";
import Box from "components/UI/Box";
import { Button } from "components/UI/Button";
import Container from "components/UI/Container";
import Input from "components/UI/Input";
import TextArea from "components/UI/TextArea";
import { useProduct } from "hooks/useProduct";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const { product } = useProduct();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <Container>
      <div className="flex justify-between w-full gap-10 mt-14">
        <Box className="w-1/2">
          <form>
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Enter your fullname"
                id="fullname"
                register={register}
                required="Please enter your fullname"
              />
              <Input
                type="text"
                placeholder="Enter your mobile no"
                id="mobilenumber"
                register={register}
                required="Please enter your mobile number"
              />
              <Input
                type="email"
                placeholder="Enter your email address"
                id="email"
                register={register}
                rules={{
                  required: "Please enter your email",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                }}
              />
              <Input placeholder="FullName" id="fullname" register={register} />
              <TextArea
                id="message"
                register={register}
                placeholder="Special Request"
                className="col-span-full"
              />
            </div>
            <div className="flex justify-end">
              <Button className="">Proceed To Pay</Button>
            </div>
          </form>
        </Box>
        <Box className="w-1/2">
          <div>
            {product.map((item: any) => (
              <div key={item.id} className={"p-0 shadow w-full px-2 py-1 my-2"}>
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center gap-4">
                    <div className="aspect-square w-16 h-16 overflow-hidden rounded">
                      <Image
                        src={item.image}
                        alt=""
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-full leading-loose">
                      <h4 className="text-base font-semibold text-black pb-2">
                        {item.product_title}
                      </h4>
                      <div className="flex gap-3 text-xs font-medium">
                        <span>Travel Date:{item.activityDate}</span>
                        <span>
                          Adult: {item.quantity} x {item.salePrice}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Trash size={20} />
                </div>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </Container>
  );
};

export default Checkout;
