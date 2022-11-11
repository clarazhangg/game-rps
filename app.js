let playerScore = 0;
let computerScore = 0;

const gameChoices = ["Rock", "Paper", "Scissors"];

let getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[randomNum];
};

console.log(getComputerChoice());
let computerSelection = getComputerChoice();

let playRound = (playerSection, computerSelection) => {
  if (playerSection === "rock" && computerSelection === "paper") {
    return "you lose! Rock no no";
  } else if (playerSection === "paper" && computerSelection === "scissors") {
    return "you lose! Paper no no";
  } else if (playerSection === "scissors" && computerSelection === "rock") {
    return "you lose! scissors no no";
  } else if (playerSection === computerSelection) {
    return "its tie";
  } else {
    return "u won!";
  }
};

// let computerSelection = getComputerChoice();

const rockEl = document.getElementById("rock-el");

rockEl.addEventListener("click", () => {
  console.log("rock");
});
