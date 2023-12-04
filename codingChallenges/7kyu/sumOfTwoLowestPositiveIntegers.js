//Create a function that returns the sum of the two lowest positive
//numbers given an array of minimum 4 positive integers. No floats
//or non-positive integers will be passed.

//For example, when an array is passed like [19, 5, 42, 2, 77], the
//output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

/*

P: Create a function that returns the sum of the two lowest positive 
R: when an array is passed like [19, 5, 42, 2, 77], the 
   output should be 7.
E: console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))
   console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]))
   console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))
P:

*/

//my solution
function sumTwoSmallestNumbers(numbers) {
  const smallestNumsAddition = numbers.sort((a, b) => a - b);
  return smallestNumsAddition[0] + smallestNumsAddition[1];
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));

//other solutions
//1.
var sumTwoSmallestNumbers2 = (numbers) =>
  numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b);
console.log(sumTwoSmallestNumbers2([15, 28, 4, 3, 43]));
console.log(sumTwoSmallestNumbers2([4, 87, 45, 12, 7]));
console.log(sumTwoSmallestNumbers2([23, 71, 33, 82, 5]));

//2.
function sumTwoSmallestNumbers3(numbers) {
  const smallestNums = [
    Math.min(...numbers),
    Math.min(...numbers.filter((num) => num !== Math.min(...numbers))),
  ];
  return smallestNums[0] + smallestNums[1];
}

console.log(sumTwoSmallestNumbers3([15, 28, 10, 34, 43]));
console.log(sumTwoSmallestNumbers3([43, 87, 45, 12, 73]));
console.log(sumTwoSmallestNumbers3([23, 71, 33, 82, 50]));
