/**
 * Write a function that will check if two given characters are the same case.
        * If either of the characters is not a letter, return -1
        * If both characters are the same case, return 1
        * If both characters are letters, but not the same case, return 0
 
 * Examples
        * 'a' and 'g' returns 1
        * 'A' and 'C' returns 1
        * 'b' and 'G' returns 0
        *  'B' and 'g' returns 0
        *  '0' and '?' returns -1
    
 */

// This function compares two strings, 'a' and 'b', to determine their case similarity.
function sameCase(a, b) {
    // Check if either 'a' or 'b' is not a single alphabet character (A-Z or a-z).
    if (!a.match(/^[A-Za-z]$/) || !b.match(/^[A-Za-z]$/)) {
      // If any of these conditions are met, return -1 to indicate different cases or non-alphabet characters.
      return -1;
    } else if (
      // Check if both 'a' and 'b' are single uppercase letters (A-Z) or single lowercase letters (a-z).
      (a.match(/^[A-Z]$/) && b.match(/^[A-Z]$/)) ||
      (a.match(/^[a-z]$/) && b.match(/^[a-z]$/))
    ) {
      // If both 'a' and 'b' are the same case (either both uppercase or both lowercase), return 1.
      return 1;
    } else {
      // If none of the above conditions are met, it means 'a' and 'b' have mixed cases.
      return 0;
    }
  }
  
console.log(sameCase('C', 'b'))
console.log(sameCase('J', 'W'))
console.log(sameCase('l', 'r'))
console.log(sameCase('n', '?'))


//other solution

// This function compares two strings, 'a' and 'b', to determine their case similarity.

function sameCase(a, b) {
    // Check if either 'a' is all uppercase or all lowercase, or 'b' is all lowercase or all uppercase.
    if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
      // If any of these conditions are met, return -1 to indicate different cases.
      return -1;
    } else if (
      // Check if both 'a' and 'b' are both lowercase or both uppercase.
      (a === a.toLowerCase() && b === b.toLowerCase()) ||
      (a === a.toUpperCase() && b === b.toUpperCase())
    ) {
      // If both are the same case (either both lowercase or both uppercase), return 1.
      return 1;
    } else {
      // If none of the above conditions are met, it means 'a' and 'b' have mixed cases.
      return 0;
    }
  }

console.log(sameCase('Y', '5'))
console.log(sameCase('E', 'o'))
console.log(sameCase('q', 'h'))
console.log(sameCase('G', 'D'))
  