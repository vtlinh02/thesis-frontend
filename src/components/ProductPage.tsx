"use client";

import Image from "next/image";
import { shoe4 } from "@assets/images";
import { Button } from "@components";
import { useState, useEffect } from "react";
import { useUser } from "@context/UserContext";
import { Product } from "@shared/Product";
// import "dotenv/config";

const ProductPage = ({ product }: { product: any }) => {
  const { user: customer } = useUser();

  let token = null;
  if (typeof window !== "undefined") token = localStorage.getItem("token");

  const [isCartExisted, setIsCartExisted] = useState(false);
  useEffect(() => {
    const fetchIsCartExisted = async () => {
      const isCartExistedResponse = await fetch(
        `http://${process.env.NEXT_PUBLIC_BACKEND_URL}/cart/check-cart-exist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            customerId: customer?.id,
            productId: product.id,
          }),
        }
      );

      const isCartExistedResult = await isCartExistedResponse.json();
      const isCartExisted = isCartExistedResult.data;

      setIsCartExisted(isCartExisted);
    };

    if (customer && Object.keys(product).length !== 0) {
      fetchIsCartExisted();
    }
  }, [customer, product]);

  const handleOnClick = async () => {
    await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        customerId: customer?.id,
        productId: product.id,
      }),
    });

    setIsCartExisted(true);
  };

  return (
    <section className="pt-[2rem]">
      <div className="flex flex-col items-center">
        <h1 className="text-[3rem] font-palanquin font-bold text-coral-red pb-[3rem]">
          {product.name}
        </h1>
        <Image
          src={shoe4}
          alt={"This is a shoe thumbnail"}
          className="w-1/4 h-1/4 object-contain"
        />
        <h3 className="pt-4 text-xl font-montserrat">
          Total remaining:{" "}
          <span className="text-coral-red">{product.totalRemaining} </span>
        </h3>
        <p className="pt-2 pb-4 font-montserrat text-slate-gray">
          {product.description}
        </p>
        <p className="text-2xl py-2 font-palanquin text-slate-gray">
          Price: <span className="font-bold">{product.price}</span>
        </p>
        {isCartExisted ? (
          <Button content="Cart already existed" />
        ) : (
          <Button
            content="Add to cart"
            handleOnClick={handleOnClick}
            contentAfterClick="Cart already existed"
          />
        )}
      </div>
      {/* <div>for further features, like comments, ...</div> */}
    </section>
  );
};

export default ProductPage;
