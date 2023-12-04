// DESCRIPTION:
    // Simple, given a string of words, return the length of the shortest word(s).

    // String will never be empty and you do not need to account for different data types.


//my solution
function findShort(s){
    // This function takes a string 's' as input
    return Math.min(...s.split(" ").map(s => s.length));
    // The string 's' is split into an array of words using the space character as the delimiter
    // The 'map' function is then used to transform each word in the array to its length
    // The spread operator (...) is used along with the 'Math.min' function to find the minimum length among all the words
    // The minimum length is then returned as the result
  }
  
//other solutions

//1.
function findShort(s){
    // This function takes a sentence 's' as input
    return Math.min.apply(null, s.split(' ').map(w => w.length));
    // The sentence is split into words using spaces as separators
    // Each word is then measured to find its length
    // Finally, the function finds the shortest word length among all the words and returns it
  }

//   Math.min: It is a built-in JavaScript function that returns the smallest number among the given arguments.

//   apply: It is a method that allows us to call a function with a given 'this' value and arguments provided as an array (or an array-like object).

//   null: In the context of apply, it specifies the 'this' value to be used when invoking the function. In this case, null is used because the Math.min function does not require a specific 'this' value.

//   s.split(' '): This code splits the string s into an array of substrings using spaces as separators. It effectively separates the sentence into individual words.

//   .map(w => w.length): This code creates a new array by applying a function to each element of the previous array. In this case, it applies the arrow function (w => w.length) to each word in the array, which returns the length of each word.

//   Math.min.apply(null, ...) is then used to find the minimum value among the lengths of all the words in the array.

  
//2.
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

//const findShort = (s) =>: This defines a function called findShort that takes a parameter s.

// s.split(' '): This splits the string s into an array of words, using spaces as separators.

// .sort((a, b) => b.length - a.length): This sorts the array of words based on the length of each word in descending order. Longer words will appear before shorter words.

// .pop(): This removes and returns the last element (i.e., the shortest word) from the sorted array.

// .length: This retrieves the length of the shortest word.