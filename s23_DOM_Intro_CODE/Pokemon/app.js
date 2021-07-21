// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let container = document.querySelector('#container');

for (let i = 1; i < 152; i++) {
	const div = document.createElement('div');
	let image = document.createElement('img');
	let span = document.createElement('span');
	image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
	image.id = i;
	span.innerText = `${i}`;
	div.appendChild(image);
	div.appendChild(span);
	container.appendChild(div);
}
