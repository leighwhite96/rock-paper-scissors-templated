
function playerScore(num, str) {
if(str == "Congratulations, you win!") {
   return num++;
 } else {
   return num;
 }
}

module.exports = playerScore;
