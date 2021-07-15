let maximum = parseInt(prompt('Enter the maximum number!'));

while (!maximum) {
    let maximum = parseInt(prompt('Enter a valid number!'));
}

const targetNum = Math.floor(Math.random()* maximum) + 1;

let guess = parseInt(prompt('Enter your first guess?'));

let attempts = 1;
while(guess !==targetNum) {
    if(guess === 'q') break;
    attempts++;
    if(parseInt(guess) > targetNum) {
        guess = prompt('Guess too high.  Try again!');
    } else {
        guess = prompt('Guess too low.  Try again!');
    }
}

console.log(`You got it! It took you ${attempts} tries.`)
