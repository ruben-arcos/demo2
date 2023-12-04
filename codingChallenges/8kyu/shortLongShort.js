// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

//my solution
function solution(a, b) {
    // This function takes two strings 'a' and 'b' as input
    if (a.length < b.length) {
      // Checks if the length of string 'a' is less than the length of string 'b'
      // If true, it means 'a' is shorter than 'b'
      return a + b + a;
      // Returns a string formed by concatenating 'a', 'b', and 'a' in that order
    } else {
      // If the previous condition is false, it means 'a' is not shorter than 'b'
      return b + a + b;
      // Returns a string formed by concatenating 'b', 'a', and 'b' in that order
    }
  }

console.log(solution(34, 2))

  

//other solutions

//1.
// Using if..., implicit else, compressed syntax
function solution(a, b) {
    if (a.length < b.length) return a + b + a;
    return b + a + b;
}

// Using ternary conditional operator
function solution(a, b) {
    return (a.length < b.length) ? (a + b + a) : (b + a + b);
}

// ES6 arrow function
var solution = (a, b) =>
    (a.length < b.length) ? (a + b + a) : (b + a + b);

//2.
function solution(a, b){
    // This function takes two strings 'a' and 'b' as input
    return a.length > b.length
      ? b.concat(a).concat(b)
      : a.concat(b).concat(a);
    // If the length of string 'a' is greater than the length of string 'b',
    // it returns a new string formed by concatenating 'b', 'a', and 'b' in that order
    // Otherwise, it returns a new string formed by concatenating 'a', 'b', and 'a' in that order
  }
  