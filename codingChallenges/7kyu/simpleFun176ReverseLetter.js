// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

//my solution
function reverseLetter(str) {
  return str.match(/[a-z]/gi, "").reverse().join("");
}

console.log(reverseLetter("krishan"));
console.log(reverseLetter("ultr53o?n"));
console.log(reverseLetter("trfsh2!@n"));

//other solutions
//1.
reverseLetter = (s) =>
  s
    .replace(/[^a-z]/gi, "")
    .split("")
    .reverse()
    .join("");

//2.
function reverseLetter(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i].toLowerCase() === str[i].toUpperCase()) {
      continue;
    }
    reversedString += str[i];
  }
  return reversedString;
}
