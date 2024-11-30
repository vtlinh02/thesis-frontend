"use client";

import { ProductPage } from "@src/components";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const Product = () => {
  const customerId = 1;
  const params = useParams();
  const { id: productId } = params;

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `http://localhost:8000/product/${productId}`
      );
      const result = await response.json();

      setProduct(result.data);
    };
    getProduct();
  }, []);

  const handleBuyClick = async () => {
    const response = await fetch("http://localhost:8000/order/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerId,
        productId: product.id,
      }),
    });

    const result = await response.json();

    if (result.message == "Success") {
      setProduct((prevProduct) => ({
        ...prevProduct,
        totalRemaining: prevProduct.totalRemaining - 1,
      }));
    } else {
      alert("Fail");
    }
  };

  return (
    <section>
      <ProductPage product={product} handleButtonClick={handleBuyClick} />
    </section>
  );
};

export default Product;
