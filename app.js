alert(`Let us play a guessing game!`);

var players = {};

var name = prompt(`But first what is your name?`);
alert(`Now that we got that out of the way, let the games begin!`);


function guessNum() {
    var answer = Math.floor(Math.random() * 100) + 1;
    var guesses = 0;
    var previousGuesses = [];
    var num = prompt(`${name}, guess a number between 1-100.`);

    while (num != answer) {
        if (num > answer) {
            alert(`Sorry ${name}, too high! Try again.`);
        } else if (num < answer) {
            alert(`Sorry ${name}, too low! Try again.`);
        }
        guesses++;
        previousGuesses.push(num);
        num = Number(prompt(`${name}, guess a number between 1-100.`));
    }

    if (name in players) {
        var previousGuessesCount = players[name].guesses;
        if (guesses < previousGuessesCount)  {
            players[name] = {
                guesses: guesses,
                attempts: previousGuesses,
            };
            alert(`Congrats ${name}! You got it! It took you ${guesses} guesses and these were your attempts: ${previousGuesses}. Your previous best was ${previousGuessesCount} guesses.`);
        } else {
            alert(`Congrats ${name}! You got it! It took you ${guesses} guesses and these were your attempts: ${previousGuesses}. Your previous best was ${previousGuessesCount} guesses.`);
        }   
    } else {
        players[name] = {
            guesses: guesses,
            attempts: previousGuesses
        };
        alert(`Congrats ${name}! You got it! It took you ${guesses} guesses and these were your attempts: ${previousGuesses}.`);
    }
}


function playAgain() {

    var str = prompt(`Do you want to play again? If so type "yes" if you do or "no" if you don't`);
        
    if (str === 'yes') {
        guessNum();
        playAgain();
    } else if (str === 'no') {
        alert(`Thank you for playing! Have a great day!`);
    }
}

guessNum();
playAgain();
