const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const resetButton = document.querySelector('#reset');
const spanOne = document.querySelector('#one');
const spanTwo = document.querySelector('#two');
const playto = document.querySelector('#playto');

let p1score = 0;
let p2score = 0;
let isGameOver = false;

p1button.addEventListener('click', function () {
	if (!isGameOver) {
		p1score += 1;
		if (p1score === winningScore) {
			isGameOver = true;
			spanOne.classList.add('has-text-success');
			spanTwo.classList.add('has-text-danger');
			p1button.disabled = true;
			p2button.disabled = true;
		}
		spanOne.innerText = p1score;
	}
});

p2button.addEventListener('click', function () {
	if (!isGameOver) {
		p2score += 1;
		if (p2score === winningScore) {
			isGameOver = true;
			spanTwo.classList.add('has-text-success');
			spanOne.classList.add('has-text-danger');
			p1button.disabled = true;
			p2button.disabled = true;
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
	spanOne.classList.remove('has-text-success', 'has-text-danger');
	spanTwo.classList.remove('has-text-success', 'has-text-danger');
	p1button.disabled = false;
	p2button.disabled = false;
}
