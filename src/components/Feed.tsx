"use client";

import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { useUser } from "@context/UserContext";

const ListProductItems = ({ products }: any) => {
  return (
    <ul className="flex justify-evenly">
      {products.map((product: any) => (
        <li key={product.id} className="w-1/3 border-black border-2">
          <ProductItem key={product.id} product={product} />
        </li>
      ))}
    </ul>
  );
};

const Feed = () => {
  const [allProducts, setAllProducts] = useState([]);
  const { user } = useUser();
  let token = null;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "http://localhost:8000/product/listProducts/1",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();

      setAllProducts(result.data);
    };
    getProducts();
  }, []);

  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold font-palanquin text-coral-red">
          {" "}
          Align's Products
        </h1>
        <p className="font-palanquin text-3xl py-4 font-bold text-slate-gray">
          Welcome <span>{user?.username}</span>
        </p>
        <p className="pt-4 text-xl font-montserrat text-slate-gray">
          Below is a list of Align's products
        </p>
      </div>
      <div className="pt-[4rem]">
        <ListProductItems products={allProducts} />
      </div>
    </section>
  );
};

export default Feed;
