function Navbar({ totalCartQuantity, onToggleCart }) {
  return (
    <header className="navbar">
      <h1>Ecommerce Lite</h1>

      <button className="cart-button" onClick={onToggleCart}>
        Cart ({totalCartQuantity})
      </button>
    </header>
  );
}

export default Navbar;