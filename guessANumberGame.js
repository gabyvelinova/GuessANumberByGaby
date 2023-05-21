function guessANumber() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let guessCount = 0;
  let chooseTheDifficultyReadline = function () {
    readline.question(`Choose difficulty: "easy" - 10 tries / "medium" - 7 tries / "hard" - 5 tries`, answer => {
      if (answer != "easy" && answer != "medium" && answer != "hard") {
        console.log('Wrong input! Please pick easy, medium or hard');
        chooseTheDifficultyReadline()
      }

      if (answer === "easy") {
        guessCount = 10;
        recursiveAsyncReadLine()
      } else if (answer === "medium") {
        guessCount = 7;
        recursiveAsyncReadLine()
      } else if (answer === "hard") {
        guessCount = 5;
        recursiveAsyncReadLine()
      }
    })
  }

  let computerGuess = Math.floor(Math.random() * 100);
  let computerGuess2 = Math.floor(Math.random() * 200);
  let guess;
  let proceedToLevel2;

  let askToPlayLevel2Readline = function () {
    readline.question(`Do you want to continue with Level 2?`, answer => {
      proceedToLevel2 = answer;

      if (proceedToLevel2 === "yes") {
        console.log(`You have ${guessCount} tries remaining.`)
        secondLevelReadline()
      } else {
        console.log("Goodbye!")
      }
    })
  }

  let secondLevelReadline = function () {
    readline.question('Guess the number (0-200): ', number => {
      guess = Number(number);

      if (guess > 200) {
        console.log('Invalid input. Try again with a number between 0-200');
        recursiveAsyncReadLine()
      }

      if (guess <= 200 && guess >= 0) {
        if (guess === computerGuess2) {
          console.log("You guess it!");
          console.log("You won the game!");
          return;
        } else if (guess < computerGuess2) {
          console.log("Too Low!");
          guessCount--;

          if (guessCount === 0) {
            console.log(`The correct number is ${computerGuess2}`);
            console.log("No more tries remaining.");
            return;
          }
          console.log(`You have ${guessCount} tries remaining.`);
          secondLevelReadline();
        } else if (guess > computerGuess2) {
          console.log("Too High!");
          guessCount--;

          if (guessCount === 0) {
            console.log(`The correct number is ${computerGuess2}`);
            console.log("No more tries remaining.");
            return;
          }
          console.log(`You have ${guessCount} tries remaining.`);
          secondLevelReadline();
        }
      }
    })

  }

  let recursiveAsyncReadLine = function () {
    readline.question('Guess the number (0-100): ', number => {
      guess = Number(number);

      if (guess > 100) {
        console.log('Invalid input. Try again with a number between 0-200');
        recursiveAsyncReadLine();
      }

      if (guess <= 100 && guess >= 0) {
        if (guess === computerGuess) {
          console.log("You guess it!");
          console.log("You have passed Level 1 successfully!");
          firstLevelPassed = true;
          askToPlayLevel2Readline()
        } else if (guess < computerGuess) {
          console.log("Too Low!");
          guessCount--;

          if (guessCount === 0) {
            console.log(`The correct number is ${computerGuess}`);
            console.log("No more tries remaining.");
            return;
          }
          console.log(`You have ${guessCount} tries remaining.`);
          recursiveAsyncReadLine();
        } else if (guess > computerGuess) {
          console.log("Too High!");
          guessCount--;

          if (guessCount === 0) {
            console.log(`The correct number is ${computerGuess}`);
            console.log("No more tries remaining.");
            return;
          }
          console.log(`You have ${guessCount} tries remaining.`);
          recursiveAsyncReadLine();
        } else {
          console.log("Invalid input! Try again...");
          recursiveAsyncReadLine();
        }
      }
    });
  }
  chooseTheDifficultyReadline();
  recursiveAsyncReadLine();

}

guessANumber();