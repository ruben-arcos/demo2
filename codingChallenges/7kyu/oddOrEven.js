//DESCRIPTION:
    // Task:
    // Given a list of integers, determine whether the sum of its elements is odd or even.

    // Give your answer as a string matching "odd" or "even".

    // If the input array is empty consider it as: [0] (array with a zero).

    // Examples:
        // Input: [0]
        // Output: "even"

        // Input: [0, 1, 4]
        // Output: "odd"

        // Input: [0, -1, -5]
        // Output: "even"


//my solution
function oddOrEven(array) {
    let sum = 0;
  
    // Iterate over the elements of the array
    for (let i = 0; i < array.length; i++) {
        // Add each element to the sum
      sum += array[i]; 
    }
  
    // Check if the sum is even or odd
    if (sum % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
  

//other solutions

//1. 
function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }

//2.
const oddOrEven = array=>
  array.filter(val=> val&1).length&1 ? `odd` : `even`;