let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else if (humanChoice === computerChoice) {
    console.log(`You tied this round!`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }
}

function getComputerChoice(arr) {
  options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let humanChoice = prompt('Enter rock, paper, scissors');
  return humanChoice.trim().toLowerCase();
}

function playGame() {
  i = 1;
  while (i <= 5) {
    console.log(`Round ${i}:`)
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    setTimeout(playRound(humanSelection, computerSelection), 2000);
    i++
  }
  humanScore > computerScore ? console.log("You won the Game"): console.log("The computer won the Game")
}
//playGame()

const playerSelection = document.querySelector(".playerSelection")
const playerScorePara = document.querySelector(".player-score")
const computerScorePara = document.querySelector(".computer-score")
const restart = document.querySelector("#restart")
const body = document.querySelector('body')
restart.addEventListener("click", () => {
  humanScore = 0
  computerScore = 0
  playerScorePara.textContent = "Player Score: "
  computerScorePara.textContent = "Computer Score: "
  if (body.lastChild !== playerSelection){
    body.removeChild(body.lastChild)
  }
})


function updateScore(){
  computerScorePara.textContent = "Computer Score: " + computerScore
  playerScorePara.textContent = "Player Score: " + humanScore
}

playerSelection.addEventListener("click", (event) =>{
  let target = event.target

  switch(target.id){
    case "rock":
      console.log("rock")
      playRound("rock", getComputerChoice())
      updateScore()
      break
    case "paper":
      console.log("paper")
      playRound("paper", getComputerChoice())
      updateScore()
      break
    case "scissor":
      console.log("scissor")
      playRound("scissor", getComputerChoice())
      updateScore()
      break
  }
  if (humanScore == 5){
      const results = document.createElement("p")
      results.textContent = "Player Won!"
      body.appendChild(results)
  }
  else if (computerScore == 5){
    const results = document.createElement("p")
    results.textContent = "Computer Won!"
    body.appendChild(results)
  }
})

