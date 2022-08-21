`use strict`;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //if there is no guessber
  if (!guess) {
    displayMessage("🚫No Number");
  }
  //if guess is same as SecretNumber
  else if (secretNumber === guess) {
    displayMessage("🎉🎉Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    displayNumber(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //if guess is wrong
  else if (guess !== secretNumber && score !== 0) {
    displayMessage(guess > secretNumber ? "📈Too High!" : "💹Too low!");

    score--;
    document.querySelector(".score").textContent = score;
  }

  // if the score is 0
  else {
    displayMessage("👎You lose the game!!");
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  guess = Number(document.querySelector(".guess").value);
  displayMessage("Start guessing...");
  displayNumber("❓");
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
