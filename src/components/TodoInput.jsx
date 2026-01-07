export default function TodoInput({ text, setText, addTodo }) {
  return (
    <div className="input-row">
      <input
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}