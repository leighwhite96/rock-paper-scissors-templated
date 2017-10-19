var express = require('express');
var router = express.Router();
var generate = require('../public/index.js');
var game = require('../public/index2.js');
var img = require("../public/imagepicker.js");

router.get('/', function(req, res, next) {
  res.render("play",{
    title: "Welcome to Rock, Paper, Scissors"
  });
});

var cScore = 0;
var pScore = 0;
// var sess;

router.post('/',function(req,res,next){
  // sess = req.session;
  // var user = sess.username;


  var playerMove = req.body.playerMove.trim();
  var computerMove = generate();
  var imgsrc = img(playerMove);
  var imgsrc2 = img(computerMove);
  var result = game(playerMove,computerMove);

  if(result == "Congratulations, you win!") {
    pScore++;
  } else if (result == "Sorry, you're a loser! Better luck next time!"){
    cScore++;
  }

  res.render("play",{
    // name: user,
    player: playerMove,
    pic1: imgsrc,
    comp: computerMove,
    pic2: imgsrc2,
    result: result,
    playerScore: pScore,
    dash: " - ",
    computerScore: cScore
  });
});

module.exports = router;
