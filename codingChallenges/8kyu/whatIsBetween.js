//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

    // a = 1
    // b = 4
    // --> [1, 2, 3, 4]

//my solution
function between(a, b) {
  let arr = [];
  
  for (let i = a; i <= b; i++) {
    arr.push(i)
  }
  return arr
}

console.log(between(1, 10));
console.log(between(-5, 5));

//other solutions
//1.
function between(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  
  for (var i = min, arr = []; i <= max; arr.push(i++));
    return arr;
}