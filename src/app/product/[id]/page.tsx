"use client";

import { ProductPage } from "@src/components";
import { useState, useEffect } from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const Product = ({ params }: { params: Params }) => {
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
