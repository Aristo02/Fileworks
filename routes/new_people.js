var express = require('express');
var router = express.Router();
var tasksMongo = require('./../model/tasks')();
import { peopleList } from './../mock/dadosTemp';

/* GET  New People Page. */
router.get('/new_people', function(req, res, next) {
  res.render('new_people');
});

router.post('/new_people', function(req, res, next) {
  console.log('req.body: ', req.body);
  // var peopleTemp = req.body.nome;
  // console.log('peopleTemp: ', peopleTemp);
  var newPeople =  {
    title:  req.body.nome,
    description: req.body.bicc,
    status:  true,
    };
    
    var minhaBatata = new tasksMongo(newPeople);
  minhaBatata.save(function (err, batatoid) {
	  if (err) return console.error(err);
	  console.log(batatoid.title + " chegou aqui.");
	});

  // peopleList.push(newPeople);
  res.status(200).render('new_people');
});

module.exports = router;
