// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

    // Examples
    // n = 0  ==> [1]        # [2^0]
    // n = 1  ==> [1, 2]     # [2^0, 2^1]
    // n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]


//my solution
function powersOfTwo(n) {
    // Create an empty array to store the results
    let result = [];
  
    // Iterate from 0 to n (inclusive)
    for (let i = 0; i <= n; i++) {
      // Calculate the power of 2 for the current value of i using Math.pow(2, i)
      // and push it to the result array using the push() method
      result.push(Math.pow(2, i));
    }
  
    // Return the result array
    return result;
  }

  //other solutions

  //1.
  function powersOfTwo(n) {
    return Array.from({length: n + 1}, (v, k) => 2 ** k);
  }

  //2.
  function powersOfTwo(n){
    let listOfPowersOfTwo = []
    for (let i = 0; i <= n; i++) {
      listOfPowersOfTwo.push(2 ** i)
    }
    return listOfPowersOfTwo
  }