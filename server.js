const app = require('./app');
const { connectDB, sequelize } = require('./src/config/database');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Connect to the database and sync models
const startServer = async () => {
  try {
    await connectDB();
    await sequelize.sync(); // Syncs the models to the database
    console.log('Database synchronized');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

startServer();
