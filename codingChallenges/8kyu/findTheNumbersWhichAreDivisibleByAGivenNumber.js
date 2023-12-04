//Complete the function which takes two arguments and returns all numbers which
//are divisible by the given divisor. First argument is an array of numbers and
//the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

//my solution
function divisibleBy(numbers, divisor) {
  let divisible = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      divisible.push(numbers[i]);
    }
  }
  return divisible;
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
console.log(divisibleBy([7, 8, 20, 34, 45, 67, 63, 567], 7));

//other solutions
//1.
function divisibleBy2(numbers, divisor) {
  return numbers.filter((n) => n % divisor === 0);
}

//2.
let divisibleBy3 = (n, d) => n.filter((v) => !(v % d));
