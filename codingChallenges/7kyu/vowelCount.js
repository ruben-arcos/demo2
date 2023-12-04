//DIRECTIONS

//Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//my solution
function getCount(str) {
    // Use the match method with a regular expression /[aeiou]/g to find all vowel matches in the string
    const matches = str.match(/[aeiou]/g);
    // If matches is not null (i.e., if matches were found), return the length of matches
    // Otherwise, return 0
    return matches ? matches.length : 0;
  }
  
  console.log(getCount('Pneumonoultramicroscopicsilicovolcanoconiosis')) //output 20
  console.log(getCount('plex')) //output 1
  console.log(getCount('brrr'))

//EXPLANATION
  
    //   1. The `getCount` function takes a string `str` as input and returns the count of vowels in the string.
    //   2. Inside the function, we use the `match` method with the regular expression `/[aeiou]/g` to find all vowel matches in the string. The `/[aeiou]/` part represents a character class that matches any single vowel character, and the `g` flag ensures that all matches are found, not just the first one.
    //   3. The result of the `match` method is assigned to the `matches` variable. It will be an array of matches if any are found, or `null` if no matches are found.
    //   4. We use a conditional (ternary) operator to check if `matches` is truthy (i.e., not `null`). If it is truthy, we return the length of `matches`, which represents the count of vowels in the string.
    //   5. If `matches` is falsy (i.e., `null`), meaning no vowels were found, we return `0` as the count of vowels in the string.
    
    //   So, this code essentially uses the `match` method with a regular expression to find all vowel matches in the string and returns the count of those matches. It handles the case where no vowels are found by returning `0`.

//other solutions
//1.
function getCount(str) {
    // Use the match method with a regular expression to find all occurrences of vowels in the string.
    // The 'g' flag ensures that it matches all occurrences, and the 'i' flag makes it case-insensitive.
    // If no matches are found, it returns null.
    // The '|| []' part is used to handle the case when there are no matches.
    return (str.match(/[aeiou]/ig) || []).length;
}

  console.log(getCount('friend or foe')) //output 5
  console.log(getCount('you are my sunshine')) //output 7

//2.
function getCount(str) {
    // Split the input string into an array of individual characters
    return str.split('')
        // Use the filter method to create a new array with only the characters that are included in the string "aeiouAEIOU"
        .filter(c => "aeiouAEIOU".includes(c))
        // Return the length of the filtered array, which represents the count of vowels in the string
        .length;
}

console.log(getCount('hello world')); //output 3
console.log(getCount('programming is fun')); //output 5

//EXPLANATION
    // 1. The `getCount` function takes a string `str` as input and returns the count of vowels in the string.
    // 2. Inside the function, we use the `split` method to split the input string into an array of individual characters. This allows us to work with each character separately.
    // 3. We then chain the `filter` method onto the array. The `filter` method creates a new array containing only the elements that satisfy the provided condition. In this case, the condition is defined by the arrow function `c => "aeiouAEIOU".includes(c)`.
    // 4. The arrow function `c => "aeiouAEIOU".includes(c)` checks if the character `c` is included in the string `"aeiouAEIOU"`. If it is included, the function returns `true`, and the character is kept in the filtered array. Otherwise, if it is not included, the function returns `false`, and the character is filtered out.
    // 5. Finally, we retrieve the length of the filtered array by accessing the `length` property at the end. This represents the count of vowels in the original string.

    // So, overall, this code splits the input string into an array, filters out non-vowel characters using the `filter` method and the `includes` method, and returns the count of vowels by getting the length of the filtered array.









