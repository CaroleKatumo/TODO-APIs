const express = require('express');
const {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController'); // Import controller methods

const router = express.Router();

// Define routes
router.get('/', getTodos);           // GET all todos
router.get('/:id', getTodo);         // GET a single todo by ID
router.post('/', createTodo);        // POST a new todo
router.put('/:id', updateTodo);      // PUT to update a todo by ID
router.delete('/:id', deleteTodo);   // DELETE a todo by ID

module.exports = router;
