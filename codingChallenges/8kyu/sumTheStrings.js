// DESCRIPTION:
    // Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

    // Example: (Input1, Input2 -->Output)

        // "4",  "5" --> "9"
        // "34", "5" --> "39"
        // "", "" --> "0"
        // "2", "" --> "2"
        // "-5", "3" --> "-2"

    // Notes:
        // If either input is an empty string, consider it as zero.
        // Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

//my solution
function sumStr(a, b) {
     let sum = Number(a) + Number(b);
          
    if (a === 0 || b === 0) {
      return '0';
      }
     return sum.toString();
     }

console.log(sumStr('2', '5')) 
console.log(sumStr("34", "5"))
console.log(sumStr("", ""))

        //other solutions

//1. 
function sumStr(a,b) {
     return String(Number(a)+Number(b));
     }

 //2.
function sumStr(a, b) {
  return ((parseInt(a) || 0) + (parseInt(b) || 0)).toString();
}

