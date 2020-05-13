var db = require('../lowdb');

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

    if(req.body.password !== user.password){
        res.render('auth/login', {
            errors: [
                'Wrong password'
            ], 
            values: req.body
        });
        return;
    }

    res.cookie('userId', user.id);
    res.redirect('/users');
}