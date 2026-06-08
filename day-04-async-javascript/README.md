# Day 4 — Async JavaScript

## Topics Covered

- Promises
- `.then()`
- `.catch()`
- `async/await`
- `try/catch`
- `fetch`
- Handling HTTP errors with `response.ok`
- Converting API responses with `response.json()`

## What I Built

I practiced asynchronous JavaScript by creating Promises, handling success and failure, using `async/await`, and fetching posts from the JSONPlaceholder API.

## Main Challenge

Fetched posts from:

https://jsonplaceholder.typicode.com/posts

Then displayed:

- total number of posts
- posts from user ID 1
- post title
- post body

## Key Lessons

- `fetch()` returns a Promise.
- `await` waits for a Promise to finish.
- `response.json()` also returns a Promise.
- `try/catch` handles async errors.
- `response.ok` should be checked before using the data.