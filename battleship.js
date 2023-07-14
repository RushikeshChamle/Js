var location1 = 4;
var location2 = 5;
var location3 = 6;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk === false) {
    guess = prompt("Ready, aim, fire! (Enter a number between 0-6)");

    if (guess < 0 || guess > 6) {
        alert("Please enter a number between 0-6");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("HIT!");

            if (hits === 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("MISS!");
        }
    }
}

alert("It took you " + guesses + " guesses to sink the battleship.");
