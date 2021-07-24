'use strict';

// * Secret Number to be guessed
let secretGuessNumber = Math.trunc(Math.random() * 20 + 1);

// * Changeable variable
let highscore = 0;
let score = 0;

// * Sets Score to any selected number
document.querySelector('.score').textContent = '20';

// * restarts game whenever you press again
restartTheGame();

// ********************** GAME **************************
// ******************************************************
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  setNumberHighOrLowMessage(guessNumber);
  // * if not a Number or empty
  if (!guessNumber) {
    document.querySelector('.message').textContent = '⛔️ No Number';
  } else if (guessNumber < 1 || guessNumber > 20) {
    document.querySelector('.message').textContent =
      '❌ only greater than 0 or less than 20';
  } else {
    // * if a Number
    if (guessNumber === secretGuessNumber) {
      guessedNumber(guessNumber);
      setColorForRightGuess();
    } else {
      const pointsLost = setScoreDown();
      setColorForWrongGuess();
      if (pointsLost === 0) {
        noMorePoints();
      }
    }
  }
});

// ************* Here are the functions *****************
// ******************************************************

// * Sets the background color for a wrongly guessed number briefly to red and then black
function setColorForWrongGuess() {
  document.querySelector('body').style.backgroundColor = '#DC143C';
  setTimeout(function () {
    document.querySelector('body').style.backgroundColor = '#222';
  }, 200);
}

// * Sets the background color for the correctly guessed number to green
function setColorForRightGuess() {
  document.querySelector('body').style.backgroundColor = '#32CD32';
}

// * What should happen if you guess the number correctly
function guessedNumber(guessNumber) {
  document.querySelector('.number').textContent = guessNumber;
  document.querySelector('.message').textContent = '🎉 Correct Number';
  score = Number(document.querySelector('.score').textContent);
  highscore = Number(document.querySelector('.highscore').textContent);
  if (score > highscore) {
    highscore = document.querySelector('.highscore').textContent =
      document.querySelector('.score').textContent;
    highscore = Number(highscore);
  }
  document.querySelector('.guess').disabled = true;
  document.querySelector('.check').disabled = true;
  document.querySelector('.check').style.backgroundColor = '#DC143C';
  document.querySelector('.number').style.width = '30rem';
}

// * Decreases the score by 1 for each incorrectly guessed number.
function setScoreDown() {
  const pointLoos = Number(
    (document.querySelector('.score').textContent =
      document.querySelector('.score').textContent - 1)
  );
  return pointLoos;
}

// * gives message if the number is too low or too high
function setNumberHighOrLowMessage(guessNumber) {
  if (guessNumber < secretGuessNumber) {
    document.querySelector('.message').textContent = '📉 Too low!';
  } else {
    document.querySelector('.message').textContent = '📈 Too high!';
  }
}

// * If click on Again Button
function restartTheGame() {
  document.querySelector('.again').addEventListener('click', function () {
    secretGuessNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'Starting guessing...';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.check').style.backgroundColor = '#eee';
    document.querySelector('.number').style.width = '15rem';
  });
}

// * if Score is 0
function noMorePoints() {
  document.querySelector('.guess').disabled = true;
  document.querySelector('.check').disabled = true;
  document.querySelector('.message').textContent =
    '💥 You lost! Start again...';
  document.querySelector('.check').style.backgroundColor = '#FF4500';
  document.querySelector('body').style.backgroundColor = '#DC143C';
}
