import Link from "next/link";
import Image from "next/image";
import { lighthouse } from "@public/assets/images";

const Nav = () => {
  return (
    <nav>
      <Link href="/" className="flex justify-between  font-palanquin font-bold">
        <div className="flex-col">
          <div>Home page</div>

          <Image
            src={lighthouse}
            alt="This is the light house"
            width={100}
            height={300}
          />
        </div>
        <div>Your cart</div>
      </Link>
    </nav>
  );
};

export default Nav;
