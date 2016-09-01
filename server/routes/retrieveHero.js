var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');


router.get('/', function (req, res) {
  Hero.find({}, function(err, heros) { //the empty object will grab everything
      if (err) {
        res.sendStatus(500);
        return;
      }

      res.send(heros);
  });
});


module.exports = router;
