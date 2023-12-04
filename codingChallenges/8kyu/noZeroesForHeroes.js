// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
  // Convert the number to a string
  let numStr = n.toString();

  // Iterate from the end of the string and remove zeros
  for (let i = numStr.length - 1; i >= 0; i--) {
    if (numStr[i] !== '0') {
      // Return the substring of the number with trailing zeros removed
      return numStr.substring(0, i + 1);
    }
  }

  // If the number is zero or has no trailing zeros, return as is
  return numStr;
}

// Test cases
console.log(noBoringZeros(1450));   // Output: "145"
console.log(noBoringZeros(960000)); // Output: "96"
console.log(noBoringZeros(1050));   // Output: "105"
console.log(noBoringZeros(-1050));  // Output: "-105"
console.log(noBoringZeros(0));      // Output: "0" (Zero alone is fine)
