function TodoItem({ todo, onDeleteTodo, onEditTodo }) {
  return (
    <li className="todo-item">
      <div>
        <strong>{todo.text}</strong>
        <span className="category"> {todo.category}</span>
      </div>

      <div className="todo-actions">
        <button onClick={() => onEditTodo(todo)}>Edit</button>
        <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;