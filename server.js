// starts the app
const PORT = process.env.PORT || 3002;
const express = require('express');
//const sequelize = require('./config/connection');
const app = express();
const path = require('path');
const routes = require('./routes');
const mysql = require("mysql");


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// prase incoming JSON data
app.use(express.json());

// gets all the files for front end index.html
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, () => console.log(`API server now on ${PORT}!`));
});

// create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'database-1.ctnc6cjecppj.us-east-2.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: 'password123',
  database: 'shoes_db'
});

// connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database with connection ID: ' + connection.threadId);
});
