var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

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

// var locations = [getRandomNumber(0, 4), getRandomNumber(1, 5), getRandomNumber(2, 6)];
// var guesses = 0;
// var hits = 0;
// var isSunk = false;

// while (!isSunk) {
//   var guess = prompt("Ready, aim, fire! (Enter a number between 0-6)");

//   if (guess === null) {
//     break; // Exit the game if cancel is clicked
//   }

//   var parsedGuess = parseInt(guess);

//   if (isNaN(parsedGuess) || parsedGuess < 0 || parsedGuess > 6) {
//     alert("Please enter a valid number between 0 and 6!");
//     continue; // Ask for another guess
//   }

//   guesses++;

//   if (checkHit(parsedGuess)) {
//     alert("HIT!");
//     hits++;

//     if (hits === locations.length) {
//       isSunk = true;
//       alert("You sank my battleship in " + guesses + " guesses! Congratulations!");
//     }
//   } else {
//     alert("MISS!");
//   }
// }

// if (!isSunk) {
//   alert("Game Over! You quit the game.");
// }

// function checkHit(guess) {
//   for (var i = 0; i < locations.length; i++) {
//     if (guess === locations[i]) {
//       locations.splice(i, 1);
//       return true;
//     }
//   }
//   return false;
// }

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
