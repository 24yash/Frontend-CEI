import React, { useState } from "react";
import './App.css';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        if(input.trim() !== "") {
            setTodos([...todos, input]);
            setInput("");
        }
    }

    const removeTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    }

    return (
        <div className="todo-container">
            <div className="todo-input-container">
                <input
                    className="todo-input"
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button className="todo-button" onClick={addTodo}>Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">
                        <span>{todo}</span>
                        <button className="remove-button" onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;