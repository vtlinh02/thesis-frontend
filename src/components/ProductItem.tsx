import Link from "next/link";
import Image from "next/image";

import { thumbnailShoe1 } from "../../public/assets/images";
import { Product } from "@shared/Product";

const ProductItem = ({ product }: { product: Product }) => {
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
            className="object-contain h-auto"
            width={100}
            height={0}
          />
        </span>
      </Link>
      <div className="text-xl font-montserrat">
        <span className=" text-slate-gray">Total remaining:</span>
        <span className="text-coral-red"> {product.totalRemaining}</span>
      </div>
      <p className="text-xl font-montserrat text-slate-gray">
        Price: <span className="font-bold text-coral-red">{product.price}</span>
      </p>
      <p className="font-montserrat">{product.description}</p>
    </div>
  );
};

export default ProductItem;
