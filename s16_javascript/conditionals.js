const password = prompt('Please enter a password')

if(password.length>=6) {
    if(password.indexOf(' ')===-1) {
        console.log('Great job! Valid password')
    } else {
        console.log('password cant contain spaces')
    }
    
} else {
    console.log('Password too short')
}