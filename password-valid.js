const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("Hello, what is your password?", function(input){
    if (input.length > 9){
        console.log(`Password is good`)
        

    } else (console.log(`Password is not over 9 characters long and does not include a number.`)
)

    reader.close()

}) 

