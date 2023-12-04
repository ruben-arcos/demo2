// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

    // Example output:

    // Hello, Mr. Spock

//my solution
function sayHello(name) {
    return `Hello, ${name}`
  }

//other solutions 

//1.
const sayHello = name => `Hello, ${name}`;

//2.
function sayHello(name) {      //Added an actual name to the function
    return 'Hello, ' + name;     //Added '+' operator to combine strings
  }