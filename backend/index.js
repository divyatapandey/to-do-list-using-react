const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/routers'); // Ensure this file path is correct and exists

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mongoose connection
mongoose.connect('mongodb+srv://divyata:DivyaDB@to-do.ko7xh.mongodb.net/to-do?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB using Mongoose!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Middleware for todoRoutes
app.use('/api', todoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
