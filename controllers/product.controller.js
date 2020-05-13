const db = require('../lowdb');

module.exports.index = (req, res) => {
    var page = parseInt(req.query.page) || 1; // n
    var perPage = 8; // x

    var start = (page - 1) * perPage;
    var end = page * perPage;

    var drop = (page - 1) * perPage;

    //var products = db.get('products').value().slice(start, end);
    var products = db.get('products').drop(drop).take(perPage).value();
    
    res.render('products/index', {
        products: products
    });
}