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
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    //TODO: GENERATE A RANDOM DICE ROLL
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //TODO: DISPLAY DICE
    diceEl.classList.remove("hidden");
    diceEl.src = `img/dice-${dice}.png`;

    //TODO: CHECK FOR ROLLED 1: IF TRUE, SWITCH TO NEXT PLAYER
    if (dice !== 1) {
      //TODO: ADD DICE TO THE CURRENT SCORE
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    diceEl.classList.add("hidden");
    //TODO: ADD CURRENT SCORE TO ACTIVE PLAYER'S SCORE
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    //TODO: CHECK IF PLAYER'S SCORE IS >= 100. IF SO, FINISH THE GAME
    if (scores[activePlayer] >= 15) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //TODO: SWITCH TO THE NEXT PLAYER
      switchPlayer();
    }
  }
});
