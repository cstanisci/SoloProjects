const p1 = {
	score: 0,
	button: document.querySelector('#p1button'),
	display: document.querySelector('#one'),
};

const p2 = {
	score: 0,
	button: document.querySelector('#p2button'),
	display: document.querySelector('#two'),
};

const resetButton = document.querySelector('#reset');
const playto = document.querySelector('#playto');
let isGameOver = false;

function updateScores(player, opponent) {
	if (!isGameOver) {
		player.score += 1;
		if (player.score === winningScore) {
			isGameOver = true;
			player.display.classList.add('has-text-success');
			opponent.display.classList.add('has-text-danger');
			player.button.disabled = true;
			opponent.button.disabled = true;
		}
		player.display.innerText = player.score;
	}
}

p1.button.addEventListener('click', function () {
	updateScores(p1, p2);
});

p2.button.addEventListener('click', function () {
	updateScores(p2, p1);
});

playto.addEventListener('change', function () {
	winningScore = parseInt(this.value);
	reset();
});

resetButton.addEventListener('click', reset);

function reset() {
	isGameOver = false;
	for (let p of [p1, p2]) {
		p.score = 0;
		p.display.innerText = p1.score;
		p.display.classList.remove('has-text-success', 'has-text-danger');
		p.button.disabled = false;
	}
}
