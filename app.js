alert(`Let us play a guessing game!`);

var players = {};

var name = prompt(`But first what is your name?`);
alert(`Now that we got that out of the way, let the games begin!`);

function guessNum() {
  var answer = Math.floor(Math.random() * 100) + 1;
  var guesses = 0;
  var previousGuesses = [];
  var num = prompt(`${name}, guess a number between 1-100.`);

  while (num !== null) {
    if (num > answer) {
      alert(`Sorry ${name}, too high! Try again.`);
    } else if (num < answer) {
      alert(`Sorry ${name}, too low! Try again.`);
    } else {
      if (name in players) {
        var previousGuessesCount = players[name].guesses;
        if (guesses < previousGuessesCount) {
          players[name] = {
            guesses: guesses,
            attempts: previousGuesses,
          };
          alert(
            `Congrats ${name}! You got it! It took you ${guesses} guesses and these were your attempts: ${previousGuesses}. Your previous best was ${previousGuessesCount} guesses.`
          );
        } else {
          alert(
            `Congrats ${name}! You got it! It took you ${guesses} guesses and these were your attempts: ${previousGuesses}. Your previous best was ${previousGuessesCount} guesses.`
          );
        }
      } else {
        players[name] = {
          guesses: guesses,
          attempts: previousGuesses,
        };
        alert(
          `Congrats ${name}! You got it! It took you ${guesses} guesses and these were your attempts: ${previousGuesses}.`
        );
      }
      break; // Exit the loop after the correct guess
    }
    guesses++;
    previousGuesses.push(num);
    num = prompt(`${name}, guess a number between 1-100.`);
  }

  if (num === null) {
    alert(`Game canceled. Thank you for playing!`);
  }
}

function playAgain() {
  var str = prompt(
    `Do you want to play again? If so, type "yes". If not, type "no".`
  );

  if (str === "yes") {
    guessNum();
    playAgain();
  } else if (str === "no") {
    alert(`Thank you for playing! Have a great day!`);
  }
}

guessNum();
playAgain();
