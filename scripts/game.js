function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both players!");
    return;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI") {
    return;
  }

  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field!");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  
  const winnerId = checkForGameOver();
  
  if (winnerId !== 0) {
    endGame(winnerId);
  }

  currentRound++; // round check and determine winner.
  switchPlayer();
}

function checkForGameOver() {
  // if (
  //   gameData[0][0] > 0 &&
  //   gameData[0][0] === gameData[0][1] &&
  //   gameData[0][1] === gameData[0][2]
  // ) {
  //   return gameData[0][0];
  // }

  // if (
  //   gameData[1][0] > 0 &&
  //   gameData[1][0] === gameData[1][1] &&
  //   gameData[1][1] === gameData[1][2]
  // ) {
  //   return gameData[1][0];
  // }

  // if (
  //   gameData[2][0] > 0 &&
  //   gameData[2][0] === gameData[2][1] &&
  //   gameData[2][1] === gameData[2][2]
  // ) {
  //   return gameData[2][0];
  // }

  for (let i = 0; i < 3; i++) {
    // by using for loop for row equality
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    // by using for loop for column equality
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
 


// Diagonal: top left to bottom right
if (
  gameData[0][0] > 0 &&
  gameData[0][0] === gameData[1][1] &&
  gameData[1][1] === gameData[2][2]
) {
  return gameData[0][0];
}

  // Diagonal: Bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  // When we don not have a Winner.
  if (currentRound === 9) {
    return -1;
  }
  return 0;

}

function endGame(winnerId) {
  gameOverElement.style.display = 'block';

  if (winnerId > 0) {
    const winnerName = players[winnerId -1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;

  } else  {
    gameOverElement.firstElementChild.textContent = "It's a Draw!";
  }

   
}