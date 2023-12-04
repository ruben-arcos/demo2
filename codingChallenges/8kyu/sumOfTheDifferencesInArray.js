    // Your task is to sum the differences between consecutive pairs in the array in descending order.

    // Example
        // [2, 1, 10]  -->  9

    // In descending order: [10, 2, 1]
    // Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

    // If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

//my solution
//define a function that takes an arr as input
const sumOfDifferences = arr => arr 
    //Sort the array in descending order
    .sort((numA, numB) => numB - numA)
    // Calculate the differences between consecutive elements
    .map((numA, i) => numA -arr[i + 1] || 0)
    // Sum up all the differences
    .reduce((numA, numB) => numA + numB, 0)

    console.log(sumOfDifferences([1, 2, 10]))


//Explanation
    // 1. The `sumOfDifferences` function takes an array `arr` as input.

    // 2. The array is sorted in descending order using the `sort()` method with a compare function `(numA, numB) => numB - numA`. This sorts the array from highest to lowest.

    // 3. The `map()` method is then used to calculate the differences between consecutive elements. For each element `numA` at index `i`, it subtracts the next element `arr[i + 1]` from `numA` to get the difference. If there is no next element (i.e., at the end of the array), it defaults to 0 using the `||` operator.

    // 4. The resulting array of differences is then passed to the `reduce()` method. The `reduce()` method iterates over the differences and accumulates their sum. It takes a reducing function `(numA, numB) => numA + numB` that adds the current difference `numB` to the accumulated sum `numA`. The initial value for the accumulated sum is 0, specified as the second argument of `reduce()`.

    // 5. Finally, the `console.log()` statement is used to print the result of `sumOfDifferences([1, 2, 10])`.

    // In summary, the code calculates the sum of the differences between consecutive elements in the input array, after sorting it in descending order.

//other solutions

//1.
function sumOfDiffs(arr) {
    if (arr.length==0)
      return 0
    arr.sort((a,b)=>a-b)
    return arr[arr.length-1]-arr[0]
  } 
  
  console.log(sumOfDiffs([-3, 4, 20, -34]))

//2.
const sumOfDiff = a => a.length > 1 ? Math.max(...a) - Math.min(...a) : 0
console.log(sumOfDiffs([-3, 4, 20, -34]))
