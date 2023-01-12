'use strict';

//Select id elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnhold = document.querySelector('.btn--hold')

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

//Rolling dice functionality
btnRoll.addEventListener('click', function(){
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) +1;
    console.log(dice)

    // 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `Images/dice-${dice}.png`
    //3. Check for rolled 1: if true witch to next player
    if (dice !== 1){
        // Add the dice to the current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }else {
        // Switch to next player
        // if active player is 0 then the new active player is 1 else 0
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 :0; 
        // Add a class that deactivates player1
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
        //Add a class that activates player2
    }
})

