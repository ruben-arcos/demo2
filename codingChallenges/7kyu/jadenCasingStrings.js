//Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010)
//and After Earth (2013). Jaden is also known for some of his philosophy that he delivers
//via Twitter. When writing on Twitter, he is known for almost always capitalizing every
//word. For simplicity, you'll have to capitalize each word, check out how contractions
//are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings
//are actual quotes from Jaden Smith, but they are not capitalized in the same way he
//originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Link to Jaden's former Twitter account @officialjaden via archive.org

//my solution
String.prototype.toJadenCase = function () {
  // This variable will store the Jaden-cased string
  let jaden = "";
  let len = this.length;

  for (let i = 0; i < len; i++) {
    // Use 'charAt' to get each character of the string
    let char = this.charAt(i);

    // Check if the character before the current one is a space or if it's the first character in the string
    if (i === 0 || this.charAt(i - 1) === " ") {
      // If it's the start of a word, capitalize the character and add it to the Jaden-cased string
      jaden += char.toUpperCase();
    } else {
      // If it's not the start of a word, keep the character as it is and add it to the Jaden-cased string
      jaden += char;
    }
  }
  // Finally, return the Jaden-cased string after the loop is done
  return jaden;
};

//other solutions
//1.
String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

//2.
String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
  };