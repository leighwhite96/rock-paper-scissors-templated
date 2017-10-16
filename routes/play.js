var express = require('express');
var router = express.Router();
var generate = require('../public/index.js');
var game = require('../public/index2.js');
var img = require("../public/imagepicker.js")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("play",{
    title: "Welcome to Rock, Paper, Scissors"
  });
});

router.post('/',function(req,res,next){
  var playerMove = req.body.playerMove.trim();
  var computer = generate();
  var imgsrc = img(playerMove);
  var imgsrc2 = img(computer);
  var result = game(playerMove,computerMove);
  res.render("play",{
    title: "Welcome to Rock, Paper, Scissors",
    player: playerMove,
    pic1: imgsrc,
    comp: computer,
    pic2: imgsrc2,
    result: result
  });
});

module.exports = router;
