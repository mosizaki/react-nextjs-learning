function ProductCard ({name, price, category, image, inStock}) {
    return(
        <div className="product-card">
            <h2>{name}</h2>
            <p>price is {price}$</p>
            <p>{category}</p>
            <img src={image} alt="" />
            {
                inStock ? (
                    <p>product is in stock</p>
                ) : (
                    <p>product is out of stock</p>   
                )
            }
        </div>
    )
}

export default ProductCard