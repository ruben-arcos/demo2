//DESCRIPTION

    //Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

    // The output should be two capital letters with a dot separating them.

    // It should look like this:

    // Sam Harris => S.H

    // patrick feeney => P.F



//my solution
function abbrevName(name) {
    //name.charAt(0) retrieves the first character of the name.
    let firstName = name.charAt(0).toUpperCase();
    //name.charAt(name.length - 1) retrieves the last character of the name.
    let lastName = name.charAt(name.indexOf(' ') + 1).toUpperCase();
    //The . is concatenated with the first name and last name using the + operator.
    return firstName + '.' + lastName;
    //The corrected code returns the abbreviated name in the format "X.Y" where X is the first initial of the first name and Y is the first initial of the last name.
}

console.log(abbrevName('John Doe'));   


//other solutions

//1.
const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()

console.log(abbrevName('John Doe'));


//2.
function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }
  console.log(abbrevName('John Doe')); 


//explanation of regex pattern

//To extract the last character of the name "John" using a regular expression:

const name = "John";
const lastLetter = FName.match(/\w$/);

console.log(lastLetter);  

//The regular expression pattern /\w$/ is used to match the last character of the string.
// match() is called on the name string with the regular expression pattern.
// The result will be an array with a single element containing the last character, or null if no match is found.
// The output will be the last character of the name, without the need for [0].
// So, to retrieve the last character using regular expressions, you can modify the pattern to match the last character of the string by using $, and there is no need for [0] when accessing the result.


