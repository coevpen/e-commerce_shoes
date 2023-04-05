// this file will connect the database  using dotenv and sequelize
//TODO: figure out how to connect with AWS

//require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('shoes_db', 'admin', 'password123', {
      // host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
         decimalNumbers: true,
      },
      host: 'database-1.ctnc6cjecppj.us-east-2.rds.amazonaws.com',
      port: '3306',
});

module.exports = sequelize;


// const mysql = require('mysql2');

// // create a connection to the MySQL database
// const connection = mysql.createConnection({
//     host: 'database-1.ctnc6cjecppj.us-east-2.rds.amazonaws.com',
//     port: '3306',
//     user: 'admin',
//     password: 'password123',
//     database: 'shoes_db'
// });
  
//   // connect to the MySQL database
// connection.connect((err) => {
//     if (err) {
//       console.error('Error connecting to MySQL database: ' + err.stack);
//       return;
//     }
//     console.log('Connected to MySQL database with connection ID: ' + connection.threadId);
// });
