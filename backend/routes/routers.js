const express = require('express');
const router = express.Router();
const Todo = require('../models/todomodel');

// Create a new todo
router.post('/todos', async (req, res) => {
  console.log('Received POST request:', req.body);

  const newTodo = new Todo({
    text: req.body.text,
  });

  try {
    const savedTodo = await newTodo.save();
    console.log('Todo saved:', savedTodo);
    res.status(201).json(savedTodo);
  } catch (error) {
    console.error('Error saving todo:', error.message);
    res.status(400).json({ message: error.message });
  }
});

// Retrieve all todos
router.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a todo by ID
router.delete('/todos/:id', async (req, res) => {
  const todoId = req.params.id;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(todoId);

    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json({ message: 'Todo deleted', deletedTodo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
