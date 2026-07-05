import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  function handleAddToCart(product) {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);

      if (existingItem) {
        return currentCart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        });
      }

      return [
        ...currentCart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          quantity: 1,
        },
      ];
    });
  }

  function handleIncreaseQuantity(productId) {
    setCart((currentCart) => {
      return currentCart.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });
    });
  }

  function handleDecreaseQuantity(productId) {
    setCart((currentCart) => {
      return currentCart
        .map((item) => {
          if (item.id === productId) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  }

  function handleRemoveFromCart(productId) {
    setCart((currentCart) => {
      return currentCart.filter((item) => item.id !== productId);
    });
  }

  const totalCartQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const totalCartPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="app">
      <header className="navbar">
        <h1>Ecommerce Lite</h1>

        <button
          className="cart-button"
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          Cart ({totalCartQuantity})
        </button>
      </header>

      {isCartOpen && (
        <section className="cart-panel">
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />

                    <div className="cart-item-info">
                      <h3>{item.title}</h3>
                      <p>${item.price}</p>

                      <div className="quantity-controls">
                        <button onClick={() => handleDecreaseQuantity(item.id)}>
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button onClick={() => handleIncreaseQuantity(item.id)}>
                          +
                        </button>
                      </div>

                      <button
                        className="remove-button"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-total">
                <strong>Total:</strong> ${totalCartPrice.toFixed(2)}
              </div>
            </>
          )}
        </section>
      )}

      <main className="main-content">
        <h2>Products</h2>

        {loading && <p>Loading products...</p>}

        {error && <p className="error">{error}</p>}

        {!loading && !error && (
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />

                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p className="description">{product.description}</p>
                  <p className="price">${product.price}</p>

                  <button onClick={() => handleAddToCart(product)}>
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;