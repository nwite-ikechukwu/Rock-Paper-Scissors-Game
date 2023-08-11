
function generateComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >=0 && randomNumber < 1/3 ) {
    computerMove = 'rock';
  }else if (randomNumber >= 1/3 && randomNumber < 2/3 ) {
    computerMove = 'paper';
  }else if (randomNumber >= 2/3 && randomNumber < 1 ) {
    computerMove = 'scissors';
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = generateComputerMove();
  let result = '';
  const playerMoveDiv = document.querySelector('.js-rock');
  const computerMoveDiv = document.querySelector('.js-scissors');
  const resultDiv = document.querySelector('.js-paper');

  function displayResult() {
    playerMoveDiv.innerHTML = `<img src="images/${playerMove}.png" class="move-icon">
    <p>You</p>`;
    computerMoveDiv.innerHTML = `<img src="images/${computerMove}.png" class="move-icon">
    <p>Com</p>`;
    resultDiv.innerHTML = `<div class="result-board">${result}</div>`;
  }
  
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
      displayResult();
    }else if (computerMove === 'paper') {
      result = 'You lose';
      displayResult();
    }else if (computerMove === 'scissors') {
      result = 'You win';
      displayResult();
    }
  }
}