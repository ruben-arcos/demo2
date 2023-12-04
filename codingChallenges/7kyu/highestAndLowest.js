//in this little assignment you are given a string of space separated numbers, 
//and have to return the highest and lowest number.

//Examples
  // highAndLow("1 2 3 4 5");  // return "5 1"
  // highAndLow("1 2 -3 4 5"); // return "5 -3"
  // highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes
  // All numbers are valid Int32, no need to validate them.
  // There will always be at least one number in the input string.
  // Output string must be two numbers separated by a single space, and highest number is first.

//P: you are given a string of space separated numbers
//All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.


//R: return the highest and lowest number
// Output string must be two numbers separated by a single space, and highest number is first.

//E: see console.log

//P: pseudo code below
function highAndLow(numbers){
    // Convert the string of numbers into an array of numbers
   let numberArray = numbers.split(' ').map(Number)
   
   // Find the highest and lowest numbers using Math.max and Math.min
   let highestNum = Math.max(...numberArray)
   let lowestNum = Math.min(...numberArray)
   
   // Return the highest and lowest numbers as a string
   return `${highestNum} ${lowestNum}`
  }
  
  console.log(highAndLow('-1 3 7 12 18 25 33 42 52 63 75')) //Output "75 -1"
  console.log(highAndLow("1 2 3 4 5 16 38 73 142 188"));     // Output: "188 1"
  console.log(highAndLow("1 2 -3 4 5 17 9 36 84 -95 31 90 36 43 -5"));    // Output: "90 -95"
  
  
//other solutions
//1.
function hiNLo(numbers){
    let arr = numbers.split(" ").sort((a,b) => b-a);
    // return arr[0] + " " + arr[arr.length-1];
    return `${arr[0]} ${arr[arr.length-1]}`;
  }
  console.log(hiNLo('-1 3 7 12 18 25 33 42 52 63 775')) //Output "75 -1"
  console.log(hiNLo("-5861 2 3 4 5 16 38 73 142 1808")) ///Output "1808 -1"  
  
//2.
function highAndLow(numbers){
    return `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`;
  }