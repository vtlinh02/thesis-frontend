import Link from "next/link";
import Image from "next/image";

import { thumbnailShoe1 } from "../../public/assets/images";

const ProductItem = ({ product }) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <Link href={`/product/${product.id}`}>
        <h2 className="text-2xl font-palanquin text-coral-red">
          {product.name}
        </h2>
        <Image src={thumbnailShoe1} alt="shoe" className="object-contain" />
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
