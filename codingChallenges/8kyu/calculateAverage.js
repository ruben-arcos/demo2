//DESCRIPTION

    //Write a function which calculates the average of the numbers in a given list.
    //Note: Empty arrays should return 0.

 
 
 //my solution
 function findAverage(array) {
    // Check if the array is empty
    if (array.length === 0) {
      return 0; // Return 0 for empty arrays
    }
  
    let sum = 0; // Variable to store the sum of numbers in the array
  
    // Loop through the array and add each number to the sum
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  
    // Calculate the average by dividing the sum by the length of the array
    return sum / array.length;
  }

  console.log(findAverage([3, 5, 45, 98])); // Output: 37.75

  // Testing with an empty array
  console.log(findAverage([])); // Output: 0
  
  // Testing with a single element
  console.log(findAverage([10])); // Output: 10
  
  // Testing with multiple elements
  console.log(findAverage([1, 2, 3, 4, 5])); // Output: 3

  //other solutions
  //1.

  // PREP Algorithm:
// P - Parameters: The function takes in an array of numbers.
// R - Return: The function returns the average of the numbers in the array or 0 if the array is empty.
// E - Example: For [1, 2, 3, 4, 5], the average is (1 + 2 + 3 + 4 + 5) / 5 = 3.
// P - Plan:

// Step 1: Define the function and take in the 'array' parameter.
function findAverage(array) {
    // Step 2: Check if the array is empty. If it is, return 0.
    if (array.length === 0) {
      return 0;
    }
  
    // Step 3: Calculate the sum of all numbers in the array.
    const sum = array.reduce((total, num) => total + num, 0);
  
    // Step 4: Calculate the average by dividing the sum by the length of the array.
    const average = sum / array.length;
  
    // Step 5: Return the calculated average.
    return average;
  }
  
  // Step 6: Test the function with example inputs.
  console.log(findAverage([1, 2, 3, 4, 5])); // Output: 3
  console.log(findAverage([])); // Output: 0

  //2.
  //In this solution, the reduce() method is used to calculate the sum of all elements in the array. Then, the average is calculated by dividing the sum by the length of the array. The function will return the calculated average value.
function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }

const sum = array.reduce((total, num) => total + num, 0);
  const average = sum / array.length;

  return average;
}
console.log(findAverage([1, 2, 3, 4, 5])); // Output: 3
  console.log(findAverage([])); // Output: 0
 