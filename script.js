const computerOptions = ["Rock", "Paper", "Scissors"]

function playRock() {
  const playerDisplay = document.getElementById("player-choice");
  const computerDisplay = document.getElementById("computer-choice");
  const message = document.getElementById("message")

  const playerChoice = document.getElementById("rock-button").innerText;
  const randomIndex = Math.floor(Math.random() * computerOptions.length);
  const computerChoice = computerOptions[randomIndex]

  playerDisplay.textContent = `Your Choice: ${playerChoice}`
  computerDisplay.textContent = `Computer's Choice: ${computerChoice}`;

  if ((playerChoice === "Rock" && computerChoice === "Scissors")
  ||(playerChoice === "Paper" && computerChoice === "Rock")
  ||(playerChoice === "Scissors" && computerChoice === "Paper")) {
    message.textContent = `You win! ${playerChoice} beats ${computerChoice}.`
  } else if ((playerChoice === "Scissors" && computerChoice === "Rock")
  ||(playerChoice === "Rock" && computerChoice === "Paper")
  ||(playerChoice === "Paper" && computerChoice === "Scissors")) {
    message.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`
  } else {
    message.textContent = "It's a tie!"
  }
}

function playPaper() {
  const playerDisplay = document.getElementById("player-choice");
  const computerDisplay = document.getElementById("computer-choice");

  const playerChoice = document.getElementById("paper-button").innerText;
  const randomIndex = Math.floor(Math.random() * computerOptions.length);
  const computerChoice = computerOptions[randomIndex]

  playerDisplay.textContent = `Your Choice: ${playerChoice}`
  computerDisplay.textContent = `Computer's Choice: ${computerChoice}`;

  if ((playerChoice === "Rock" && computerChoice === "Scissors")
  ||(playerChoice === "Paper" && computerChoice === "Rock")
  ||(playerChoice === "Scissors" && computerChoice === "Paper")) {
    message.textContent = `You win! ${playerChoice} beats ${computerChoice}.`
  } else if ((playerChoice === "Scissors" && computerChoice === "Rock")
  ||(playerChoice === "Rock" && computerChoice === "Paper")
  ||(playerChoice === "Paper" && computerChoice === "Scissors")) {
    message.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`
  } else {
    message.textContent = "It's a tie!"
  }
}

function playScissors() {
  const playerDisplay = document.getElementById("player-choice");
  const computerDisplay = document.getElementById("computer-choice");

  const playerChoice = document.getElementById("scissors-button").innerText;
  const randomIndex = Math.floor(Math.random() * computerOptions.length);
  const computerChoice = computerOptions[randomIndex]

  playerDisplay.textContent = `Your Choice: ${playerChoice}`
  computerDisplay.textContent = `Computer's Choice: ${computerChoice}`;

  if ((playerChoice === "Rock" && computerChoice === "Scissors")
  ||(playerChoice === "Paper" && computerChoice === "Rock")
  ||(playerChoice === "Scissors" && computerChoice === "Paper")) {
    message.textContent = `You win! ${playerChoice} beats ${computerChoice}.`
  } else if ((playerChoice === "Scissors" && computerChoice === "Rock")
  ||(playerChoice === "Rock" && computerChoice === "Paper")
  ||(playerChoice === "Paper" && computerChoice === "Scissors")) {
    message.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`
  } else {
    message.textContent = "It's a tie!"
  }
}
