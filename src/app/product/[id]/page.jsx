"use client";

import { ProductPage } from "@src/components";
import { useState, useEffect } from "react";

const Product = ({ params }) => {
  const customerId = 1;

  const { id: productId } = params;

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const productResponse = await fetch(
        `http://localhost:8000/product/${productId}`
      );
      const productResult = await productResponse.json();
      setProduct(productResult.data);
    };

    fetchProduct();
  }, []);

  return (
    <section>
      <ProductPage product={product} />
    </section>
  );
};

export default Product;
