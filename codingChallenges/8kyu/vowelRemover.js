//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}

console.log(shortcut("hello")); //output: hll
console.log(shortcut("watermelon")); //output: wtrmln
console.log(shortcut("barcelona")); //output: brcln

//other solutions
//1.
function shortcut(str) {
  return str
    .split("")
    .filter(function (e) {
      return ["a", "e", "i", "o", "u"].indexOf(e) == -1;
    })
    .join("");
}

//2.
function shortcut(string) {
  let result = "";
  const vowels = {
    a: "alpha",
    e: "echo",
    i: "india",
    o: "oscar",
    u: "uniform",
  };

  for (let i = 0; i < string.length; i++) {
    if (!vowels[string[i]]) {
      result += string[i];
    }
  }

  return result;
}

