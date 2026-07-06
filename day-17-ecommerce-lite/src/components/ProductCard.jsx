function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <img src={product.thumbnail} alt={product.title} />

      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>

        <button onClick={() => onAddToCart(product)}>Add to cart</button>
      </div>
    </article>
  );
}

export default ProductCard;