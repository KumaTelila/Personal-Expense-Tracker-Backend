const express = require('express');
const cors = require('cors');
const { db } = require('../config/dbconfig');
const { readdirSync } = require('fs');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
readdirSync('./routes').map(route => app.use('/api', require(`../routes/${route}`)));

// Export the app for Vercel
module.exports = (req, res) => {
  // Connect to the database
  db();

  // Use the Express app to handle requests
  app(req, res);
};
