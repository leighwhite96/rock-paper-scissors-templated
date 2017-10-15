var express = require('express');
var router = express.Router();
// var moves = require('./index.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("play");
});

router.post('/',function(req,res,next){
  var randomNumber = Math.random();
  var playerMove = req.body.playerMove;
  console.log(playerMove);
    if (playerMove != "Rock" && playerMove != "Paper" && playerMove != "Scissors") {
      console.log("Hey, that's not one of the options! Play the game properly, please :( ");
    } else {
      console.log("You chose " + playerMove + ". Nice choice...");
    }
    if (randomNumber < 0.33) {
      computerMove = "Rock";
      console.log("I chose Rock");
    } else if (randomNumber < 0.66) {
      computerMove = "Paper";
      console.log("I chose Paper");
    } else {
      computerMove = "Scissors";
      console.log("I chose Scissors");
    }

  function RPS(a, b) {
    if (a == b) {
      console.log("It's a Draw!");
    } else if (a == "Rock") {
      if (b == "Scissors") {
        return "Congratulations, you win!";
      } else {
         return "Sorry, you're a loser! Better luck next time!";
      }
    } else if (a == "Scissors") {
      if (b == "Paper") {
        return "Congratulations, you win!";
      } else {
        return "Sorry, you're a loser! Better luck next time!";
      }
    } else if (a == "Paper") {
      if (b == "Rock") {
        return "Congratulations, you win!";
      } else {
        return "Sorry, you're a loser! Better luck next time!";
      }
    }
  }
  // var computerMove = generateComputerMove(playerMove);
  var result = RPS(playerMove,computerMove);
  console.log(result);
  res.render("play",{result: result});
})

module.exports = router;
