const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const resetButton = document.querySelector('#reset');
const spanOne = document.querySelector('#one');
const spanTwo = document.querySelector('#two');
const playto = document.querySelector('#playto');

let p1score = 0;
let p2score = 0;
let winningScore = 5;
let isGameOver = false;

p1button.addEventListener('click', function () {
	if (!isGameOver) {
		p1score += 1;
		if (p1score === winningScore) {
			isGameOver = true;
			spanOne.classList.add('winner');
			spanTwo.classList.add('loser');
		}
		spanOne.innerText = p1score;
	}
});

p2button.addEventListener('click', function () {
	if (!isGameOver) {
		p2score += 1;
		if (p2score === winningScore) {
			isGameOver = true;
			spanTwo.classList.add('winner');
			spanOne.classList.add('loser');
		}
		spanTwo.innerText = p2score;
	}
});

playto.addEventListener('change', function () {
	winningScore = parseInt(this.value);
	reset();
});

resetButton.addEventListener('click', reset);

function reset() {
	isGameOver = false;
	p1score = 0;
	p2score = 0;
	spanOne.innerText = p1score;
	spanTwo.innerText = p2score;
	spanOne.classList.remove('winner', 'loser');
	spanTwo.classList.remove('winner', 'loser');
}
