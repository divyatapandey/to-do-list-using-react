const mongoose = require('mongoose');

// Define the Todo model schema
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

// Create the Todo model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
