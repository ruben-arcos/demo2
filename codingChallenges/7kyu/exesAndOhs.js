// Check to see if a string has the same amount of 'x's and 'o's.
//The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//my solution
function XO(str) {
  let str1 = str.toLowerCase();

  let arr = str1.split("");

  let countX = arr.reduce((acc, curr) => {
    return acc + (curr === "x");
  }, 0);

  let countO = arr.reduce((acc, curr) => {
    return acc + (curr === "o");
  }, 0);

  if (countX === countO) {
    return true;
  }
  return false;
}

//other solutions
//1.
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }

//2.
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

//3.
function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}