// Your task is to make a function that can take any non-negative integer 
//as an argument and return it with its digits in descending order. 
//Essentially, rearrange the digits to create the highest possible number.

// Examples:

  // Input: 42145 Output: 54421

  // Input: 145263 Output: 654321

  // Input: 123456789 Output: 987654321

//my solution
  function descendingOrder(n){
    return Number(String(n).split('').sort().reverse().join(''))
  }

  console.log(descendingOrder(42145));     // Output: 54421
  console.log(descendingOrder(145263));  //Output: 654321

//other solutions

//1.
function descendingOrder(n) {
    // Convert the number to a string and split it into an array of digits
    let digits = String(n).split('');
  
    // Sort the array of digits in descending order
    let sortedDigits = digits.sort((a, b) => b - a);
  
    // Join the sorted digits back into a string and convert it back to a number
    let result = Number(sortedDigits.join(''));
  
    return result;
  }
  
  console.log(descendingOrder(42145));     // Output: 54421
  console.log(descendingOrder(145263));    // Output: 654321
  console.log(descendingOrder(123456789)); // Output: 987654321
  
            
                  