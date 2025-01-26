const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require('./src/routes/todoRoutes'); // Import routes

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(cors());            // Enable CORS

// API Routes
app.use('/api/todos', todoRoutes); // Prefix all routes with `/api/todos`

module.exports = app;
