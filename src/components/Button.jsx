"use client";

const Button = ({ content, contentAfterClick }) => {
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
    <button
      onClick={handleBuyClick}
      className="flex justify-center items-center w-[150px] h-[65px] bg-coral-red  rounded-full text-white"
    >
      {content}
    </button>
  );
};

export default Button;
