# Day 1 — JavaScript Refresh

This folder contains my Day 1 practice exercises for refreshing basic JavaScript before learning React and Next.js.

The purpose of this day was to review the core JavaScript concepts that are used constantly in React development.

## Main Goal

The goal of Day 1 was to become comfortable with basic JavaScript syntax and logic before moving into more advanced topics such as array methods, DOM manipulation, React components, and state management.

## Topics Covered

On Day 1, I practiced:

* `let`
* `const`
* regular functions
* arrow functions
* template literals
* arrays
* objects
* basic examples of JavaScript data structures

## Why This Matters for React

React uses JavaScript heavily, so understanding these basics is important before learning components, props, state, and hooks.

These concepts are especially important because React code often uses:

* variables to store data
* functions to create reusable logic
* arrow functions in components and event handlers
* arrays to render lists
* objects to represent users, products, posts, and other data
* template literals for dynamic text

## Concepts Practiced

### Variables

Practiced using `let` and `const`.

Example:

```js
const name = "John";
let age = 25;
```

### Functions

Practiced writing regular functions.

Example:

```js
function greetUser(name) {
  return `Hello, ${name}`;
}
```

### Arrow Functions

Practiced writing shorter function syntax.

Example:

```js
const greetUser = (name) => {
  return `Hello, ${name}`;
};
```

### Template Literals

Practiced inserting variables into strings.

Example:

```js
const message = `Hello, my name is ${name}`;
```

### Arrays

Practiced creating and using arrays.

Example:

```js
const skills = ["HTML", "CSS", "JavaScript"];
```

### Objects

Practiced creating and using objects.

Example:

```js
const user = {
  name: "John",
  role: "Frontend Developer",
  skills: ["HTML", "CSS", "JavaScript"]
};
```

## Practice Exercises

The exercises in this folder include small examples of:

* creating variables
* writing functions
* using arrow functions
* creating arrays
* creating objects
* accessing object properties
* working with simple data

## What I Should Be Able to Explain After This Day

After completing Day 1, I should be able to explain:

* the difference between `let` and `const`
* how to write a regular function
* how to write an arrow function
* how template literals work
* how arrays store multiple values
* how objects store related data
* why arrays and objects are important in React

## Done Criteria

This day is complete when:

* I have written small examples of variables, functions, arrays, and objects
* I understand the basic syntax
* I have committed the work to GitHub
* I can explain the purpose of the code I wrote

## Git Commit

Suggested commit message:

```bash
git commit -m "Add day 1 JavaScript refresh exercises"
```

## Next Step

The next learning step is:

```txt
Day 2 — Array Methods
```

The main focus will be:

* `map`
* `filter`
* `find`
* `reduce`
* `sort`

These methods are extremely important for React because they are often used to render lists, filter data, and transform arrays before displaying them in the UI.
