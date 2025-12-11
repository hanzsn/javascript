const playerChoice = document.querySelector(".playerChoice");
const computerChoice = document.querySelector(".compChoice");
const img = document.querySelectorAll(".img");

let total = 5;
let player = 0;
let computer = 0;

const playerImages = {
  rock: "../img/leftRock.png",
  paper: "../img/leftPaper.png",
  scissor: "../img/leftScissor.png",
};

const computerImages = {
  rock: "../img/rightRock.png",
  paper: "../img/rightPaper.png",
  scissor: "../img/rightScissor.png",
};

const getComputerChoice = function () {
  const keys = Object.keys(computerImages);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomNum = keys[randomIndex];

  return {
    name: randomNum,
    src: computerImages[randomNum],
  };
};

img.forEach((choices) => {
  choices.addEventListener("click", () => {
    const computerChose = getComputerChoice();
    const choice = choices.dataset.choice;
    switch (choice) {
      case "rock":
        computerChoice.src = computerChose.src;
        playerChoice.src = playerImages.rock;
        if (choice === "rock" && computerChose.name === "scissor") {
          player += 1;
          alert(`player score: ${player}`);
        } else if (choice === "rock" && computerChose.name === "paper") {
          computer += 1;
          alert(`computer score: ${computer}`);
        }
        break;
      case "paper":
        computerChoice.src = computerChose.src;
        playerChoice.src = playerImages.paper;
        if (choice === "paper" && computerChose.name === "rock") {
          player += 1;
          alert(`player score: ${player}`);
        } else if (choice === "paper" && computerChose.name === "scissor") {
          computer += 1;
          alert(`computer score: ${computer}`);
        }
        break;
      case "scissor":
        computerChoice.src = computerChose.src;
        playerChoice.src = playerImages.scissor;
        if (choice === "scissor" && computerChose.name === "paper") {
          player += 1;
          alert(`player score: ${player}`);
        } else if (choice === "scissor" && computerChose.name === "rock") {
          computer += 1;
          alert(`computer score: ${computer}`);
        }
        break;
    }

    if (player === total) {
      alert("player wins!");
      player = null;
      computer = null;
    }
    if (computer === total) {
      alert("computer wins!");
      player = null;
      computer = null;
    }
  });
});
