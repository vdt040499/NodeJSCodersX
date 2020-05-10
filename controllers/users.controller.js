const db = require('../lowdb');

module.exports.index = (req, res) => {
    res.render('users/index', {
        users: db.get('users').value()
    });
}

module.exports.search = (req, res) => {
    var q = req.query.q.toLowerCase();

    var users = db.get('users').value();

    var matchedUsers = users.filter(user => {
        return user.name.toLowerCase().indexOf(q) !== -1;
    })

    res.render('users/index', {
        users: matchedUsers,
        q: q
    })
}

module.exports.create = (req, res) => {
    res.render('users/create');
}

module.exports.createpost = (req, res) => {
    db.get('users').push(req.body).write();
    res.redirect('/users');
}