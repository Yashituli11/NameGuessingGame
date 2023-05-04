"use strict";
// document.querySelector(".message").textContent = "Correct Number! ";
// document.querySelector(".number").textContent = "13";
// document.querySelector(".score").textContent = "10";
// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = "23";
// console.log(console.log(document.querySelector(".guess").value));

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highestScore = Number(document.querySelector(".highscore").textContent);
console.log(highestScore);
console.log(secretNumber);
let score = Number(document.querySelector(".score").textContent);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number! ";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (highestScore < score) {
      highestScore = score;
    }
  } else if (guess !== secretNumber) {
    document.querySelector(".message").textContent =
      guess > secretNumber ? "Too high " : "Too low";
    if (score > 1) score--;
    else {
      score = 0;
      document.querySelector(".message").textContent = "You lost the game";
    }
  }
  // else if (guess > secretNumber) {
  //   document.querySelector(".message").textContent = "too high";
  //   if (score > 1) score--;
  //   else {
  //     score = 0;
  //     document.querySelector(".message").textContent = "You lost the game";
  //   }
  // } else if (guess < secretNumber) {
  //   document.querySelector(".message").textContent = "too low";
  //   if (score > 1) score--;
  //   else {
  //     score = 0;
  //     document.querySelector(".message").textContent = "You lost the game";
  //   }
  // }
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highestScore;
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
