
function computerScore(num,str){
  if(str == "Sorry, you're a loser! Better luck next time!") {
    return num++;
  } else {
    return num;
  }
}

module.exports = computerScore;
