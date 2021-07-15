let maximum = parseInt(prompt('Enter the maximum number!'));

while (!maximum) {
    let maximum = parseInt(prompt('Enter a valid number!'));
}

const targetNum = Math.floor(Math.random()* maximum) + 1;