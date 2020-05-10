var users = [
    {name: 'Minh Thông'},
    {name: 'Võ Tân'}
]

module.exports.index = (req, res) => {
    res.render('users/index', {
        users: users
    });
}

module.exports.search = (req, res) => {
    var q = req.query.q.toLowerCase();
    var matchedUsers = users.filter(user => {
        return user.name.toLowerCase().indexOf(q) !== -1;
    })

    res.render('users/index', {
        users: matchedUsers,
        q: q
    })
}