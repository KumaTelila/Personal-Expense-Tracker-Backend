const express = require('express');
const cors = require('cors');
const {db} = require('./config/dbconfig');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.json);
app.use(cors())

const server = () => {
  db()
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}

server()