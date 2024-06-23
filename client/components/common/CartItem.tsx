import { useEffect } from "react";
import { IndianRupee, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { updateCartItem } from "store/features/productSlice";
import { useDispatch } from "react-redux";
import { useProduct } from "hooks/useProduct";

interface CartItemProps {
  id: string;
  product_title: string;
  price: number;
  salePrice: number;
  quantity: number;
  activityDate: string;
  deposit: number;
  image: any;
  meeting_point: string[];
  location: string;
  discount: number;
  totalPrice: number;
}

const CartItem = ({ product }: { product: CartItemProps }) => {
  const dispatch = useDispatch();
  const { discardProduct } = useProduct();

  useEffect(() => {
    if (product.quantity < 1) {
      discardProduct(product.id);
    }
  }, [product.quantity, discardProduct, product.id]);

  const handleIncrease = () => {
    dispatch(
      updateCartItem({ id: product.id, quantity: product.quantity + 1 })
    );
  };

  const handleDecrease = () => {
    dispatch(
      updateCartItem({ id: product.id, quantity: product.quantity - 1 })
    );
  };

  return (
    <li className="flex items-center w-full h-24 p-2 border-b overflow-hidden">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={product.image}
          alt=""
          className="h-full w-full object-cover object-center"
          width={100}
          height={100}
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between items-start w-full h-full gap-2">
          <div className="line-clamp-2">
            <h4 className="text-sm font-semibold text-black pb-2">
              {product.product_title}
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4 md:gap-12">
            <span className="flex items-center text-sm font-semibold">
              <IndianRupee size={14} />
              {`${product.salePrice} x ${product.quantity}`}
            </span>
          </div>
          <div className="flex items-center gap-2 md:pr-4">
            <button
              onClick={handleDecrease}
              className="bg-white w-7 h-7 flex items-center justify-center shadow rounded cursor-pointer"
            >
              <Minus size={16} />
            </button>

            <input
              type="text"
              min={1}
              className="text-center text-base bg-gray-100 rounded font-medium py-1 max-w-10"
              value={product.quantity}
              readOnly
            />

            <button
              onClick={handleIncrease}
              className="bg-white w-7 h-7 flex items-center justify-center shadow rounded cursor-pointer"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
