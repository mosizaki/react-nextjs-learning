# Day 7 — JavaScript Review and Todo App Refactor

This folder contains my Day 7 review work from my React/Next.js frontend learning plan.

The goal of this day was not to learn a completely new topic, but to review the JavaScript concepts from the previous days and strengthen my understanding by improving the vanilla JavaScript todo app.

## Goals for Day 7

* Review core JavaScript concepts from Days 1–6
* Revisit array methods such as `map`, `filter`, `forEach`, and `some`
* Review DOM manipulation
* Review event listeners
* Review `localStorage`
* Refactor the todo app code
* Make the project cleaner and easier to understand
* Practice Git and GitHub workflow

## What I Built / Improved

I continued working on the vanilla JavaScript todo app and improved it with better structure and extra features.

### Todo App Features

* Add a new todo
* Prevent empty todos
* Prevent todos shorter than 3 characters
* Delete a todo
* Mark a todo as completed
* Edit an existing todo
* Clear completed todos
* Show active todo count
* Show an empty message when there are no todos
* Save todos to `localStorage`
* Load todos again after refreshing the page

## Concepts Practiced

### DOM Selection

I practiced selecting HTML elements using:

```js
document.querySelector()
```

Examples:

```js
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
```

### Event Listeners

I practiced handling user actions with:

```js
addEventListener()
```

Examples:

```js
todoForm.addEventListener("submit", ...)
clearCompleted.addEventListener("click", ...)
```

### Form Handling

I practiced preventing the default form refresh behavior:

```js
event.preventDefault()
```

This allowed the app to handle form submission with JavaScript instead of refreshing the page.

### Array Methods

I used different array methods for different project tasks:

| Method      | Purpose in the project                       |
| ----------- | -------------------------------------------- |
| `forEach()` | Render each todo on the page                 |
| `filter()`  | Delete todos and clear completed todos       |
| `map()`     | Update todo text and toggle completed status |
| `some()`    | Can be used to check for duplicate todos     |
| `.length`   | Count active todos                           |

### localStorage

I practiced saving and loading data from the browser using:

```js
localStorage.setItem()
localStorage.getItem()
```

Because `localStorage` stores only strings, I used:

```js
JSON.stringify()
JSON.parse()
```

to convert the todos array into a string and back into JavaScript data.

## Main Pattern I Learned

The most important pattern I practiced was:

```txt
Update the data
Save the data
Render the UI again
```

In code, this usually looked like:

```js
todos = updatedTodos
saveTodos()
renderTodos()
```

This pattern helped me understand how frontend apps work before moving into React.

## What I Understand Better Now

After this review, I understand:

* Why the todos array is the source of truth
* Why the UI should be rendered from the data
* Why `filter()` is useful for deleting items
* Why `map()` is useful for updating items
* Why `localStorage` is needed for persistence
* Why `renderTodos()` must run after every data change
* How vanilla JavaScript prepares me for React state and rendering

## Files

```txt
day-07-review
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

Open `index.html` in the browser.

No installation is required because this project uses only HTML, CSS, and vanilla JavaScript.

## Reflection

Day 7 helped me slow down and properly understand the todo app instead of only copying code. I practiced reading my own code, improving it, and explaining how the app works from start to finish.

This review made me more comfortable with JavaScript fundamentals before moving into React.
