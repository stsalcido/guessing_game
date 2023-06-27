var number = Math.floor(Math.random() * 100 + 1);
var tries = 0;

function newGame() {
    number = Math.floor(Math.random() * 100 + 1);
    document.getElementById("guess").focus();
    document.getElementById("guess").select();
    tries = 0;
}

function checkGuess() {
    var guessInput = document.getElementById("guess");
    var guess = guessInput.value;
    var msg = "";
    tries++;

    if (guess > number) {
        msg = guess + " was too high. Try again.";
    } else if (guess < number) {
        msg = guess + " was too low. Try again.";
    } else {
        msg = guess + " was the number! You win!";
        msg += " Try a new game?";
        msg += " You won in " + tries + " tries.";

        var scoreboard = document.getElementById("scoreboard");
        scoreboard.innerHTML =
            "You guessed " + guess + " in " + tries + " tries. <br>" +
            scoreboard.innerHTML;

        newGame();
    }

    var output = document.getElementById("output");
    output.innerHTML = msg;
    
    guessInput.focus();
    guessInput.setSelectionRange(0, guessInput.value.length); // Highlight the entire text
}
