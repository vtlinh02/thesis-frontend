import { ProductPage } from "@src/components";

const Product = async ({ params }) => {
  const customerId = 1;

  const { id: productId } = params;

  const productResponse = await fetch(
    `http://localhost:8000/product/${productId}`
  );
  const productResult = await productResponse.json();
  const product = productResult.data;

  const handleBuyClick = async () => {
    await fetch("http://localhost:8000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerId,
        productId: productId,
      }),
    });
  };

  return (
    <section>
      <ProductPage product={product} handleButtonClick={handleBuyClick} />
    </section>
  );
};

export default Product;
