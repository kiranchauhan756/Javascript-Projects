let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
let highestScore=0;
let currentScore=100;

function setCurrentScore(){
  currentScore-=10;
  document.querySelector(".setscore").innerHTML= `${currentScore}`;
 
  if(currentScore<10)
    document.getElementById("message").innerHTML = "You lose. Try Again!";

  
}

function setAgain(){
  randomNumber=Math.trunc(Math.random() * 20) + 1;
  console.log('Play again!  '+randomNumber);
  currentScore=100;
  document.getElementById("message").innerHTML = "Start Guessing....";
  document.querySelector("body").style.backgroundColor=" #222";
  document.querySelector(".number").innerHTML="?";
  document.querySelector(".number").style.width="15rem"
  document.querySelector(".setscore").innerHTML=100;
  document.querySelector(".guess").value='';

}

const guessNumber = document.querySelector(".guess");
function checkGuess() {
  let guess=Number(guessNumber.value);
    if(guess>20 || guess<1){
        document.getElementById("message").innerHTML = "Guess number between 1-20";
    }
  else if (randomNumber > guess) {
    document.getElementById("message").innerHTML = "The number is too Low 📉";
     setCurrentScore();
  }
  else if(randomNumber < guess){
    document.getElementById("message").innerHTML = "The number is too High 📈";
     setCurrentScore();
  }
  else{
    document.getElementById("message").innerHTML = "The number is correct! 🎉🎉";
    document.querySelector(".number").textContent=guess;
    document.querySelector(".number").style.width="30rem"
    document.querySelector("body").style.backgroundColor="#60b347";
    if(currentScore>highestScore){
      highestScore=currentScore;
    document.querySelector(".highscore").innerHTML=currentScore;
    }
  }
  
}

function playAgain(){
 setAgain();
}

function resetHighScore(){
  highestScore=0;
  document.querySelector(".highscore").innerHTML=`${highestScore}`;
    setAgain();
}

