# Day 2 — JavaScript Array Methods Practice

This project is a small plain JavaScript exercise for practicing important array methods used constantly in React and frontend development.

The goal is to understand how to work with arrays of objects using:

* `map`
* `filter`
* `reduce`
* `sort`
* `some`
* `every`

These methods are very important because React uses arrays all the time, especially when rendering lists of components.

---

## Project Goal

Build a small product list in plain JavaScript and practice using array methods to:

* Display product names
* Filter products by price
* Sort products by rating
* Calculate total price
* Check stock availability
* Check product conditions

---

## Done When

You are done with Day 2 when:

* You can use `map` without copying code.
* You understand when to use `filter`.
* You can sort products by price or rating.
* You know that `some` and `every` return `true` or `false`.
* You can explain the difference between `map`, `filter`, and `reduce`.
* You pushed your code to GitHub.

---

## GitHub Commit Example

```bash
git add .
git commit -m "Practice JavaScript array methods"
git push
```

---

## Most Important Rule

The most important method for React is `map`.

React uses `map` constantly to render lists:

```jsx
{products.map(product => (
  <div key={product.id}>
    <h2>{product.name}</h2>
    <p>${product.price}</p>
  </div>
))}
```

Master this first, then get comfortable with `filter`, `sort`, and `reduce`.

```
::: ​​
```
