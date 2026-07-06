function CartItem({
  item,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveFromCart,
}) {
  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />

      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <p>${item.price}</p>

        <div className="quantity-controls">
          <button onClick={() => onDecreaseQuantity(item.id)}>-</button>

          <span>{item.quantity}</span>

          <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
        </div>

        <button
          className="remove-button"
          onClick={() => onRemoveFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;