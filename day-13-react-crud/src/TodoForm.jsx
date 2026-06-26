import { useState } from "react";

function TodoForm({onAddTodo}) {
    const [todoText, setTodoText] = useState("")
    const [todoCategory, setTodoCategory] = useState("study")

    function handleSubmit(event) {
        event.preventDefault()

        if (todoText.trim() === "") {
            return
        }

        onAddTodo(todoText.trim(), todoCategory)

        setTodoText("")
        setTodoCategory("study")
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                value={todoText}
                onChange={(event) => setTodoText(event.target.value)} 
                placeholder="enter a todo"
            />

            <select value={todoCategory} onChange={(event) => setTodoCategory(event.target.value)}>
                <option value="study">Study</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
            </select>

            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm