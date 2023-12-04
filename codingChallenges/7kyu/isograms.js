// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

  // isIsogram "Dermatoglyphics" = true
  // isIsogram "moose" = false
  // isIsogram "aba" = false


//my solution
  function isIsogram(str) {
    // Convert the string to lowercase
    str = str.toLowerCase();
  
    // Split the string into an array of characters and check if every character satisfies the condition
    return str.split('').every(function(letter, index, array) {
      // Check if the current letter's index is the same as the first occurrence of the letter
      return array.indexOf(letter) === index;
    });
  }
  
  //other solutions
  //1.
  function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

  //2.
  function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }

  //EXPLANATION

// - `!`: The `!` operator negates the result of the regular expression. So if the regular expression matches, it will return `false`, and if it doesn't match, it will return `true`. In other words, it checks for the absence of repeating characters.

// - `/(\w).*\1/i`: This is the regular expression pattern that matches repeating characters. Let's break it down further:
    //   - `(\w)`: This is a capturing group that matches any word character (letter, digit, or underscore). It captures the first occurrence of a character.
    //   - `.*`: This matches any number of characters (including other characters and spaces) between the first occurrence and the repeated occurrence.
    //   - `\1`: This is a backreference to the first captured group (`(\w)`). It matches the same character as the first occurrence captured by the group.
    //   - `/i`: This is the flag for case-insensitive matching, which means it ignores differences in letter case.

// - `.test(str)`: The `test()` method of the regular expression object is called on the input string `str`. It returns `true` if the regular expression matches any part of the string and `false` otherwise.

// So, in summary, the function uses a regular expression to test if the input string contains any repeating characters. If there are no repeating characters (i.e., it's an isogram), the regular expression doesn't match, and the function returns `true` (negated `false`). If there are repeating characters, the regular expression matches, and the function returns `false` (negated `true`).

// Note: The regular expression approach relies on the backreference `\1` to match repeated characters. It's a concise and powerful way to check for repeating patterns in strings using regular expressions.