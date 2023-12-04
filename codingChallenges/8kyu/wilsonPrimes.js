// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then,

// ((P-1)! + 1) / (P * P)
// should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

function amIWilson(p) {
  if (p === 5 || p === 13 || p === 563) {
    return true;
  }
  return false;
}

console.log(amIWilson(5));
console.log(amIWilson(9));
console.log(amIWilson(6));
console.log(amIWilson(563));
