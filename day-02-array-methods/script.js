const resume = ['html', 'css', 'javascript']
resume.push('react')
console.log(resume)

const index = resume.findIndex((item) => {
    return item === 'react'
})

console.log(index)

const mappedResume = resume.map((item) => {
    return item + "!"
})

console.log(mappedResume)

const objInArray = resume.map((item) => {
    return ({knowledge: item})
})

console.log(objInArray)

//example of a obj inside an array
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25,
    rating: 4.5,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 85,
    rating: 4.8,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 3,
    name: "Notebook",
    price: 5,
    rating: 4.2,
    category: "Stationery",
    inStock: true,
  },
  {
    id: 4,
    name: "Desk Lamp",
    price: 40,
    rating: 4.1,
    category: "Home",
    inStock: false,
  },
  {
    id: 5,
    name: "Water Bottle",
    price: 15,
    rating: 4.7,
    category: "Fitness",
    inStock: true,
  },
  {
    id: 6,
    name: "Backpack",
    price: 60,
    rating: 4.4,
    category: "Travel",
    inStock: false,
  },
];

const mappedProductsNames = products.map((product) => {
    return product.name
})

console.log(mappedProductsNames)

const filteredProducts = products.filter((product) => {
    return product.price > 50
})

console.log(filteredProducts)

const sortedProducts = products.sort((a, b) => {
    return b.rating - a.rating
})

console.log(sortedProducts)

const totalProductsPrice = products.reduce((total, product) => {
    return total + product.price
}, 0)

console.log(totalProductsPrice)

const productsStockCheck = products.some((product) => {
    return product.inStock === false
})

console.log(productsStockCheck)

const allProductsInStock = products.every((product) => {
    return product.inStock === true
})

console.log(allProductsInStock)


// exercises

console.log('EXERCISES')

const justNameProducts = products.map((product) => {
    return product.name
})

console.log(justNameProducts)

const filteredProductsByRating = products.filter((product) => {
    return product.rating > 4.5
})

console.log(filteredProductsByRating)

const productsLeastToMost = products.sort((a,b) => {
    return a.price - b.price
})

console.log(productsLeastToMost)

const totalProductPrice = products.reduce((total, product) => {
    return total + product.price
}, 0)

console.log(totalProductPrice)

const productsCheaperThan = products.some((product) => {
    return product.price > 10
})

console.log(productsCheaperThan)

const productsRatingAbove = products.every((product) => {
    return product.rating > 4
})

console.log(productsRatingAbove)