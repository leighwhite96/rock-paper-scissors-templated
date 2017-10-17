function generateComputerMove(){
  // if (playerMove != "Rock" && playerMove != "Paper" && playerMove != "Scissors") {
  //   console.log("Hey, that's not one of the options! Play the game properly, please :( ");
  // } else {
  //   console.log("You chose " + playerMove + ". Nice choice...");
  // }
  var randomNumber = Math.random();
  if (randomNumber < 0.33) {
    computerMove = "Rock";
  } else if (randomNumber < 0.66) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }
  return computerMove;
}

module.exports = generateComputerMove;
