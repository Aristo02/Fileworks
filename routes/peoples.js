// import { partials } from 'handlebars';

var express = require('express');
var router = express.Router();
var tasksMongo = require('./../model/tasks')();

/* GET  Peoples Page. */
router.get('/peoples', function(req, res, next) {
  /* var minhaBatata = new tasksMongo({title: 'gggg', description: 'tsfsd', status: true });
  minhaBatata.save(function (err, batatoid) {
	  if (err) return console.error(err);
	  console.log(batatoid.title + " chegou aqui.");
	}); */

  var temp = tasksMongo.find({}, (err, res) => {
    if (err) return console.error(err);
    console.log('mongo res: ', res);
  });

  console.log('mongo: ', temp);

  res.render('peoples', { dadosTemp: req.dadosTemp });
});

module.exports = router;
