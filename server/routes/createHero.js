var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');

//Nodemon broke this and wasted an hour of my time :/


router.post('/', function (req, res) {
  console.log('Route POST:', req.body);
  var hero = Hero(req.body); //created a hero object that conforms to our hero document that was formed in our model\
  console.log('this is line 9', hero);
  hero.save(function (err) { //save is a function on the document
    if (err) {
      res.sendStatus(500);
      console.log('server did not work:', err);
      return;
    }

    res.sendStatus(201);
    console.log('success server');
  });
});

module.exports = router;
