const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/routers');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('');//put your mongodb connection string here

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Use your todoRoutes
app.use('/api', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
