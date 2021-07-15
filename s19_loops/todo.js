let todos = [];
 let direction = prompt('What would you like to do?');

 while (direction !== 'quit') {
     if(direction==='new') {
         let newTodo = prompt('What would you like to add?');
         todos.push(newTodo);
         let direction = prompt('What would you like to do next?')
     } else if (direction==='list'){
         for(let todo of todos) {
             console.log(todo);
             let direction = prompt('What would you like to do next?');
         } 
     } else if (direction === 'delete') {
         let deletedToDo = parseInt(prompt('Which todo would you like to delete?'));
         if(!deletedToDo) {
             prompt('Enter a valid number!')
            } else {todos.splice(todos[deletedToDo])}
        } else {
            let direction = prompt('Please enter a valid response')
        }
 }