import ProductCard from './components/ProductCard'
import UserCard from './components/UserCard'
import './App.css'

function App() {

 const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 149,
      category: "Audio",
      image: "https://placehold.co/400x300?text=Headphones",
      inStock: true,
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 120,
      category: "Accessories",
      image: "https://placehold.co/400x300?text=Keyboard",
      inStock: true,
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 79,
      category: "Accessories",
      image: "https://placehold.co/400x300?text=Mouse",
      inStock: false,
    },
    {
      id: 4,
      name: "4K Monitor",
      price: 399,
      category: "Display",
      image: "https://placehold.co/400x300?text=Monitor",
      inStock: true,
    },
    {
      id: 5,
      name: "USB-C Hub",
      price: 59,
      category: "Accessories",
      image: "https://placehold.co/400x300?text=USB-C+Hub",
      inStock: true,
    },
    {
      id: 6,
      name: "Laptop Stand",
      price: 45,
      category: "Desk Setup",
      image: "https://placehold.co/400x300?text=Laptop+Stand",
      inStock: false,
    },
  ];


  const productName = "Ipod"
  const productPrice = 500
  return (
    <div>
      {
        products.map((product) => (
          <ProductCard
            key={product.title}
            name={product.name}
            price={product.price}
            category={product.category}
            image={product.image}
            inStock={product.inStock}
          />
        ))
      }

      <ProductCard title="Laptop" price={200}/>
      <ProductCard title={productName} price={productPrice} />

      <UserCard name="mosi" age={30} job="Frontend developer"/>
      <UserCard name="john" age={25} job="React developer"/>
      <UserCard name="chris" age={20} job="JavaScript developer"/>
    </div>
  )
}

export default App
