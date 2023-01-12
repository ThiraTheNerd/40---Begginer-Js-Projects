'use strict';

//Select id elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

let scores,currentScore,activePlayer,playing;

    
const init = function(){
    scores =[0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    //Starting conditions
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');
}
init();

//Function to switch players
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Add a class that deactivates player1
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `Images/dice-${dice}.png`;
    //3. Check for rolled 1: if true witch to next player
    if (dice !== 1) {
      // Add the dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      // if active player is 0 then the new active player is 1 else 0
      switchPlayer();
      //Add a class that activates player2
    }
  }
});

//Holding score functionality
btnhold.addEventListener('click', function () {
  //1.Add current score to active player
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if the player score is >= 100
    if (scores[activePlayer] >= 100) {
      //Finish game
      playing = false;
      diceEl.classList.add('hidden')
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    // Else switch to next player
    else {
      switchPlayer();
    }
  }
});

//Restarting the game logic

btnNew.addEventListener('click', init)