function generateComputerMove(){
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
