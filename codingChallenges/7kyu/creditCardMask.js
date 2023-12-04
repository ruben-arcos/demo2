//DESCRIPTION

//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
    // maskify("4556364607935616") == "############5616"
    // maskify(     "64607935616") ==      "#######5616"
    // maskify(               "1") ==                "1"
    // maskify(                "") ==                 ""

    // // "What was the name of your first pet?"
    // maskify("Skippy")                                   == "##ippy"
    // maskify("Nananananananananananananananana Batman!") == "##########################

// my solution
//P: write a function that will change ALL but the last characters into '#'
//R: the last four characters to digits
//E: console.log(maskify("123445")) --> ##3445, console.log(maskify("45829475")) --> ####9475
//P: see code block

const maskify = cc => {
    // Return the original string if it has 4 or fewer characters
    if (cc.length <= 4) {
      return cc
      // Create a string of '#' with length equal to the number of characters to mask
    } const maskedPart = '#'.repeat(cc.length - 4);
      // Get the last four characters of the string
      const lastFourDigits = cc.slice(-4);
      // Concatenate the masked part and the last four digits
      return maskedPart + lastFourDigits
  }

  console.log(maskify("123445")); // Output ##3445
  console.log(maskify("1234"));  // Output 1234
  console.log(maskify("2"));  // Output 2

  //explanation 
  //In the code, we first create the maskedPart using '#'.repeat(cc.length - 4), which generates a string of '#' characters with the same length as the number of characters to be masked. This maskedPart represents the portion of the masked credit card number that consists of '#' characters.

// Then, to complete the masked credit card number, we need to add the last four digits of the original credit card number. We use cc.slice(-4) to extract the last four digits from the original credit card number as a separate string.

// Finally, we concatenate the maskedPart and the lastFourDigits using the + operator to produce the final masked credit card number, where the '#' characters represent the masked part, and the last four digits are retained.

// So, the purpose of const lastFourDigits = cc.slice(-4); is to isolate the last four digits separately, allowing us to combine them with the masked part of the credit card number and create the desired output.

//other solutions 

//1.
function maskify(cc) {
    // Extract all characters from the beginning of the string up to the last four characters
    // and replace them with '#' using the replace() method and a regular expression (/./g matches any character)
    // This effectively masks all characters except the last four
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }
//Explanation:

//1. function maskify(cc) {: This defines a function named maskify that takes a parameter cc representing the credit card number to be masked.

//2. cc.slice(0, -4): This extracts a portion of the string cc from the beginning to the fourth-to-last character.
    //The slice() method is used with the start index of 0 and the end index of -4 to exclude the last four characters.
    //This extracts all characters except the last four, which need to be masked.

//3. .replace(/./g, '#'): replaces each character in the extracted portion with '#'.
    //The replace() method is used with a regular expression /./g to match any character in the string.
    //The matched characters are replaced with '#', effectively masking them.
    //+ cc.slice(-4): This concatenates the masked portion with the last four characters of the original string.
    
//4. cc.slice(-4) extracts the last four characters of the string cc.
    //The + operator is used to concatenate the masked portion with the last four characters.

//5. The final result is the masked credit card number, where all characters except the last four are replaced with '#'.
    
//The code preserves the original structure and logic. It slices the string to separate the portion to be masked, replaces each character with '#', and concatenates the masked part with the last four digits.

//2.
// card numbers is good
function maskify(cc) {
    // Extract the last four characters from the string
    // and pad the beginning of the string with '#' using the padStart() method
    // This effectively masks all characters except the last four
    return cc.slice(-4).padStart(cc.length,'#')
  }

//   Explanation:

// function maskify(cc) {: This defines a function named maskify that takes a parameter cc representing the credit card number to be masked.

// cc.slice(-4): This extracts the last four characters from the string cc.

// The slice() method is used with the negative index -4 to extract the last four characters.
// .padStart(cc.length, '#'): This pads the beginning of the string with '#' to match the original length of cc.

// The padStart() method is used to add '#' characters at the beginning of the string.
// It takes two arguments: the target length (in this case, cc.length) and the padding character ('#').
// The final result is the masked credit card number, where all characters except the last four are replaced with '#'.

// The code preserves the original structure and logic. It slices the string to extract the last four characters and then pads the beginning of the string with '#' to match the original length.