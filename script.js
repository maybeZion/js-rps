let game = {
  userSelection: -1,
  computerSelection: -1,
  played: 0,
  won: 0
};

const rpsButtons = Array.from(document.querySelectorAll('.rps-choice'));
const resultBox = document.querySelector('#result');
const resetButton = document.querySelector('#reset-button');

rpsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selection = rpsButtons.indexOf(button);
    game.userSelection = selection;
    switch(selection) {
      case 0:
        resultBox.innerHTML = 'Choose rock?';
        break;
      case 1:
        resultBox.innerHTML = 'Choose paper?';
        break;
      case 2:
        resultBox.innerHTML = 'Choose scissors?';
        break;
      default:
        resultBox.innerHTML = 'Click on your choice, then press "Submit".';
    };
  });
});

document.querySelector('#submit-button').addEventListener('click', () => {
  game.computerSelection = Math.floor((Math.random() * 3));
  switch(game.userSelection) {
    case 0:
      if (game.computerSelection == 0) {
        resultBox.innerHTML = 'Tie!';
      } else if (game.computerSelection == 1) {
        resultBox.innerHTML = 'Paper covers rock. You lose.';
      } else {
        resultBox.innerHTML = 'Rock crushes scissors. You win!';
      }
      break;
    case 1:
      if (game.computerSelection == 0) {
        resultBox.innerHTML = 'Paper covers rock. You win!';
      } else if (game.computerSelection == 1) {
        resultBox.innerHTML = 'Tie!';
      } else {
        resultBox.innerHTML = 'Scissors cut paper. You lose.';
      }
      break;
    case 2:
      if (game.computerSelection == 0) {
        resultBox.innerHTML = 'Rock crushes scissors. You lose.';
      } else if (game.computerSelection == 1) {
        resultBox.innerHTML = 'Scissors cut paper. You win!';
      } else {
        resultBox.innerHTML = 'Tie!';
      }
      break;
  }
  if (game.played == 10) {
    game.played = 0;
    game.won = 0;
    document.querySelector('#games-played').innerHTML = 'Games Played: 0';
    resultBox.innerHTML = resultBox.innerHTML + ' Game reset.';
  } else if (resultBox.innerHTML != 'Tie!') {
    game.played += 1;
    document.querySelector('#games-played').innerHTML = 'Games Played: ' + game.played;
  } else {
    return;
  };
  let winCheck = resultBox.innerHTML.indexOf('win');
  if (winCheck > -1) {
    game.won += 1;
    document.querySelector('#games-won').innerHTML = 'Games Won: ' + game.won;
  };
});

resetButton.addEventListener('click', () => {
  game = {
    userSelection: -1,
    computerSelection: -1,
    played: 0,
    won: 0,
  }
  document.querySelector('#games-played').innerHTML = 'Games Played: 0';
  document.querySelector('#games-won').innerHTMl = 'Games Won: 0';
});
