//Define dependencies
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const indexRoutes = require('./routes/index.route');
const userRoutes = require('./routes/users.route');
const authRoutes = require('./routes/auth.route');
const authMiddleware =  require('./middleware/auth.middleware');

//Middleware
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/public', express.static('public'));

//Routes
app.use('/', indexRoutes);
app.use('/users', authMiddleware.requireAuth, userRoutes);
app.use('/auth', authRoutes);

//Export module
module.exports = app;