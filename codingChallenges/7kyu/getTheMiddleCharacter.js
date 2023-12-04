// You are going to be given a word. Your job is to return the middle character of the word. 
//If the word's length is odd, return the middle character. If the word's length is even, 
//return the middle 2 characters.

// #Examples:

  // Kata.getMiddle("test") should return "es"

  // Kata.getMiddle("testing") should return "t"

  // Kata.getMiddle("middle") should return "dd"

  // Kata.getMiddle("A") should return "A"

// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 
//in some test cases due to an error in the test cases). You do not need to test for this. 
//This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

//my solution
function getMiddle(s) {
    let length = s.length;
  
    if (length < 2) {
      return s;
    } else if (length % 2 === 0) {
      for (let i = 0; i < length; i++) {
        if (i === length / 2 - 1) {
          return s[i] + s[i + 1];
        }
      }
    } else {
      for (let i = 0; i < length; i++) {
        if (i === Math.floor(length / 2)) {
          return s[i];
        }
      }
    }
  }
  
  console.log(getMiddle('hello'))
  console.log(getMiddle('supernova'))
  console.log(getMiddle('saturn'))
  
//other solutions

//1.
function getMiddle(s) {
    let length = s.length;
    
    if (length < 2) {
      return s;
    } else if (length % 2 === 0) {
      let middleIndex = length / 2;
      return s[middleIndex - 1] + s[middleIndex];
    } else {
      let middleIndex = Math.floor(length / 2);
      return s[middleIndex];
    }
  }
  
//2.
function getMiddle(s)
{
  let middle = Math.floor(s.length/2);
  
  return s.length % 2 === 0
        ? s.slice(middle-1, middle+1)
        : s.slice(middle, middle+1); 
}