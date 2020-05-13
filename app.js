//Define dependencies
const express = require('express');
const app = express();

const indexRoutes = require('./routes/index.route');
const userRoutes = require('./routes/users.route');

//Middleware
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

//Routes
app.use('/', indexRoutes);
app.use('/users', userRoutes);

//Export module
module.exports = app;