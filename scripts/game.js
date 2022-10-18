// show game board, show cube fields, show player chance, switch player after every chance, enter options (X,O)

function startNewGame() {   // show game after validation of player names
    
    if (player[0].name === '' || player[1].name === ''){  // OR operator for both player
        alert('Please set the player names');
        return;
    }
    
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';  // after we store player data.

}

function switchPlayer() {   // switch player after every chance
   if (activePlayer === 0){
    activePlayer = 1;
   }  else  {
    activePlayer = 0;
   } 
   activePlayerNameElement.textContent = players[activePlayer].name;
}


function selectGameField(event) {   // show  game field with options

    if (event.target.tagName !== 'LI') {   // to prevent the gap input click
        return;
    }

    
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;
  
    if (gameData[selectedRow][selectedColumn] > 0) {
      alert('Please select an empty field!');
      return;
    }
  
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');
  
    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    console.log(gameData);
  
}