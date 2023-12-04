// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!


//my solution


// To solve this problem, we can follow these steps:

// Convert the given number to a string so that we can access each digit individually.
// Split the string into an array of characters, representing each digit.
// Map over the array of digits and square each digit by converting it back to a number and multiplying it by itself.
// Join the squared digits back into a single string.
// Convert the resulting string back to a number and return it as the final result.

function squareDigits(num) {
    // Step 1: Convert the resulting string back to a number
   return Number(
     num
       // Step 2: Convert the input number to a string
       .toString() 
       // Step 3: Split the string into an array of individual digits
       .split('') 
       // Step 4: Square each digit by using Math.pow and Number
       .map(x => Math.pow(Number(x), 2)) 
     // Step 5: Join the squared digits back into a single string
       .join('') 
   );
 }
 

//other solutions
//1.
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  }

//2.
function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
  }