var express = require('express');
var router = express.Router();


/* GET Redirect Peoples. */
router.get('/', function(req, res, next) {
    res.redirect('/peoples');
});

/* GET */
router.get('/', function(req, res, next) {
    res.render('/index', {title: 'Filework.'});
});


module.exports = router;