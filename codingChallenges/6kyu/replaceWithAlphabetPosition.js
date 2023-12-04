//Welcome.

  // In this kata you are required to, given a string, replace every letter with its position in the alphabet.

  // If anything in the text isn't a letter, ignore it and don't return it.

  // "a" = 1, "b" = 2, etc.

  // Example
    // alphabetPosition("The sunset sets at twelve o' clock.")
    // Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


//P: if we are given a non letter, then ignore it. if we are given a letter, replace 
//it with its numerical position in the alphabet
//R: should return a string of numbers
//E:


//P: make a function that takes in a string
function alphabetPosition(str) {
    // Create an empty array to store the alphabet positions
    let newArr = [];
  
    // Iterate over each character in the input string
    for (letter of str) {
      // Convert the letter to lowercase and get its Unicode value
      // Subtract 96 to map the value to the alphabet position (a=1, b=2, etc.)
      let num = letter.toLowerCase().charCodeAt(0) - 96;
  
      // Check if the resulting number is greater than 0
      // This ensures that only valid letters are considered
      if (num > 0) {
        // Push the alphabet position into the new array
        newArr.push(num);
      }
    }
  
    // Join the array elements into a string separated by spaces
    return newArr.join(' ');
  }
  
console.log(alphabetPosition('dog'), '4 15 7')
console.log(alphabetPosition('%abcd'), '1 2 3 4')
console.log(alphabetPosition('123'), '')
console.log(alphabetPosition("The sunset sets at twelve o' clock."))

//other solutions

//1.
function alphabetPosition(text) {
    let letterPositions = []

    for (let ltr of text.split('')) {
        let pos = parseInt(ltr, 36) - 9
        if (pos > 0 && pos <= 26) 
        letterPositions.push(pos)
    }
    return letterPositions.join(' ')
}

console.log(alphabetPosition("somewhere over the rainbow."))


//2.
function alphabetPos(char) {
    let newChar = []; 
    
    return char
        // Convert the string to lowercase
        .toLowerCase()
        
        // Split the string into an array of words based on spaces
        .split(' ')
        
        // Convert each word to its corresponding alphabet position
        .map((e) => e.charCodeAt(0) - 96)
        
        // Filter out any positions that are not within the valid range of 1 to 26
        .filter((e) => e > 0 && e <= 26)
        
        // Join the resulting array of positions into a string separated by spaces
        .join(' ');
}

console.log(alphabetPosition("somewhere over the rainbow."));

//EXPLANATION

    // The code takes a string as input and converts it into a string of alphabet positions. Here's a step-by-step explanation:

    // 1. The function `alphabetPosition` is defined, which takes a parameter `char`.

    // 2. An empty array `newChar` is initialized to store the alphabet positions.

    // 3. The input `char` is transformed using a series of array methods:
        //    - `toLowerCase()`: Converts the string to lowercase to handle both uppercase and lowercase letters.
       //    - `split(' ')`: Splits the string into an array of words based on spaces.

    // 4. The `map` method is used to convert each word to its corresponding alphabet position:
       //    - `e.charCodeAt(0)`: Returns the Unicode value of the first character of each word.
      //    - `- 96`: Subtracting 96 from the Unicode value gives the alphabet position, assuming the input consists only of letters.

    // 5. The `filter` method is used to remove any positions that are not within the valid range of 1 to 26.

    // 6. Finally, the `join` method is used to join the resulting array of positions into a string, with each position separated by a space.

    // 7. The resulting string is returned as the output of the `alphabetPosition` function.

    // 8. The `console.log` statement calls the function with the input `"somewhere over the rainbow."` and prints the resulting string of alphabet positions to the console

