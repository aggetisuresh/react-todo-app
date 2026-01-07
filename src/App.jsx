import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import BulkActions from "./components/BulkActions";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), title: text, completed: false }]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>My Todo</h1>

      <TodoInput text={text} setText={setText} addTodo={addTodo} />

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />

      <Filters filter={filter} setFilter={setFilter} />

      <BulkActions todos={todos} setTodos={setTodos} />
    </div>
  );
}