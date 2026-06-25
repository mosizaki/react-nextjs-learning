import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


function App() {
  const [todos, setTodos] = useState([]);


  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text
    };

    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>React Todo App</h1>

      <TodoForm onAddTodo={addTodo} />

      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
      <p>Number of Todos: {todos.length}</p>
    </div>
  );
}

export default App;