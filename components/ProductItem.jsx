import Link from "next/link";

const ProductItem = ({ product }) => {
  return (
    <section>
      <Link href={`/product/${product.id}`}>
        <h2>{product.name}</h2>
      </Link>
      <h3>Total remaining: {product.totalRemaining}</h3>
      <p>{product.description}</p>
    </section>
  );
};

export default ProductItem;
