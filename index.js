let num = 0

function generateRandomNumber(){

  return(Math.floor(Math.random() * 10));
}

function differenceFromAnswer(guess, answer){
  answer = differenceFromAnswer()
  if (guess === answer){
    return "Correct"
  } else if (guess > answer){
    return "Too high"
  } else {
    return "Too low"
  }
}