var express = require('express');
var router = express.Router();
var layout = require('./../routes/layout');

var users = [

    {
        id: '',
        name: 'Leandro',
        Last_name: 'Castro',
        photo: '/avatar/avatar-person.png',
        type_user: 'Presidente'
    }
];

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render({userList: users});
});

module.exports = router;
