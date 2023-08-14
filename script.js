let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//This function generates a random number that user and computer are competing to guess
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
