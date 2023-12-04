//Your coworker was supposed to write a simple helper function to capitalize a
//string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work.
//Fix the helper function they wrote so that it works as intended (i.e. make the
//first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed
//to the function. The string lengths will be from 1 character up to 10 characters,
//but will never be empty.

//my solution
function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(capitalizeWord("greece"));
console.log(capitalizeWord("morocco"));
console.log(capitalizeWord("green river"));

//other solutions
//1.
const capitalizeWord2 = (word) =>
  word.replace(/^\w/, (val) => val.toUpperCase());

console.log(capitalizeWord2("memory"));

