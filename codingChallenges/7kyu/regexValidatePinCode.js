//DESCRIPTION

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
    // "1234"   -->  true
    // "12345"  -->  false
    // "a234"   -->  false

//my solution
function validatePIN (pin) {
    if (isNaN(pin)  || pin.length !== 4 && pin.length !== 6) {
      return false;
    }
    return /^\d+$/.test(pin);
  }

console.log(validatePIN('123'))
console.log(validatePIN('1234'))
console.log(validatePIN('1234a'))
console.log(validatePIN('1234567'))
//other solutions

// Explanation:
    // 1. The function `validatePIN` takes a `pin` as input and checks if it is a valid PIN code.

    // 2. The first condition checks if `pin` is not a number (`isNaN(pin)`) or if its length is not equal to 4 or 6 (`pin.length !== 4 && pin.length !== 6`). If either of these conditions is true, it means the PIN code is invalid, so we return `false`.

    // 3. The second condition uses a regular expression `/^\d+$/` to match the pin against a pattern. The `^\d+$` pattern ensures that the pin contains only digits (`\d`) and covers the entire length of the string from start (`^`) to end (`$`). If the pin matches this pattern, it means it contains only digits and is valid, so we return `true`.

    // 4. If none of the above conditions are met, it means the pin is invalid, so we return `false`.

    // This code checks for the length and digit requirements of a valid PIN code and returns `true` if the PIN is valid and `false` otherwise.

//1. 
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }

//The `validatePIN` function checks if a PIN code is valid. Here's an explanation of how it works:

// 1. `^(\d{4}|\d{6})$`: This is a regular expression pattern that matches either a 4-digit PIN or a 6-digit PIN. 
// - `^` asserts the start of the string.
// - `\d` matches any digit (0-9).
// - `{4}` specifies that the previous pattern (digit) should occur exactly 4 times.
// - `|` is the alternation operator, allowing either the 4-digit pattern or the 6-digit pattern.
// - `{6}` specifies that the previous pattern (digit) should occur exactly 6 times.
// - `$` asserts the end of the string.

// 2. `.test(pin)`: This method is used to test if the provided `pin` matches the regular expression pattern. It returns `true` if there is a match, and `false` otherwise.

// Therefore, the `validatePIN` function checks if the `pin` matches the pattern of either a 4-digit or 6-digit PIN, and returns `true` if it's a valid PIN code and `false` otherwise.

//2.
function validatePIN (pin) {
    //return true or false
      var n = pin.length;
    if( n != 4 && n != 6)
            return false;
    for (var i in pin)
            if (pin[i] > '9' || pin[i] < '0')
                return false;
    return true;
  }

