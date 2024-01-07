import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  // Function to fetch todos from the backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get('');//here goes your backend server connection
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error.message);
    }
  };

  useEffect(() => {
    // Fetch todos when the component mounts
    fetchTodos();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Function to add a todo
  const addTodo = async () => {
    if (todoInput.trim() !== '') {
      try {
        const response = await axios.post('', //here goes your backend server connection
        {
          text: todoInput,
        });

        console.log('Response from addTodo:', response.data);
        setTodos([...todos, response.data]);
        setTodoInput('');
      } catch (error) {
        console.error('Error adding todo:', error.message);
      }
    }
  };

  // Function to remove a todo
  const removeTodo = async (id) => {
    try {
      await axios.delete(`/${id}`);//here goes your backend server connection
      const updatedTodos = todos.filter(todo => todo._id !== id);

      console.log('Updated todos after removal:', updatedTodos);
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error removing todo:', error.message);
    }
  };

  return (
    <>
      <h1 id="heading">Your Task Hub</h1>

      {/* Input for adding new todos */}
      <div id="inputs">
        <input
          id="todo-input"
          type="text"
          placeholder="Enter your todo here"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button id="add-btn" onClick={addTodo}><i className="fa-solid fa-plus"></i></button>
      </div>

      {/* Display the list of todos */}
      <div>
        <ul className="todo-container">
          {todos.map(todo => (
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
