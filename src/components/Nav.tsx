import Link from "next/link";
import Image from "next/image";
import { lighthouse, shoppingCart, logout } from "@assets/images";
import { order, order1 } from "@assets/icons";

const Nav = () => {
  return (
    <nav className="flex justify-between">
      <div>
        <Link
          href="/"
          className=" flex flex-col justify-between font-palanquin font-bold"
        >
          <div>Home page</div>

          <Image
            src={lighthouse}
            alt="This is the light house"
            width={100}
            height={0}
            className="object-contain h-auto"
          />
        </Link>
      </div>
      <div className="flex flex-row-reverse w-1/3 gap-4 font-bold">
        <Link href={"/register"}>
          <span>Logout</span>
          <Image
            src={logout}
            alt="This is a logout image"
            className="object-contain"
            width={50}
            height={50}
          />
        </Link>
        <Link href={"/order"}>
          <span>Your order</span>
          <Image
            src={order}
            alt="This is the order navigation button"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
        <Link href={`/cart`}>
          <span>Your cart</span>
          <Image
            src={shoppingCart}
            alt="This is the shopping cart"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
