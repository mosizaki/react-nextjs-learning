# Ecommerce Lite React

A beginner-friendly ecommerce React project that fetches product data from DummyJSON and allows users to add products to a cart.

## Features

- Fetch products from an API
- Loading state
- Error state
- Product grid
- Add to cart
- Cart indicator
- Cart panel
- Increase quantity
- Decrease quantity
- Remove item
- Total cart price

## What I practiced

- useState
- useEffect
- Fetch API
- map
- find
- filter
- reduce
- props
- conditional rendering
- derived state

## Important lesson

The products come from an external API, so they are fetched inside useEffect.

The cart is controlled by user actions, so it is stored in React state.

The cart total and cart quantity are derived from the cart array, so they do not need separate state.