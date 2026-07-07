import { useState, useEffect } from "react"
import "./App.css"


function App() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")

    if (savedCart === null) {
      return []
    }

    return JSON.parse(savedCart)
  })
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchText, setSearchText] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortOption, setSortOption] = useState("default")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [couponCode, setCouponCode] = useState("")
  const [showCheckout, setShowCheckout] = useState(false)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])


  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ]

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        setError("")

        const response = await fetch("https://dummyjson.com/products")

        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }

        const data = await response.json()
        setProducts(data.products)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  function handleAddToCart(product) {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id)

      if (existingItem) {
        return currentCart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item, 
              quantity: item.quantity + 1
            }
          }

          return item
        })
      }

      return [
        ...currentCart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          quantity: 1
        }
      ]
    })
  }

  const totalCartQuantity = cart.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  function handleIncreaseQuantity(productId) {
    setCart((currentCart) => {
      return currentCart.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }

        return item
      })
    })
  }

  function handleDecreaseQuantity(productId) {
    setCart((currentCart) => {
      return currentCart
        .map((item) => {
          if (item.id === productId) {
            return {
              ...item,
              quantity: item.quantity - 1
            }
          }

          return item
        })
        .filter((item) => item.quantity > 0)
    })
  }

  function handleRemoveFromCart(productId) {
    setCart((currentCart) => {
      return currentCart.filter((item) => item.id !== productId)
    })
  }

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const filteredProducts = products.filter((product) => {
    const titleMatches = product.title
      .toLowerCase()
      .includes(searchText.toLowerCase())

    const categoryMatches =
      selectedCategory === "all" || product.category === selectedCategory

    return titleMatches && categoryMatches
  }).sort((a, b) => {
    if (sortOption === "price-low-high") {
      return a.price - b.price
    }

    if(sortOption === "price-high-low") {
      return b.price - a.price
    }

    if(sortOption === "rating-high-low") {
      return b.rating - a.rating
    }
  })

  function handleOpenProductModal(product) {
    setSelectedProduct(product)
  }

  function handleCloseProductModal() {
    setSelectedProduct(null)
  }

  const discount = couponCode.trim().toUpperCase() === "SAVE10" ? subtotal * 0.1 : 0

  const shipping = subtotal > 0 && subtotal < 100 ? 9.99 : 0

  const finalTotal = subtotal - discount + shipping

  return (
    <div className="app">
      <header className="navbar">
        <h1>Ecommerce Lite</h1>

        <button className="cart-button" onClick={() => setIsCartOpen(!isCartOpen)}>
          Cart ({totalCartQuantity})
        </button>
      </header>

      {isCartOpen && (
        <section className="cart-panel">
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />

                  <div>
                    <h3>{item.title}</h3>
                    <p>
                      ${item.price} x {item.quantity}
                    </p>
                  </div>

                  <button onClick={() => handleIncreaseQuantity(item.id)}>
                    +
                  </button>

                  <button onClick={() => handleDecreaseQuantity(item.id)}> 
                    -
                  </button>

                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="coupon-box">
            <label htmlFor="coupon">Coupon code</label>

            <input 
              type="text" 
              id="coupon"
              placeholder="Try SAVE10"
              value={couponCode}
              onChange={(event) => setCouponCode(event.target.value)}
            />
          </div>

          <div className="cart-total">
            <p>
              <span>Subtotal</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </p>

            <p>
              <span>Discount:</span>
              <strong>-${discount.toFixed(2)}</strong>
            </p>

            <p>
              <span>Shipping:</span>
              <strong>${shipping.toFixed(2)}</strong>
            </p>

            <p className="final-total">
              <span>Total:</span>
              <strong>${finalTotal.toFixed(2)}</strong>
            </p>
          </div>

          <button className="checkout-button" onClick={() => setShowCheckout(!showCheckout)}>
            {showCheckout ? "Hide Checkout" : "Checkout"}
          </button>

          {showCheckout && (
            <div className="checkout-summary">
              <h3>Order Summary</h3>
              <p>Total items: {totalCartQuantity}</p>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Discount: ${discount.toFixed(2)}</p>
              <p>Shipping: ${shipping.toFixed(2)}</p>
              <p>
                <strong>Final total: ${finalTotal.toFixed(2)}</strong>
              </p>
              <p>This is a fake checkout. No payment is made.</p>
            </div>
          )}
        </section>
      )}

      <main className="main-content">
        <h2>Products</h2>

        <div className="shop-controls">
          <div className="control-group">
            <label htmlFor="search">Search products</label>

            <input
              type="text" 
              id="search"
              placeholder="Search by title..."
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
          </div>

          <div className="control-group">
            <label htmlFor="category">Category</label>

            <select 
              id="category"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              {categories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label htmlFor="sort">Sort</label>

            <select
              id=""
              value={sortOption}
              onChange={(event) => setSortOption(event.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating-high-low">Rating: High to Low</option>
            </select>
          </div>
        </div>

        <div className="product-gird">
          {loading && <p>Loading Products...</p>}

          {error && <p className="error">{error}</p>}

          {!loading && !error && (
            <div className="product-gird">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />

                  <div className="product-info">
                    <h3>{product.title}</h3>
                    <p>{product.descripion}</p>
                    <p>Rating: {product.rating} ⭐</p>
                    <p className="price">${product.price}</p>

                    <button onClick={() => handleAddToCart(product)}>
                      Add to cart
                    </button>
                  </div>

                  <button className="details-button" onClick={() => handleOpenProductModal(product)}>
                    Details
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      {selectedProduct && (
        <div className="modal-backdrop" onClick={handleCloseProductModal}>
          <section className="product-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseProductModal}>
              x
            </button>

            <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />

            <div>
              <h2>{selectedProduct.title}</h2>
              <p>{selectedProduct.descripion}</p>
              <p>Category: {selectedProduct.category}</p>
              <p>Rating: {selectedProduct.rating} ⭐</p>
              <p>Stock: {selectedProduct.stock}</p>
              <p className="price">${selectedProduct.price}</p>

              <button onClick={() => handleAddToCart(selectedProduct)}>
                Add to cart
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default App