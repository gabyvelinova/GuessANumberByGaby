if (guess <= 100 && guess >= 100) {
  if (guess === computerGuess) {
    console.log("You guess it!");
    
    return readline.close();
  } else if (guess < computerGuess) {
    console.log("Too Low!");
    recursiveAsyncReadLine();
  } else if (guess > computerGuess) {
    console.log("Too High!");
    recursiveAsyncReadLine();
  } else {
    console.log("Invalid input! Try again...");
    recursiveAsyncReadLine();
  }
}