"use strict";
//SELECTING ELEMENTS
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
//const score0 = document.getElementById("score--0");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const currentEl0 = document.querySelector("#current--0");
const currentEl1 = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//STARTING CONDITIONS
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener("click", function () {
  //1. GENERATING A RANDOM DICE ROLL
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2. DISPLAY DICE
  diceEl.classList.remove("hidden");
  diceEl.src = `img/dice-${dice}.png`;

  //3. CHECK FOR ROLLED 1: IF TRUE, SWITCH TO NEXT PLAYER
  if (dice !== 1) {
    //ADD DICE TO THE CURRENT SCORE
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
