const ProductPage = ({ product, handleButtonClick }) => {
  return (
    <section>
      <h2>{product.name}</h2>
      <h3>Total remaining: {product.totalRemaining}</h3>
      <p>{product.description}</p>
      <button onClick={handleButtonClick}>Buy</button>
    </section>
  );
};

export default ProductPage;
