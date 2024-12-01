import { CartItem } from "@src/components";

const Cart = async () => {
  // further more, these variable will be replaced by session's data
  const userId = 1;
  const username = "Tony Vu";

  const response = await fetch(
    `http://localhost:8000/cart/list-carts/${userId}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );

  const result = await response.json();
  const carts = result.data;

  return (
    <section className="flex flex-col">
      <div className="text-4xl font-palanquin font-bold flex items-center justify-center">
        Welcome to <span className="text-coral-red">{username}</span>'s cart
      </div>
      <ul className="flex flex-col gap-2 pt-[3rem]">
        {carts.map((cart) => (
          <li key={cart.id} className="flex justify-center">
            <CartItem cart={cart} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cart;
