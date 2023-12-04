// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII 
//values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//my solution
function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }

//other solutions
//1.
function twoSort(s) {
    var last = s.sort()[0];
    var a = last[0];
    for(var i = 1; i < last.length; i++) {
      a += "***" + last[i];
    }
    return a;
  }

//2.
function twoSort (strings) {
    return [...strings]
      .sort()
      .shift()
      .split("")
      .join("***")
  }