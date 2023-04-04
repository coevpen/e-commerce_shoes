const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
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

module.exports = router;
