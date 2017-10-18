function RPS(playerMove, computerMove) {
  if (playerMove == computerMove) {
    return "It's a Draw!";
  } else if (playerMove == "Rock") {
    if (computerMove == "Scissors") {
      return "Congratulations, you win!";
    } else {
      return "Sorry, you're a loser! Better luck next time!";
    }
  } else if (playerMove == "Scissors") {
    if (computerMove == "Paper") {
      return "Congratulations, you win!";
    } else {
      return "Sorry, you're a loser! Better luck next time!";
    }
  } else if (playerMove == "Paper") {
    if (computerMove == "Rock") {
      return "Congratulations, you win!";
    } else {
      return "Sorry, you're a loser! Better luck next time!";
    }
  }
}

module.exports = RPS;
