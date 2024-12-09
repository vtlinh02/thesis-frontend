import Link from "next/link";
import Image from "next/image";

import { thumbnailShoe1 } from "../../public/assets/images";

const ProductItem = ({ product }) => {
  return (
    <div className="py-4 flex flex-col items-center justify-center">
      <Link href={`/product/${product.id}`}>
        <div className="text-2xl font-palanquin text-coral-red">
          {product.name}
        </div>
        <span className="flex justify-center items-center">
          <Image
            src={thumbnailShoe1}
            alt="shoe"
            className="object-contain"
            width={100}
            height={100}
          />
        </span>
      </Link>
      <div className="text-xl font-montserrat">
        <span className=" text-slate-gray">Total remaining:</span>
        <span className="text-coral-red"> {product.totalRemaining}</span>
      </div>
      <p className="font-montserrat">{product.description}</p>
    </div>
  );
};

export default ProductItem;
