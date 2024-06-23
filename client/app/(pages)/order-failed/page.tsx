import { Button } from "components/UI/Button";
import Container from "components/UI/Container";
import { BadgeX } from "lucide-react";
import { redirect } from "next/navigation";

const OrderFailed = ({ searchParams }: any) => {
  const { order_id } = searchParams;

  if (!order_id) {
    redirect("/");
  }
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-4 items-center justify-center w-full h-96">
          <BadgeX size={64} className="text-rose-500 animate-bounce" />
          <h3 className="animate-pulse text-3xl font-semibold text-rose-500">
            Order Failed
          </h3>
          <p className="text-xl font-medium text-black">Your order is failed</p>
          <Button href="/cart">Back To Cart</Button>
        </div>
      </Container>
    </section>
  );
};

export default OrderFailed;
