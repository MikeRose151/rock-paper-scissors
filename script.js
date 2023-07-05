const computerOptions = ["Rock", "Paper", "Scissors"];

let wins = 0;
let losses = 0;
let ties = 0;

function playRock() {
  const playerDisplay = document.getElementById("player-choice");
  const computerDisplay = document.getElementById("computer-choice");
  const message = document.getElementById("message");
  const gameStats = document.getElementById("game-stats");

  const playerChoice = document.getElementById("rock-button").innerText;
  const randomIndex = Math.floor(Math.random() * computerOptions.length);
  const computerChoice = computerOptions[randomIndex];

  playerDisplay.textContent = `Your Choice: ${playerChoice}`;
  computerDisplay.textContent = `Computer's Choice: ${computerChoice}`;

  if (computerChoice === "Scissors") {
    message.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    wins += 1;
  } else if (computerChoice === "Paper") {
    message.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    losses += 1;
  } else if (computerChoice === playerChoice) {
    message.textContent = "It's a tie!";
    ties += 1;
  }

  gameStats.textContent = `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;
}

function playPaper() {
  const playerDisplay = document.getElementById("player-choice");
  const computerDisplay = document.getElementById("computer-choice");
  const message = document.getElementById("message");
  const gameStats = document.getElementById("game-stats");

  const playerChoice = document.getElementById("paper-button").innerText;
  const randomIndex = Math.floor(Math.random() * computerOptions.length);
  const computerChoice = computerOptions[randomIndex];

  playerDisplay.textContent = `Your Choice: ${playerChoice}`;
  computerDisplay.textContent = `Computer's Choice: ${computerChoice}`;

  if (computerChoice === "Rock") {
    message.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    wins += 1;
  } else if (computerChoice === "Scissors") {
    message.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    losses += 1;
  } else if (computerChoice === playerChoice) {
    message.textContent = "It's a tie!";
    ties += 1;
  }

  gameStats.textContent = `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;
}

function playScissors() {
  const playerDisplay = document.getElementById("player-choice");
  const computerDisplay = document.getElementById("computer-choice");
  const message = document.getElementById("message");
  const gameStats = document.getElementById("game-stats");

  const playerChoice = document.getElementById("scissors-button").innerText;
  const randomIndex = Math.floor(Math.random() * computerOptions.length);
  const computerChoice = computerOptions[randomIndex];

  playerDisplay.textContent = `Your Choice: ${playerChoice}`;
  computerDisplay.textContent = `Computer's Choice: ${computerChoice}`;

  if (computerChoice === "Paper") {
    message.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    wins += 1;
  } else if (computerChoice === "Rock") {
    message.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    losses += 1;
  } else if (computerChoice === playerChoice) {
    message.textContent = "It's a tie!";
    ties += 1;
  }

  gameStats.textContent = `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;
}
