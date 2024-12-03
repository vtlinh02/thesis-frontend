"use client";

import { useState, useEffect } from "react";
import { CartItem } from "@src/components";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  // further more, these variable will be replaced by session's data
  const userId = 1;
  const username = "Tony Vu";

  useEffect(() => {
    const fetchData = async () => {
      const cartsResponse = await fetch(
        `http://localhost:8000/cart/list-carts/${userId}`
      );

      const cartsResult = await cartsResponse.json();

      setCarts(cartsResult.data);
    };
    fetchData();
  }, []);

  return (
    <section className="flex flex-col">
      <div className="text-4xl font-palanquin font-bold flex items-center justify-center">
        Welcome to <span className="text-coral-red px-2">{username}</span>'s
        cart
      </div>
      <ul className="flex flex-col gap-2 pt-[3rem]">
        {carts.map((cart) => (
          <li key={cart.id} className="flex justify-center">
            <CartItem cart={cart} setCarts={setCarts} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cart;
