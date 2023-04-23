// this file will connect the database  using dotenv and sequelize

require('dotenv').config();
var fs = require('fs');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'database-1.ctnc6cjecppj.us-east-2.rds.amazonaws.com',
      port: '3306',
      logging: console.log,
      maxConcurrentQueries: 100,
      dialect: 'mysql',
      dialectOptions: {
        ssl:{
          require: true,
          rejectUnauthorized: true,
          ca: fs.readFileSync('./us-east-2-bundle.pem')
        }
      },
});

module.exports = sequelize;
