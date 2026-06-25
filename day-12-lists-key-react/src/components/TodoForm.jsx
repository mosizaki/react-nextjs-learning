import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [todoText, setTodoText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (todoText.trim() === "") {
      return;
    }

    onAddTodo(todoText.trim());
    setTodoText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
        placeholder="Enter a todo"
      />

      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;