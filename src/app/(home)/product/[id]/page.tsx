"use client";

import { ProductPage } from "@components";
import { useState, useEffect } from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useUser } from "@context/UserContext";

const Product = ({ params }: { params: Params }) => {
  const { id: productId } = params;
  const { user } = useUser();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const productResponse = await fetch(
        `http://localhost:8000/product/${productId}`
      );
      const productResult = await productResponse.json();
      setProduct(productResult.data);
    };

    if (user) fetchProduct();
  }, [user]);

  return (
    <section>
      <h1>{user?.id}</h1>
      <ProductPage product={product} />
    </section>
  );
};

export default Product;
