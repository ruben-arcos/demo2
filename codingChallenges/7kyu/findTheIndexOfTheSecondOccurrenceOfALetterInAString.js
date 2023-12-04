//In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

// Examples:

// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1
// Good luck ;) And don't forget to rate this Kata if you liked it.

//my solution
function secondSymbol(s, symbol) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === symbol) {
      count++;
      if (count === 2) {
        return i;
      }
    }
  }
  return -1;
}

console.log(secondSymbol("Hello world!!!", "l"));
console.log(secondSymbol("bob has a new car", "a"));
console.log(secondSymbol('Hello world!!!', 'B'))



