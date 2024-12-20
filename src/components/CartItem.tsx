"use client";

import { useState } from "react";
import Image from "next/image";
import { thumbnailShoe3 } from "@assets/images";
import { increaseImg, decreaseImg } from "@assets/images";
import { useUser } from "@context/UserContext";
// import "dotenv/config";

const CartItem = ({ cart, setCarts, balance, setBalance }: any) => {
  const [quantity, setQuantity] = useState(1);
  const token = localStorage.getItem("token");
  const { user } = useUser();

  const product = cart.product;

  const handleBuyClick = async () => {
    const buyResponse = await fetch(
      `http://${process.env.NEXT_PUBLIC_BACKEND_URL}/order/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          customerId: user?.id,
          productId: product.id,
          quantity: quantity,
        }),
      }
    );

    const buyResult = await buyResponse.json();

    if (buyResult.message == "Success") {
      const newBalance = balance - product.price * quantity;
      setBalance(newBalance);
      await handleDeleteClick();
    } else if (buyResult.message == "Fail") {
      alert("Failed to buy this product");
    }
  };

  const handleDeleteClick = async () => {
    const deleteResponse = await fetch(
      `http://${process.env.NEXT_PUBLIC_BACKEND_URL}/cart/cancel-cart`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cartId: cart.id }),
      }
    );

    if (deleteResponse.ok) {
      setCarts((prevCarts: any) =>
        prevCarts.filter((c: any) => c.id !== cart.id)
      );
    }
  };

  return (
    <div className="flex h-[150px] w-2/3">
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
        <p className="text-xl font-palanquin">
          Price: <span className="font-bold">{product.price}</span>
        </p>
        <p className="text-xl font-palanquin">
          Total remaining:{" "}
          <span className="font-bold">{product.totalRemaining} </span>
        </p>
      </div>
      <div className="flex flex-col w-[20%] border-y-2 border-r-2 border-black">
        <div className="w-full h-1/2 flex justify-center items-center border-b-2 border-black">
          <Image
            src={decreaseImg}
            alt="Decrease icon"
            className="w-[15%] aspect-[1/1] object-contain hover:cursor-pointer"
            onClick={() => setQuantity(quantity - 1)}
          />
          <span className="w-1/3 text-center text-2xl font-palanquin font-bold">
            {quantity}
          </span>
          <Image
            src={increaseImg}
            alt="Increase icon"
            className="w-[15%] aspect-[1/1] object-contain hover:cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
        <div className="w-full h-1/2 flex font-palanquin text-[18px] font-bold">
          <button
            onClick={handleDeleteClick}
            className="flex justify-center items-center w-1/2 border-r-2 border-black bg-red-500"
          >
            Delete
          </button>
          <button
            onClick={handleBuyClick}
            className="flex justify-center items-center w-1/2 bg-green-500"
          >
            Buy{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
