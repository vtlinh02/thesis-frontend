import Link from "next/link";
import Image from "next/image";
import { lighthouse, shoppingCart, logout } from "@assets/images";

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
            height={300}
            className="object-contain"
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
