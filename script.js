let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//This function generates a random number that user and computer are competing to guess
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

//This function is called each round to determine which guess is closest to target number
const compareGuesses = (userInput, compInput, target) => {
  if(Math.abs(userInput - target) < Math.abs(compInput - target)){
    return true;
  }else if(Math.abs(userInput - target) > Math.abs(compInput - target)){
    return false;
  }else{
    return true;
  }
};