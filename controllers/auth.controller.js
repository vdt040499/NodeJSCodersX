const db = require('../lowdb');
const shortId = require('shortid');
const md5 = require('md5');

module.exports.login = (req, res) => {
    res.render('auth/login');
}

module.exports.postLogin = (req, res) => {
    var user = db.get('users').find({email: req.body.email}).value();

    if(!user){
        res.render('auth/login', {
            errors: [
                'User does not exist'
            ],
            values: req.body
        });
        return;
    }

    if(md5(req.body.password) !== user.password){
        res.render('auth/login', {
            errors: [
                'Wrong password'
            ], 
            values: req.body
        });
        return;
    }

    res.cookie('userId', user.id, {
        signed: true
    });
    res.redirect('/users');
}

module.exports.signup = (req, res) => {
    res.render('auth/signup');
}

module.exports.postSignup = (req, res) => {
    var hashedPassword = md5(req.body.password);
    var user = {
        id: shortId.generate(),
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        password: hashedPassword
    }

    db.get('users').push(user).write();

    res.redirect('/users');
}