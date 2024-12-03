import Image from "next/image";
import { shoe4 } from "@public/assets/images";
import { Button } from "@src/components";

const ProductPage = async ({ product }) => {
  const customerId = 1;
  const isCartExistedResponse = await fetch(
    "http://localhost:8000/cart/check-cart-exist",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerId,
        productId: product.id,
      }),
    }
  );

  const isCartExistedResult = await isCartExistedResponse.json();
  const isCartExisted = isCartExistedResult.data;

  return (
    <section className="pt-[2rem]">
      <div className="flex flex-col items-center">
        <h1 className="text-[3rem] font-palanquin font-bold text-coral-red pb-[3rem]">
          {product.name}
        </h1>
        <Image
          src={shoe4}
          alt={product.name}
          className="w-1/3 h-1/3 object-contain"
        />
        <h3 className="pt-4 text-xl font-montserrat">
          Total remaining:{" "}
          <span className="text-coral-red">{product.totalRemaining} </span>
        </h3>
        <p className="pt-2 pb-4 font-montserrat text-slate-gray">
          {product.description}
        </p>
        {isCartExisted ? (
          <Button content="Cart alreadt existed" />
        ) : (
          <Button content="Add to cart" />
        )}
      </div>
      {/* <div>for further features, like comments, ...</div> */}
    </section>
  );
};

export default ProductPage;
