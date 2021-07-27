const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const spanOne = document.querySelector('#one');
const spanTwo = document.querySelector('#two');

let p1score = 0;
let p2score = 0;
let winningScore = 5;
let isGameOver = false;

p1button.addEventListener('click', function () {
	if (!isGameOver) {
	}
	if (p1score !== winningScore) {
		p1score += 1;
		spanOne.innerText = p1score;
	}
});

p2button.addEventListener('click', function () {
	if (p2score !== winningScore) {
		p2score += 1;
		spanTwo.innerText = p2score;
	}
});
