const Todo = require('../models/Todo');

// Get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json({
      statusCode: 1000,
      status: true,
      message: 'Todos retrieved successfully',
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 1001,
      status: false,
      message: error.message,
      data: null,
    });
  }
};

// Get a single todo
exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({
        statusCode: 1001,
        status: false,
        message: 'Todo not found',
        data: null,
      });
    }
    res.status(200).json({
      statusCode: 1000,
      status: true,
      message: 'Todo retrieved successfully',
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 1001,
      status: false,
      message: error.message,
      data: null,
    });
  }
};

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({
      statusCode: 1000,
      status: true,
      message: 'Todo created successfully',
      data: todo,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 1001,
      status: false,
      message: error.message,
      data: null,
    });
  }
};

// Update a todo
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({
        statusCode: 1001,
        status: false,
        message: 'Todo not found',
        data: null,
      });
    }

    await todo.update(req.body);
    res.status(200).json({
      statusCode: 1000,
      status: true,
      message: 'Todo updated successfully',
      data: todo,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 1001,
      status: false,
      message: error.message,
      data: null,
    });
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({
        statusCode: 1001,
        status: false,
        message: 'Todo not found',
        data: null,
      });
    }

    await todo.destroy();
    res.status(200).json({
      statusCode: 1000,
      status: true,
      message: 'Todo deleted successfully',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 1001,
      status: false,
      message: error.message,
      data: null,
    });
  }
};
