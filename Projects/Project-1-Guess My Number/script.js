'use strict';

/*
document.querySelector('.message').textContent = '🎉 Correct secretNumber';
document.querySelector('.secretNumber').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess);

	// ! When there is no input
	if (!guess) {
		document.querySelector('.message').textContent = '⛔ No Number!';

		// ! Player Wins
	} else if (guess === secretNumber) {
		document.querySelector('.message').textContent = '🎉 Correct Number!';
		document.querySelector('.number').textContent = secretNumber;

		// ! Changing Styles
		document.querySelector('body').style.backgroundColor = 'hsl(106, 43%, 49%)';
		document.querySelector('.number').style.width = '30rem';

		// ! Input too high
	} else if (guess > secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = '⬆ Too High!';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = '💥 You lost the game!';
			document.querySelector('.score').textContent = 0;
		}

		// ! Input too low
	} else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = '⬇ Too Low!';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = '💥 You lost the game!';
			document.querySelector('.score').textContent = 0;
		}
	}
});

//* Coding Challenge #1

document.querySelector('.again').addEventListener('click', function () {
	// ! Re-assign Variables
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	// ! Reset HTML elements
	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';

	// ! Reset CSS Styles
	document.querySelector('body').style.backgroundColor = 'hsl(0, 0%, 13%)';
	document.querySelector('.number').style.width = '15rem';
});
