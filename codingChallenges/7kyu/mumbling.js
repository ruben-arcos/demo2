// DESCRIPTION:

    // This time no story, no theory. The examples below show you how to write function accum:

        // Examples:
        // accum("abcd") -> "A-Bb-Ccc-Dddd"
        // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
        // accum("cwAt") -> "C-Ww-Aaa-Tttt"

    // The parameter of accum is a string which includes only letters from a..z and A..Z.


//my solution
function accum(s) {
     // Split the input string into an array of characters
     // Map over each character and its index in the array
     // Convert the current character to uppercase
     // Concatenate it with the lowercase version of the character repeated 'index' times
     // Join the resulting array elements with a hyphen
    return s.split('').map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join('-');
  }

//other solutions
//1.
function accum(str) {
	var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}

//2.
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}