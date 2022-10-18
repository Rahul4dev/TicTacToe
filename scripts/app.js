// to reach out elements of HTML and store elements in constants for other JS files.

let editedPlayer = 0;       // initially value in player name is 0 which we later change in config.js.
let activePlayer = 0;  // initially active player be the first player. index 0;

const players = [   // player names stored for multiple use
    {
        name: '',
        symbol: 'X',
    },
    {
        name: '',
        symbol: 'O',
    }
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');

const player1EditButtonElement = document.getElementById('player1Edit-btn');
const player2EditButtonElement = document.getElementById('player2Edit-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');
// const gameFieldElement = document.querySelectorAll('#game-board li');
const gameBoardElement = document.querySelectorAll('#game-board li');

player1EditButtonElement.addEventListener('click',openPlayerConfig); // fn in config.js
player2EditButtonElement.addEventListener('click',openPlayerConfig); // defined last to execute last.

cancelConfigBtnElement.addEventListener('click',closePlayerConfig); //
backdropElement.addEventListener('click',closePlayerConfig); // close display of overlay 

formElement.addEventListener('submit',savePlayerConfig);  // fn in config.js


startNewGameBtnElement = document.addEventListener('click',startNewGame); // fn in game.js

// loop for game field

// for (const gameFieldElement of gameFieldElements) {
//     gameFieldElement.addEventListener('click', selectGameField);
// }

gameBoardElement.addEventListener('click',selectGameField);