export default function BulkActions({ todos, setTodos }) {
  const markAllCompleted = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: true })));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div className="bulk-actions">
      <button onClick={markAllCompleted}>Mark All Completed</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}