"use client";

import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const ListProductItems = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "http://localhost:8000/product/listProducts/1"
      );
      const result = await response.json();

      console.log(result.data[0]);

      setAllProducts(result.data);
    };
    getProducts();
  }, []);

  return (
    <section>
      <div>
        <ListProductItems products={allProducts} />
      </div>
    </section>
  );
};

export default Feed;
