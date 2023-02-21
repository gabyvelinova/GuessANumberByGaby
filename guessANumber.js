function guessANumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);
    let guess;

    let recursiveAsyncReadLine = function () {
        readline.question('Guess the number (0-100): ', number => {
            guess = Number(number);
        });
    }
    recursiveAsyncReadLine();

}

guessANumber();