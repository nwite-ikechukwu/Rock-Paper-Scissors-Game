let result = "";
let score = JSON.parse(localStorage.getItem("score")) || {
  you: 0,
  com: 0,
};
function generateComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}


const playerComputerMoves = document.querySelector(".js-container");
const playerMoveDiv = document.querySelector(".js-rock");
const computerMoveDiv = document.querySelector(".js-scissors");
const resultDiv = document.querySelector(".js-paper");
const scoreBoard = document.querySelector(".js-score-board");
let restartButton = document.querySelector(".js-restart");
let resetButton = document.querySelector(".js-reset");

function playGame(playerMove) {
  const computerMove = generateComputerMove();
  function displayResult() {
    playerComputerMoves.innerHTML = `<div class="move-button">
    <img src="images/${playerMove}.png" class="move-icon no-pointer">
    <img class="shadow" src="images/shadow.png">
    <p>You</p>
    </div>
    <div class="result-board">
      <p>${result}</p>
    </div>
    <div class="move-button">
    <img src="images/${computerMove}.png" class="move-icon no-pointer">
    <img class="shadow" src="images/shadow.png">
    <p>Com</p>
    </div>`;
  }

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
      displayResult();
      updateScore();
      showScore();
    } else if (computerMove === "paper") {
      result = "You lose";
      displayResult();
      updateScore();
      showScore();
    } else if (computerMove === "scissors") {
      result = "You win";
      displayResult();
      updateScore();
      showScore();
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win";
      displayResult();
      updateScore();
      showScore();
    } else if (computerMove === "paper") {
      result = "Tie";
      displayResult();
      updateScore();
      showScore();
    } else if (computerMove === "scissors") {
      result = "You lose";
      displayResult();
      updateScore();
      showScore();
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose";
      displayResult();
      updateScore();
      showScore();
    } else if (computerMove === "paper") {
      result = "You win";
      displayResult();
      updateScore();
      showScore();
    } else if (computerMove === "scissors") {
      result = "Tie";
      displayResult();
      updateScore();
      showScore();
    }
  }

  scoreBoard.classList.add("score-board");
  restartButton.classList.add("restart");
  resetButton.classList.add("restart");
}

function updateScore() {
  if (result === "You win") {
    score.you += 1;
  } else if (result === "You lose") {
    score.com += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
}

function showScore() {
  scoreBoard.innerHTML = `You ${score.you} : ${score.com} Com`;
  restartButton.innerHTML = "Play again";
  resetButton.innerHTML = "Reset score";
}

function playAgain() {
  location.reload(true);
}

function resetScore() {
  score.you = 0;
  score.com = 0;
  localStorage.removeItem("score");
  showScore();
}
