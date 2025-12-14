const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const playerChoices = document.querySelectorAll(".playerChoices");
const cRes = document.querySelector(".cRes");
const pRes = document.querySelector(".pRes");
const result = document.querySelector(".result");

let total = 0;
let playerScore = 0;
let computerScore = 0;

const computerChoices = {
  rock: "../img/rightRock.png",
  paper: "../img/rightPaper.png",
  scissor: "../img/rightScissor.png",
};

const playerChoicesIMG = {
  rock: "../img/leftRock.png",
  paper: "../img/leftPaper.png",
  scissor: "../img/leftScissor.png",
};

function getComputerChoice() {
  let choices = Object.keys(computerChoices);
  let randomize = Math.floor(Math.random() * choices.length);
  let randomChoice = choices[randomize];

  return {
    name: randomChoice,
    src: computerChoices[randomChoice],
  };
}

function checkWinner() {
  if (playerScore === 5) {
    result.textContent = "Player Wins the Game! 🎉";
    playerScore = 0;
    computerScore = 0;
    pRes.textContent = 0;
    cRes.textContent = 0;
    return true;
  }
  if (computerScore === 5) {
    result.textContent = "Computer Wins the Game! 🤖";
    playerScore = 0;
    computerScore = 0;
    pRes.textContent = 0;
    cRes.textContent = 0;
    return true;
  }
  return false;
}

playerChoices.forEach((btn) => {
  btn.addEventListener("click", () => {
    let choices = btn.dataset.choice;
    let computerChoice = getComputerChoice();

    player.src = playerChoicesIMG[choices];
    computer.src = computerChoice.src;
    result.textContent = `player: ${choices} & computer: ${computerChoice.name}`;

    if (choices === computerChoice.name) {
      result.textContent = "Draw!";
      console.log("draw");
    } else if (
      (choices === "rock" && computerChoice.name === "scissor") ||
      (choices === "paper" && computerChoice.name === "rock") ||
      (choices === "scissor" && computerChoice.name === "paper")
    ) {
      pRes.textContent = ++playerScore;
      console.log("player +1");
    } else {
      cRes.textContent = ++computerScore;
      console.log("computer +1");
    }

    checkWinner();
  });
});
