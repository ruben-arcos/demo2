//DESCRIPTION

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
    // "foefet" is an anagram of "toffee"
    // "Buckethead" is an anagram of "DeathCubeK"

//my solution

    //1. Understand the Problem:
    // The problem states that we need to determine whether two given strings are anagrams of each other. An anagram is formed by rearranging the letters of a word to produce a new word. The comparison should be case-insensitive.

    //2. Plan the Solution:
    // To solve this problem, we can follow these steps:

    // Convert both strings to lowercase to make the comparison case-insensitive.
    // Split both strings into arrays of characters.
    // Sort both arrays.
    // Join the sorted arrays back into strings.
    // Finally, compare the sorted strings to check if they are equal.

    // 3. Implement the Solution:
    var isAnagram = function(test, original) {
        //split both, sort both, check if both sorted are equal
        let sortedTest = test.toLowerCase().split('').sort().join('')
        let sortedOriginal = original.toLowerCase().split('').sort().join('')
        // Compare the sorted strings
        return sortedTest === sortedOriginal
      }

      console.log(isAnagram('foefet', 'toffee'), true)
      console.log(isAnagram('Buckethead', 'DeathCubeK'), true)
      console.log(isAnagram('popsicle', 'popcorn'), false)
      console.log(isAnagram('popsicle', 'popcorn'), false)
    

//other solutions

//1.
// write the function isAnagram
var isAnagram = function(test, original) {
    // Check if the lengths of test and original are different
    if(test.length !== original.length) return false;
    
    // Convert both test and original to lowercase
    test = test.toLowerCase();
    original = original.toLowerCase();
    
    // Create an empty object to store character frequencies
    let obj = {};
    
    // Loop through each character in test
    for(let i = 0; i< test.length; i++) {
        // Check if the character is already a property in obj
        if(obj.hasOwnProperty(test[i])) {
            // If yes, increment the frequency
            obj[test[i]] += 1;
        } else {
            // If not, create a new property with frequency 1
            obj[test[i]] = 1;
        }
    }
    
    // Loop through each character in original
    for(let i = 0; i< original.length; i++) {
        // Check if the character exists as a property in obj
        if(obj.hasOwnProperty(original[i])) {
            // If yes, decrement the frequency
            obj[original[i]] -= 1;
            // If the frequency becomes 0, delete the property
            if(obj[original[i]] === 0) delete obj[original[i]];
        } else {
            // If the character doesn't exist in obj, it's not an anagram
            return false;
        }
    }
    
    // Check if obj has any remaining properties
    // If its length is 0 and its constructor is Object, it's an anagram
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};
