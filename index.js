let num = 0

function generateRandomNumber(){

  return(Math.floor(Math.random() * 10));
}

function differenceFromAnswer(guess, answer = generateRandomNumber()){
  if (guess === answer){
    return "Correct"
  } else if (guess > answer){
    return "Too high"
  } else {
    return "Too low"
  }
}

function makeAGuess(input){
  if (Number.isInteger(input)){
    return (differenceFromAnswer(input,))
  } else{
    return "Not an Integer"
  }
}
