function imgPicker(playerMove) {
  if (playerMove == "Rock") {
    return imgsrc = "images/rock.png"
  } else if (playerMove == "Scissors") {
    return imgsrc = "images/scissors.png"
  } else {
    return imgsrc = "images/paper.png"
  }
}

module.exports = imgPicker;
