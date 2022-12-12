let playerScore = 0;
let computerScore = 0;

const rockEl = document.getElementById("rock-el");
const paperEl = document.getElementById("paper-el");
const scissorsEl = document.getElementById("scissors-el");

const outcomeEl = document.getElementById("outcome-el");
const playerScoreEl = document.getElementById("playerScore-el");
const computerScoreEl = document.getElementById("computerScore-el");

let getComputerChoice = () => {
  const gameChoices = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[randomNum];
};

function playRound(playerSection) {
  let computerSelection = getComputerChoice();
  if (playerSection === computerSelection) {
    outcomeEl.innerHTML += "it's a tie";
  } else if (
    (playerSection === "rock" && computerSelection === "scissors") ||
    (playerSection === "paper" && computerSelection === "rock") ||
    (playerSection === "scissors" && computerSelection === "paper")
  ) {
    outcomeEl.innerHTML += "you won";
    playerScore++;
    playerScoreEl.textContent = `${playerScore}`;
  } else {
    outcomeEl.innerHTML += "you lose";
    computerScore++;
    computerScoreEl.textContent = `${computerScore}`;
  }
}

rockEl.addEventListener("click", () => playRound("rock"));
paperEl.addEventListener("click", () => playRound("paper"));
scissorsEl.addEventListener("click", () => playRound("scissors"));

// function hasLost() {
//   if (playerScore === 5 || computerScore === 5) {
//     restart(true);
//   } else {
//     restart(false);
//   }
// }

// function restart() {
//   playerScore === 0;
//   computerScore === 0;
// }
