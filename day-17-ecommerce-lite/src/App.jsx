import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import CartPanel from "./components/CartPanel";
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
      <Navbar
        totalCartQuantity={totalCartQuantity}
        isCartOpen={isCartOpen}
        onToggleCart={() => setIsCartOpen(!isCartOpen)}
      />

      {isCartOpen && (
        <CartPanel
          cart={cart}
          totalCartPrice={totalCartPrice}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
          onRemoveFromCart={handleRemoveFromCart}
        />
      )}

      <main className="main-content">
        <h2>Products</h2>

        {loading && <p>Loading products...</p>}

        {error && <p className="error">{error}</p>}

        {!loading && !error && (
          <ProductGrid products={products} onAddToCart={handleAddToCart} />
        )}
      </main>
    </div>
  );
}

export default App;