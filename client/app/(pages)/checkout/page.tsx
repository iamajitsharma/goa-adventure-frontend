"use client";
import axios from "axios";
import CartItem from "components/common/CartItem";
import OrderSummary from "components/common/OrderSummary";
import PageTitle from "components/common/PageTitle";
import CheckoutForm from "components/form/CheckoutForm";
import Box from "components/UI/Box";
import { Button } from "components/UI/Button";
import Container from "components/UI/Container";
import Input from "components/UI/Input";
import Select from "components/UI/Select";
import TextArea from "components/UI/TextArea";
import { initializeRazorpay } from "helper/utils";
import { useProduct } from "hooks/useProduct";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Checkout = () => {
  return (
    <Container>
      <PageTitle title="Checkout" />
      <div className="flex flex-col-reverse md:flex-row justify-between w-full gap-10 mt-4">
        <Box className="w-full md:w-8/12">
          <CheckoutForm />
        </Box>
        <Box className="w-full md:w-4/12">
          <OrderSummary hideBtn />
        </Box>
      </div>
    </Container>
  );
};

export default Checkout;
