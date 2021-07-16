const todos = [];
let direction = prompt('What would you like to do?');

while (direction !== 'quit') {
	if (direction === 'list') {
		console.log('*****************');
		for (let i = 0; i < todos.length; i++) {
			console.log(`${i}: ${todos[i]}`);
		}
		console.log('*****************');
	} else if (direction === 'new') {
		let newTodo = prompt('What would you like to add?');
		todos.push(newTodo);
		console.log(`${newTodo} added to list`);
		let direction = prompt('What would you like to do next?');
	} else if (direction === 'delete') {
		const deletedToDo = parseInt(
			prompt('Which todo would you like to delete?')
		);
		if (!Number.isNaN(deletedToDo)) {
			todos.splice(deletedToDo, 1);
		} else {
			console.log('Unknown Index');
		}
	}
	direction = prompt('What would you like to do?');
}

console.log('OK, QUIT THE APP');
