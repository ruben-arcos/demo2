//altERnaTIng cAsE <=> ALTerNAtiNG CaSe

//Define String.prototype.toAlternatingCase 
//(or a similar function/method such as 
//to_alternating_case/toAlternatingCase/ToAlternatingCase 
//in your selected language; see the initial solution for 
//details) such that each lowercase letter becomes uppercase 
//and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

/*

P: Define String.prototype.toAlternatingCase
R: Each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
E: "hello world".toAlternatingCase() === "HELLO WORLD"
   "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
P:

*/

//my solution
String.prototype.toAlternatingCase = function () {
    // Create an empty string to store the converted characters.
    let str = '';
    
    // Get the length of the input string.
    const len = this.length;
    
    // Loop through each character in the input string.
    for (let i = 0; i < len; i++) {
      // Get the current character at index i.
      const char = this.charAt(i);
      
      // Convert the current character to its uppercase equivalent.
      let upper = char.toUpperCase();
      
      // Convert the current character to its lowercase equivalent.
      let lower = char.toLowerCase();
      
      // Check if the current character is equal to its uppercase version.
      if (char === upper) {
        // If it is uppercase, add its lowercase equivalent to the result string.
        str += lower;
      } else {
        // If it is not uppercase (i.e., it is lowercase or non-alphabetical),
        // add its uppercase equivalent to the result string.
        str += upper;
      }
    }
  
    // Return the final result string containing the converted characters.
    return str;
  };

  console.log("hello world".toAlternatingCase()); // Output: "HELLO WORLD"
  console.log("1a2b3c4d5e".toAlternatingCase()); // Output: "1A2B3C4D5E"
  console.log("String.prototype.toAlternatingCase".toAlternatingCase()); // Output: "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
  
//other solutions
//1.
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

//2.
String.prototype.toAlternatingCase = function () {  
    return this.replace(/[a-zA-Z]/g, function (ltr) {
      return ltr === ltr.toUpperCase() ? ltr.toLowerCase() : ltr.toUpperCase(); 
    });
  };