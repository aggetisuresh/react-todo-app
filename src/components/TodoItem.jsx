export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={todo.completed ? "done" : ""}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.title}</span>
      <button className="delete" onClick={() => deleteTodo(todo.id)}>
        ❌
      </button>
    </li>
  );
}