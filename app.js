const express = require('express');
const cors = require('cors');
const {db} = require('./config/dbconfig');
const {readdirSync} = require('fs');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;
const IP = process.env.IP || 'localhost';


// middleware
app.use(express.json());
app.use(cors());

//routes
// app.use('/users', require('./routes/users'));
// app.use('/', require('./routes/transactions'));
readdirSync('./routes').map((route) => app.use('/api', require('./routes/' + route)))

const server = () => {
  db()
  app.listen(PORT, IP);
  console.log(`Server is running at http://${IP}:${PORT}`);
}

server()
module.exports = app;