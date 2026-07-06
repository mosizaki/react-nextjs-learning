import CartItem from "./CartItem";

function CartPanel({
  cart,
  totalCartPrice,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveFromCart,
}) {
  return (
    <section className="cart-panel">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncreaseQuantity={onIncreaseQuantity}
                onDecreaseQuantity={onDecreaseQuantity}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
          </div>

          <div className="cart-total">
            <strong>Total:</strong> ${totalCartPrice.toFixed(2)}
          </div>
        </>
      )}
    </section>
  );
}

export default CartPanel;