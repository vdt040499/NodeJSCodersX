//Define dependencies
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const indexRoutes = require('./routes/index.route');
const userRoutes = require('./routes/users.route');
const authRoutes = require('./routes/auth.route');
const productRoutes = require('./routes/product.route');
const cartRoutes = require('./routes/cart.route');
const authMiddleware =  require('./middleware/auth.middleware');
const sessionMiddleware = require('./middleware/session.middleware');

//Middleware
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.secret));
app.use('/public', express.static('public'));
app.use(sessionMiddleware);

//Routes
app.use('/', indexRoutes);
app.use('/users', authMiddleware.requireAuth, userRoutes);
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

//Export module
module.exports = app;