var express = require('express');
var router = express.Router();
var generate = require('../public/index.js');
var game = require('../public/index2.js');
var img = require("../public/imagepicker.js");
var playerScore = require("../public/player-score.js");
var computerScore = require("../public/computer-score.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("play",{
    title: "Welcome to Rock, Paper, Scissors"
  });
});

var cScore = 0;
var pScore = 0;

router.post('/',function(req,res,next){
  var playerMove = req.body.playerMove.trim();
  var computerMove = generate();
  var imgsrc = img(playerMove);
  var imgsrc2 = img(computerMove);
  var result = game(playerMove,computerMove);
  var newpScore = playerScore(pScore, result);
  var newcScore = computerScore(cScore, result);

  res.render("play",{
    title: "Welcome to Rock, Paper, Scissors",
    player: playerMove,
    pic1: imgsrc,
    comp: computerMove,
    pic2: imgsrc2,
    result: result,
    playerScore: newpScore,
    dash: " - ",
    computerScore: newcScore
  });
});

module.exports = router;
