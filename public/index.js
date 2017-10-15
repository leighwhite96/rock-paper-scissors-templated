//
// var computerMove = Math.random(1);
// var playerMove = req.body;

function generateComputerMove(playerMove){
  if (playerMove != "Rock" && playerMove != "Paper" && playerMove != "Scissors") {
    console.log("Hey, that's not one of the options! Play the game properly, please :( ");
  } else {
    console.log("You chose " + playerMove + ". Nice choice...");
  }
  if (computerMove < 0.33) {
    computerMove = "Rock";
    console.log("I chose Rock");
  } else if (computerMove < 0.66) {
    computerMove = "Paper";
    console.log("I chose Paper");
  } else {
    computerMove = "Scissors";
    console.log("I chose Scissors");
  }
  return computerMove;
}

function RPS(playerMove, computerMove) {
  if (playerMove == computerMove) {
    console.log("It's a Draw!");
  } else if (playerMove == "Rock") {
    if (computerMove == "Scissors") {
      console.log("Congratulations, you win!");
    } else {
      console.log("Sorry, you're a loser! Better luck next time!");
    }
  } else if (playerMove == "Scissors") {
    if (computerMove == "Paper") {
      console.log("Congratulations, you win!");
    } else {
      console.log("Sorry, you're a loser! Better luck next time!");
    }
  } else if (playerMove == "Paper") {
    if (computerMove == "Rock") {
      console.log("Congratulations, you win!");
    } else {
      console.log("Sorry, you're a loser! Better luck next time!");
    }
  }
}

module.exports = generateComputerMove;
module.exports = RPS;
