// starts the app
const PORT = process.env.PORT || 3001;
const express = require('express');
const sequelize = require('./config/connection');
const app = express();
const path = require('path');
const routes = require('./routes');
//add api routes here

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
