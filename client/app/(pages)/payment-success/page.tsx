import { Button } from "components/UI/Button";
import Container from "components/UI/Container";
import { BadgeCheck } from "lucide-react";
import React from "react";
import { redirect } from "next/navigation";

const page = ({ searchParams }: any) => {
  const { order_id } = searchParams;

  if (!order_id) {
    redirect("/");
  }

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-4 items-center justify-center w-full h-96">
          <BadgeCheck size={64} className="text-green-500 animate-bounce" />
          <h3 className="animate-pulse text-3xl font-semibold text-green-500">
            Congratulation
          </h3>
          <p className="text-xl font-medium text-black">
            Your order has been successfully placed
          </p>
          {/* <Button>Download Invoice</Button> */}
        </div>
      </Container>
    </section>
  );
};

export default page;
