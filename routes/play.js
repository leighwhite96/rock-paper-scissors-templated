var express = require('express');
var router = express.Router();
var generate = require('../public/index.js');
var game = require('../public/index2.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("play",{
    title: "Welcome to Rock, Paper, Scissors"
  });
});

router.post('/',function(req,res,next){
  var playerMove = req.body.playerMove;
  var computer = generate();
  var result = game(playerMove,computerMove);
  res.render("play",{
    title: "Welcome to Rock, Paper, Scissors",
    result: result
  });
});

module.exports = router;
