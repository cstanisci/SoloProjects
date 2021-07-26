let body = document.querySelector('body');
let button = document.querySelector('button');
let h1 = document.querySelector('h1');

const makeRandColor = () => {
	let r = Math.floor(Math.random() * 255) + 1;
	let g = Math.floor(Math.random() * 255) + 1;
	let b = Math.floor(Math.random() * 255) + 1;
	return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener('click', function () {
	const newColor = makeRandColor();
	body.style.backgroundColor = newColor;
	h1.innerText = newColor;
	kit;
});
