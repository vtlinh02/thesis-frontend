"use client";

import { withAuth } from "@utils/withAuth";
import { useUser } from "@context/UserContext";
import { useState, useEffect } from "react";
import { OrderItem } from "@components";

const Order = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const handle = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:8000/order/listOrders/${user?.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();

      setOrders(result.data);
    };
    if (user) handle();
  }, [user]);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col items-center">
        <p className="text-4xl font-palanquin font-bold">
          Welcome to <span className="text-coral-red">{user?.username}</span>'s
          order{" "}
        </p>
      </div>
      <ul className="flex flex-col gap-2 items-center pt-8">
        {orders.map((order) => (
          <li>
            <OrderItem order={order} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default withAuth(Order);
