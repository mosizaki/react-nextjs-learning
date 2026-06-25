import TodoItem from "./TodoItem";

function TodoList({ todos, onDeleteTodo }) {
  return (
        todos.length === 0 ? (
            <p>No Todos yet. add your todo</p>
        ) : (
            <ul>
            {todos.map((todo) => (
                <TodoItem
                key={todo.id}
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                />
            ))}
            </ul>
        )
  );
}

export default TodoList;