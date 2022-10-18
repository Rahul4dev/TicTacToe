// for config of the players elements 
// Position will be before the App.js and game.js files in HTML in order to define first before the game and app runs.

function openPlayerConfig(event) {
    //overlay config  
    editedPlayer = +event.target.dataset.playerId;  // + will make the value in No.
    // changing display to block form none in css // req const 
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
    
}

function closePlayerConfig() {
    // overlay config // changing display back to none when cancelled or clicked outside of overlay.
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error'); // to remove error msg from input invalid.
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    // save player name, validate and display config.
    event.preventDefault();  // it preventDefault behavior of browser event to send to server. This we want to execute here.
    const formData = new FormData(event.target); // blueprint fn for form data.
    const enteredPlayerName = formData.get('playerName').trim(); // remove the  whitespace characters.
    // validation.. add required fields to form in HTML input field. and

    if (!enteredPlayerName) {  // NOT used instead of === "empty string"
        // add error message and style it
        event.target.firstElementChild.classList.add('error'); // we have used DOM structure to get access to the first element of the form element i.e, the div containing form controls. 
        // error message removed by closePlayerConfig function.

        // can be done by alert function but it will show on page, we want to show over the overlay. For that we need to have an Element. <P></P> added b/n div
        // then get access to the element in app.js 
        errorsOutputElement.textContent = 'Please enter a valid player name!';
        return; // return if invalid player name. //empty because we don't give any value to return.

    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data'); // a no. value we get from player dataset.
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName; // here we can store the name of the player but we also need the name during game. req a const. name. which go in app.js

    player[editedPlayer - 1].name = enteredPlayerName; 
    // editedPlayer yield 1 or 2 but index required 0 or 1. 
    // if (editedPlayer === 1){
    //     players[0].name = enteredPlayerName;
    // }else{
    //     players[1].name = enteredPlayerName;
    // }
    
    closePlayerConfig();
}