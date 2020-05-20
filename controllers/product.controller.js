const db = require('../lowdb');
const mongoose = require('mongoose');
const Product = require('../models/product.model');

module.exports.index = async(req, res) => {
    // var page = parseInt(req.query.page) || 1; // n
    // var perPage = 8; // x

    // var start = (page - 1) * perPage;
    // var end = page * perPage;

    // var drop = (page - 1) * perPage;

    // //var products = db.get('products').value().slice(start, end);
    // var products = db.get('products').drop(drop).take(perPage).value();
    
    // res.render('products/index', {
    //     products: products
    // });

    const products = await Product.find();
    res.render('products/index', {
        products: products
    });
}

module.exports.create = (req, res) => {
    res.render('products/create', {
        csrfToken: req.csrfToken()
    });
}

module.exports.postCreate = (req, res) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        image: req.file.path
    });

    product.save();
    res.redirect('/products');
}