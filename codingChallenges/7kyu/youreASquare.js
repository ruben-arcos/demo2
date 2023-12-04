// A square of squares

  // You like building blocks. You especially like building blocks that are squares.
  //And what you even like more, is to arrange them into a square of square building blocks!

  // However, sometimes, you can't arrange them into a square. Instead, you end up with an 
  //ordinary rectangle! Those blasted things! If you just had a way to know, whether you're 
  //currently working in vain… Wait! That's it! You just have to check if your number of
  //building blocks is a perfect square.

  // Task
  // Given an integral number, determine if it's a square number:

    // In mathematics, a square number or perfect square is an integer  
    //that is the square of an integer; in other words, it is the product 
    //of some integer with itself.

  // The tests will always use some integral number, so don't worry about 
  //that in dynamic typed languages.

  // Examples
    // -1  =>  false
    //  0  =>  true
    //  3  =>  false
    //  4  =>  true
    // 25  =>  true
    // 26  =>  false

//my solution
var isSquare = function(n) {

    if (n < 0) {
       return false;
     }
     var sqrt = Math.sqrt(n)
     return sqrt === Math.floor(sqrt)
}

console.log(isSquare(-1))
console.log(isSquare(3))
console.log(isSquare(25))
      
//other solutions
//1.
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }

  console.log(isSquare(-1))
  console.log(isSquare(7))
  console.log(isSquare(49))

  //2.
  var isSquare = function(n) {
    if (n < 0) {
        // If n is negative, it can't be a perfect square
      return false; 
    }
  
    // Loop from 0 up to n
    for (var i = 0; i <= n; i++) { 
         // Check if the square of the current number i is equal to n
      if (i * i === n) {
        // If it is, n is a perfect square and return true
        return true; 
         // Check if the square of the current number i becomes greater than n
      } else if (i * i > n) {
        // If it does, n is not a perfect square and return false
        return false; 
      }
    }
  // If the loop finishes without finding a perfect square, return false
    return false; 
  };
  
  console.log(isSquare(-12))
  console.log(isSquare(0))
  console.log(isSquare(81))
        
      