//Americans are odd people: in their buildings, the first floor is actually the ground floor and there 
//is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers 
//move down to take their place. In case of above 13, they move down by two because there are two 
//omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

//Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

//my solution
function getRealFloor(n) {
    // Basements (negatives) stay the same
    if (n <= 0) {
      return n
      // 1st floor is replaced by the ground floor (0)
    } else if (n === 1) {
      return 0
      // Floors below 13 remain unchanged
    } else if (n <= 13) {
      return n-1
        // Floors above 13 move down by two because of the omitted 13th and 1st floors
    } else {
      return n-2
    }
  }

console.log(getRealFloor(15)) //output: 13
console.log(getRealFloor(1)) //output: 0
console.log(getRealFloor(13)) //output: 13

//other solutions
//1.
function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
  }

//2.
const getRealFloor3 = n => {
    if(n >= 13) return n - 2
    if(n > 0) return n - 1
    return n
  }