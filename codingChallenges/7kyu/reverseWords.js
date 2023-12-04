// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
    // "This is an example!" ==> "sihT si na !elpmaxe"
    // "double  spaces"      ==> "elbuod  secaps"

//my solution
function reverseWords(str) {
    //1. str.split(' ') is used to split the string into an array of words based on the spaces. This creates an array where each element represents a word.
    //2.  map() is called on the resulting array to iterate over each word.
    // 3. Inside the .map() function, word.split('').reverse().join('') is used to reverse each word.
        //a) word.split('') splits the word into an array of characters 
        //b) .reverse() reverses the order of the characters in the array 
        //c) .join('') joins the characters back together to form the reversed word.
    //4. Finally, .join(' ') is used to join the reversed words back into a string, with spaces between the words.
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
  }
//Now, when you call the reverseWords function with a string as an argument, it will reverse each word while preserving the spaces in the string.
console.log(reverseWords('the boy ran uphill'))

//other solutions
//1.
function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }

//1. The code declares a function named reverseWords that takes a string parameter str.

// 2.  str.split("") splits the string into an array of individual characters.
    //The empty string "" passed as an argument to split indicates that each character should be treated as a separate element in the resulting array.
    // For example, if str is "This is an example!", str.split("") would result in ['T', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', 'n', ' ', 'e', 'x', 'a', 'm', 'p', 'l', 'e', '!'].
// 3. .reverse() reverses the order of elements in the array.
    //It changes the array so that the last element becomes the first, the second-to-last element becomes the second, and so on.
    //Using the previous example, str.split("").reverse() would give ['!', 'e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', 'n', 'a', ' ', 's', 'i', ' ', 's', 'i', 'h', 'T'].
//4. .join("") joins the elements of the array into a single string.
    // The empty string "" passed as an argument to join means that there should be no separator between the elements when they are joined.
    //In this case, it concatenates all the characters together, resulting in a reversed string.
    //Continuing with the previous example, str.split("").reverse().join("") would give the string "!elpmaxe na si sihT".
// 5. .split(" ") splits the reversed string into an array of words based on spaces.
    //The string " " passed as an argument to split indicates that the space character should be used as the separator for splitting the string into words.
    //Using the previous example, str.split(" ") would yield ['!elpmaxe', 'na', 'si', 'sihT'].
//6. .reverse() reverses the order of elements in the array of words.
    //The array of words is changed so that the last word becomes the first, the second-to-last word becomes the second, and so on.
    //With the previous example, str.split(" ").reverse() would give ['sihT', 'si', 'na', '!elpmaxe'].
//7. .join(" ") joins the reversed array of words into a single string with spaces between the words.
    //The space character " " passed as an argument to join means that a space should be used as the separator when joining the words together.
    //Finally, the reversed words are joined to form the desired result.
    //Continuing from the previous example, str.split(" ").reverse().join(" ") would yield the string "sihT si na !elpmaxe".
//8. The function returns the reversed string with each word reversed while preserving the spaces between the words.  


//2.
var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)

//1. The code declares a variable reverseWords using the var keyword and assigns it a function as its value.
    // This syntax var reverseWords = ... declares a variable named reverseWords and initializes it with the provided function.
//2.  The function uses arrow function syntax (s => ...) with a single parameter s, representing the input string.

//3.  s.replace(/\S+/g, v => [...v].reverse().join``) is used to perform the main logic of the function.
    // .replace() is a string method that performs a search-and-replace operation on the string.
    // In this case, the search pattern is specified as /\S+/g.
    // \S+ is a regular expression pattern that matches one or more non-whitespace characters.
    // The g flag indicates that the pattern should be applied globally, matching all occurrences in the string.
// The second argument to .replace() is a callback function that is executed for each match found.
// `v => [...v].reverse().join``` is an arrow function that performs the reversal of each matched word.
    // v represents the matched word passed as an argument to the arrow function.
    // [...v] spreads the characters of the word v into an array.
        // For example, if v is "example", [...v] would result in ['e', 'x', 'a', 'm', 'p', 'l', 'e'].
    // .reverse() reverses the order of the elements in the array.
        // The last element becomes the first, the second-to-last element becomes the second, and so on.
    // `.join`` is used to join the reversed array of characters into a single string.
    // The empty template literal join`` is used, which is equivalent to join("").
    // It joins the characters without any separator, resulting in the reversed word.
//4.  The function returns the result of the .replace() method, which is the original string with each word reversed while preserving the whitespace.

//In summary, this code defines a function reverseWords using arrow function syntax. The function uses the replace() method with a regular expression to find each word in the input string and applies a callback function to reverse each word. The resulting string is returned, where all the words have been reversed while keeping the whitespace intact.

