import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");
  useEffect(() => {
    console.log("Total Todos:", todos.length);
    console.log(...todos);
  }, [todos]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      if (editIndex === -1) {
        setTodos([...todos, { text: inputValue, dueDatee: dueDate, priority }]);

        // setTimeout(() => {
        //   console.log([...todos]);
        // }, 2000);
      } else {
        const newTodos = [...todos];
        newTodos[editIndex] = { text: inputValue, dueDatee: dueDate, priority };
        setTodos(newTodos);
        setEditIndex(-1);
      }
      setInputValue("");
      setDueDate("");
      setPriority("low");
    }
  };

  const handleEditTodo = (index) => {
    const todo = todos[index];
    setInputValue(todo.text);
    setDueDate(todo.dueDatee);
    setPriority(todo.priority);
    setEditIndex(index);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setEditIndex(-1);
  };

  return (
    <div>
      <h2>Todo App</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Task"
      />
      <input type="date" value={dueDate} onChange={handleDueDateChange} />
      <select value={priority} onChange={handlePriorityChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleAddTodo}>
        {editIndex === -1 ? "Add" : "Update"}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.text}</strong>
            <br />
            Due Date: {todo.dueDatee}
            <br />
            Priority: {todo.priority}
            <br />
            <button onClick={() => handleEditTodo(index)}>Edit</button>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
