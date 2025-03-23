import React from "react";
import TodoApp from "./Todo.jsx";
import './App.css';

const App = () => {
  return (
    <div>
      <h1 className="todo-header">React Todo App</h1>
      <TodoApp />
    </div>
  );
}

export default App;