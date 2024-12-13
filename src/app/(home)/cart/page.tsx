"use client";

import { useState, useEffect, use } from "react";
import { CartItem } from "@components";
import { useUser } from "@context/UserContext";
import { withAuth } from "@utils/withAuth";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [balance, setBalance] = useState(null);

  let token = null;
  if (typeof window !== "undefined") token = localStorage.getItem("token");

  // further more, these variable will be replaced by session's data => 11/12/2024: this is that moment!
  const { user } = useUser();

  useEffect(() => {
    const fetchCartsData = async () => {
      const cartsResponse = await fetch(
        `http://localhost:8000/cart/list-carts/${user?.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const cartsResult = await cartsResponse.json();

      setCarts(cartsResult.data);
    };

    const fetchBalance = async () => {
      const balanceResponse = await fetch(
        `http://localhost:8000/wallet/${user?.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const balanceResult = await balanceResponse.json();
      setBalance(balanceResult.data);
    };
    if (user) {
      fetchCartsData();
      fetchBalance();
    }
  }, [user]);

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="text-4xl font-palanquin font-bold flex ">
        Welcome to <span className="text-coral-red px-2">{user?.username}</span>
        's cart
      </div>
      <div className="font-montserrat text-xl pt-8">
        {" "}
        Your available balance:{" "}
        <span className="text-coral-red font-bold px-2">{balance}</span>
      </div>
      <ul className="flex flex-col gap-2 pt-[3rem]">
        {carts.length != 0
          ? carts.map((cart: any) => (
              <li key={cart.id} className="flex justify-center">
                <CartItem
                  cart={cart}
                  setCarts={setCarts}
                  balance={balance}
                  setBalance={setBalance}
                />
              </li>
            ))
          : undefined}
      </ul>
    </section>
  );
};

export default withAuth(Cart);
