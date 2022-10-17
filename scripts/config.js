// for config of the players elements 
// Position will be before the App.js and game.js files in HTML in order to define first before the game and app runs.

function openPlayerConfig() {
    //overlay config  // changing display to block form none in css // req const 
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';

    //overlay config // changing display back to none when cancelled or clicked outside of overlay.  // req const 
}

function closePlayerConfig() {
    
}