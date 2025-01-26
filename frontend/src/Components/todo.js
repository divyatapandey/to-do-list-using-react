import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  // Fetch todos from the backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data); // Set the todos state with fetched data
    } catch (error) {
      console.error('Error fetching todos:', error.message);
    }
  };

  // Add todo
  const addTodo = async () => {
    if (todoInput.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:5000/api/todos', {
          text: todoInput,
        });
        setTodos([...todos, response.data]); // Add the new todo to the state
        setTodoInput('');
      } catch (error) {
        console.error('Error adding todo:', error.message);
      }
    }
  };

  // Remove todo
  const removeTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      const updatedTodos = todos.filter((todo) => todo._id !== id);
      setTodos(updatedTodos); // Update the state after removing the todo
    } catch (error) {
      console.error('Error removing todo:', error.message);
    }
  };

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <h1 id="heading">Your Task Hub</h1>

      {/* Input field and add button */}
      <div id="inputs">
        <input
          id="todo-input"
          type="text"
          placeholder="Enter your todo here"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button id="add-btn" onClick={addTodo}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>

      {/* Todo list */}
      <div>
        <ul className="todo-container">
          {todos.map((todo) => (
            <li key={todo._id} className="todo-item">
              <i className="fa-solid fa-circle-check" id="check"></i>&ensp;
              <span className="todo-content">{todo.text}</span>
              <button className="remove-button" onClick={() => removeTodo(todo._id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
