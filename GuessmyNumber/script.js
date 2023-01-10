"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
};
//Event listener
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When there is no input
  if (!guess) {
    displayMessage("No Number");

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too High !" : "Too Low !";
      displayMessage(guess > secretNumber ? "Too high!" : "Too Low!")
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      score--;
      document.querySelector(".score").textContent = 0;
    }
  }

  //When guess is too high
  // } else if (guess < secretNumber) {
  //   if (score > 1){
  //       document.querySelector(".message").textContent = "Too Low !";
  //       score --;
  //       document.querySelector(".score").textContent = score;
  //   } else {
  //       document.querySelector(".message").textContent = "You lost the game!";
  //       score --;
  //       document.querySelector(".score").textContent = score
  //   }
  // }
});

//Functionality when player wants to play again

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
});
