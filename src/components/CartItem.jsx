import Image from "next/image";
import { thumbnailShoe3 } from "@public/assets/images";

const CartItem = ({ cart }) => {
  const product = cart.product;
  return (
    <div className="flex h-[100px] w-2/3">
      <Image
        src={thumbnailShoe3}
        alt="This is a thumbnail"
        className="w-1/3 object-contain border-y-2 border-l-2 border-black"
      />
      <div className="flex flex-1 flex-col gap-2 border-2 border-black px-2">
        <h1 className="text-2xl font-palanquin text-coral-red">
          {product.name}
        </h1>
        <p className="text font-montserrat text-slate-gray">
          {product.description}
        </p>
        <p className="text-xl font-palanquin font-bold">
          {product.totalRemaining}
        </p>
      </div>
      <div className="w-[10%] border-y-2 border-r-2 border-black">Button</div>
    </div>
  );
};

export default CartItem;
