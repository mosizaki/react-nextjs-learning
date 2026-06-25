import TodoItem from "./TodoItem";

function TodoList({ todos, onDeleteTodo, onEditTodo }) {
  if (todos.length === 0) {
    return <p>No todos found.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;