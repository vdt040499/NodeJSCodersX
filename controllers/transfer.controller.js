const shortId = require('shortid');
const db = require('../lowdb');
module.exports.create = (req, res) => {
    res.render('transfer/create', {
        csrfToken: req.csrfToken()
    });
}

module.exports.postCreate = (req, res) => {
    var data = {
        id: shortId.generate(),
        accountId: req.body.accountId,
        amount: parseInt(req.body.amount),
        userId: req.signedCookies.userId
    }
    db.get('transfers').push(data).write();
    res.redirect('/transfer/create');
}