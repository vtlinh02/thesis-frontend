"use client";

import { ProductPage } from "@components";
import { useState, useEffect } from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useUser } from "@context/UserContext";
import { withAuth } from "@utils/withAuth";

const Product = ({ params }: { params: Params }) => {
  const { id: productId } = params;
  const { user } = useUser();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchProduct = async () => {
      const productResponse = await fetch(
        `http://localhost:8000/product/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const productResult = await productResponse.json();
      setProduct(productResult.data);
    };

    if (user) fetchProduct();
  }, [user]);

  return (
    <section>
      <ProductPage product={product} />
    </section>
  );
};

export default withAuth(Product);
