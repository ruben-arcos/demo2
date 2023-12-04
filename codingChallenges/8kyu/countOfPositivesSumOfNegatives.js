//DESCRIPTION

    // Given an array of integers.

    // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

    // If the input is an empty array or is null, return an empty array.

    // Example
     // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//my solution
function countPositivesSumNegatives(input) {
    // Check if the input is empty or null, and return an empty array in that case
    if (!input || input.length === 0) {
      return [];
    }
  
    let sum = 0;
    let count = 0;
  
    // Iterate through the input array
    for (let i = 0; i < input.length; i++) {
      // Check if the current element is positive
      if (input[i] > 0) {
        // Increment the count of positive numbers
        count++; 
      }
      // Check if the current element is negative
      if (input[i] < 0) {
        // Add the negative number to the sum
        sum += input[i]; 
      }
    }
  
    // Return an array with count and sum as elements
    return [count, sum];
  }
  
  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
  // Output: [10, -65]
  
  

//other solutions

//1. 
function countPositivesSumNegatives(input) {
    return !input || !input.length ? [] : [
      input.filter(n => n > 0).length,
      input.filter(n => n < 0).reduce((a, b) => a + b)
    ];
  }

//2.
function countPositivesSumNegatives(input) {
    // Check if input is null or empty array
    if (input === null || input.length < 1) {
         // Return an empty array
      return [];
    }
    
     // Initialize an array to store the count and sum
    let r = [0, 0];
    
    // Iterate over each element in the input array
    input.forEach(function(e) {
      // If the element is greater than 0, increment the positive count (r[0])
      // Otherwise, add the element to the sum (r[1])
      (e > 0) ? r[0]++ : r[1] += e;
    });
    
    // Return the array containing the count and sum
    return r; 
  }
  
// Explanation:
    // - The function `countPositivesSumNegatives` takes an `input` array as a parameter.
    // - It first checks if the `input` is either `null` or an empty array using the condition `input === null || input.length < 1`.
    // - If the condition is true, it means the input is invalid or empty, so it immediately returns an empty array `[]`.
    // - If the input is valid, it initializes an array `r` with two elements `[0, 0]`. The first element represents the count of positive numbers, and the second element represents the sum of negative numbers.
    // - It then uses the `forEach` method to iterate over each element (`e`) in the input array.
    // - For each element, it checks if it is greater than `0` using the ternary operator `(e > 0) ? r[0]++ : r[1] += e`.
    //   - If the element is greater than `0`, it increments the first element of `r` (positive count) by `1`.
    //   - Otherwise, it adds the element to the second element of `r` (sum of negatives).
    // - After iterating over all the elements, it returns the array `r`, which contains the count of positives and the sum of negatives.

    // The code effectively counts the positive numbers and calculates the sum of negative numbers in the input array, and returns the result as an array with two elements.


//  In the code `r[0]` and `r[1]` represent elements of the array `r`.

// In the given code:

    // let r = [0, 0];

// The array `r` is initialized with two elements `[0, 0]`. The first element at index `0` represents the count of positive numbers, and the second element at index `1` represents the sum of negative numbers.

// So, when we encounter a positive number in the input array, we increment `r[0]` by `1` to count the positive numbers. And when we encounter a negative number, we add that number to `r[1]` to calculate the sum of negative numbers.

// By using `r[0]` and `r[1]`, we can store and update the count and sum values separately within the same array `r`. This allows us to keep track of both counts and sums efficiently using a single array.