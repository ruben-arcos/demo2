// DESCRIPTION:
  // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  // Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

  // Note: If the number is a multiple of both 3 and 5, only count it once.

//my solution
function solution(number){
     // Initialize a variable to store the sum of multiples
    var sum = 0;
    
    // Iterate from 1 to (number - 1)
    for(var i = 1;i< number; i++){
        // Check if the current number is a multiple of 3 or 5
      if(i % 3 == 0 || i % 5 == 0){
        // Add the current number to the sum
        sum += i
      }
    }
    // Return the sum of multiples
    return sum;
  }

//other solutions

//1.
function solution(number) {
    // Check if the input number is less than 1
    // If it is, return 0
    // This handles the case when the number is negative or zero
    return number < 1 ? 0 :
      // Create an array of numbers from 0 to (number - 1)
      [...new Array(number).keys()]
      // Filter the array to keep only the numbers that are multiples of 3 or 5
      .filter(n => n % 3 == 0 || n % 5 == 0)
      // Reduce the filtered array to a single value by summing all the elements
      .reduce((a, b) => a + b);
  }
  
  //2.
  function solution(number){
    let sum = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    return sum;
  }
