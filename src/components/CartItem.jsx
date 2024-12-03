"use client";

import { useState } from "react";
import Image from "next/image";
import { thumbnailShoe3 } from "@public/assets/images";
import { increaseImg, decreaseImg } from "@public/assets/images";

const CartItem = ({ cart, setCarts, balance, setBalance }) => {
  const userId = 1;
  const [quantity, setQuantity] = useState(1);

  const product = cart.product;

  const handleBuyClick = async () => {
    const buyResponse = await fetch("http://localhost:8000/order/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerId: userId,
        productId: product.id,
        quantity: quantity,
      }),
    });

    if (buyResponse.ok) {
      const newBalance = balance - product.price * quantity;
      setBalance(newBalance);
      await handleDeleteClick();
    } else {
      alert("Failed to buy this product");
    }
  };

  const handleDeleteClick = async () => {
    const deleteResponse = await fetch(
      `http://localhost:8000/cart/cancel-cart`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartId: cart.id }),
      }
    );

    if (deleteResponse.ok) {
      setCarts((prevCarts) => prevCarts.filter((c) => c.id !== cart.id));
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
