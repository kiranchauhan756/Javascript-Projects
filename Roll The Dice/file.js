`use strict`

let score0El=document.querySelector("#score--0");
let score1El=document.querySelector("#score--1");
let diceEl=document.querySelector(".dice");
let rollEl=document.querySelector(".btn--roll");
let holdEl=document.querySelector(".btn--hold");
let newEl=document.querySelector(".btn--new");
let player0=document.querySelector(".player--0");
let player1=document.querySelector(".player--1");
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let currentScore,activePlayer,playing,scores;

const init=()=>{  
  score0El.textContent=0;
  score1El.textContent=0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  activePlayer=0;
  playing=true;
  currentScore=0;
  scores=[0,0];
  diceEl.classList.add("hidden");
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();

function switchPlayer(){
  document.querySelector(`#current--${activePlayer}`).textContent=0;
  currentScore=0;
  activePlayer= activePlayer===0?1:0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}

//when click on roll dice button
rollEl.addEventListener('click',function(){
  if(playing){
    const random= Math.floor(Math.random() * 6)+1;
    diceEl.classList.remove("hidden");
    diceEl.src=`dice-${random}.png`;
    if(random!==1){
        currentScore+=random;
        document.querySelector(`#current--${activePlayer}`).textContent=currentScore;

    }else{
       switchPlayer();

    }}
})

holdEl.addEventListener('click',function(){
  if(playing){
    scores[activePlayer]+=currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer];

    if(scores[activePlayer]>=20){
      playing=false;
      diceEl.classList.add("hidden");
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');   
     }
  }
  else{
    switchPlayer();
  }
}
)

newEl.addEventListener('click', init);

