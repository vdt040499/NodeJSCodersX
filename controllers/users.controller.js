var users = [
    {name: 'Minh Thông'},
    {name: 'Võ Tân'}
]

module.exports.index = (req, res) => {
    res.render('users/index', {
        users: users
    });
}