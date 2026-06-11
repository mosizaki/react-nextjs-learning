const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const todoCount = document.querySelector('#todo-count')
const clearCompeleted = document.querySelector('#clear-completed')


let todos = []

loadTodos()
renderTodos()


todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const todoText = todoInput.value.trim()

    if (todoText === "") {
        return
    }

    if (todoText.length < 3) {
        alert("todo must be at least 3 characters long!")
        return
    }

    const newTodo = {
        id: Date.now(),
        text: todoText,
        completed: false
    }

    todos.push(newTodo)

    console.log(todos)

    saveTodos()
    renderTodos()

    todoInput.value = ""

})

function renderTodos() {
    todoList.innerHTML = ""

    if (todos.length === 0) {
        todoList.innerHTML = "<p>No todos yet. add one above.</p>"
        return
    }

    const activeTodos = todos.filter((todo) => {
        return todo.completed === false
    })

    if (activeTodos.length > 0 ) {
        todoCount.textContent = `${activeTodos.length} active todos`;
    } else {
        todoCount.textContent = ""
    }

    

    todos.forEach((todo) => {
        const todoItem = document.createElement("li")
        todoItem.classList.add("todo-item")

        todoItem.innerHTML = `
            <div class="todo-left">
                <input type="checkbox" ${todo.completed ? "checked" : ""} onChange="toggleTodo(${todo.id})"/>

                <span class="todo-text ${todo.completed ? "completed" : ""}">
                    ${todo.text}
                </span>
            </div>

            <div>
                <button class="delete-btn" onclick="deleteTodo(${todo.id})">
                    Delete
                </button>

                <button class="edit-btn" onclick="editTodo(${todo.id})">Edit</button>
            </div>

            
        `

        todoList.appendChild(todoItem)
    })
}

function deleteTodo(id) {
    todos = todos.filter((todo) => {
        return todo.id !== id
    })

    saveTodos()
    renderTodos()
}

function toggleTodo(id) {
    todos = todos.map((todo) => {
        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed
            }
        }

        return todo
    })

    saveTodos()
    renderTodos()
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos))
}

function loadTodos() {
    const storedTodos = localStorage.getItem("todos")

    if (storedTodos) {
        todos = JSON.parse(storedTodos)
    }
}

clearCompeleted.addEventListener("click", () => {
    todos = todos.filter((todo) => {
        return todo.completed === false
    })

    saveTodos()
    renderTodos()
})

function editTodo(id) {
    const newText = prompt("Enter new Todo text:")

    if (newText === null) {
        return
    }

    const trimmedText = newText.trim()

    if (trimmedText === "") {
        return
    }

    todos = todos.map((todo) => {
        if (todo.id === id) {
            return {
                ...todo,
                text: trimmedText
            }
        }
        
        return todo
    })

    saveTodos()
    renderTodos()
}