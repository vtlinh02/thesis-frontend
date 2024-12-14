"use client";

import { Order } from "@shared/Order";
import Image from "next/image";
import { thumbnailShoe2 } from "@assets/images";
import { useRouter } from "next/navigation";

const OrderItem = ({ order }: { order: Order }) => {
  const router = useRouter();
  return (
    <section className="w-400px h-[150px] flex border-2 border-black gap-2 hover:bg-blue-300">
      <div
        className="flex hover:cursor-pointer"
        onClick={() => {
          router.push(`/product/${order.product.id}`);
        }}
      >
        <div className="w-[50%]">
          <Image
            src={thumbnailShoe2}
            alt="This is a thumbnail shoe"
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="flex flex-col w-[50%] justify-center">
          <p className="text-xl font-palanquin w-[250px]">
            <span>{order.product.name}</span>
          </p>
          <p className="pt-2 font-montserrat">
            Quantity: <span>{order.quantity}</span>
          </p>
        </div>
      </div>
      <div className="w-[100px] flex items-center justify-center border-l-2 border-black font-palanquin text-xl">
        Value:{" "}
        <span className="font-bold text-coral-red px-2">{order.value}</span>
      </div>
    </section>
  );
};

export default OrderItem;
