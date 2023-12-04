// DESCRIPTION:
// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

//my solution
function reverseList(list) {
    return list.reverse();
  }

//other solutions

//1.
const reverseList = list => list.reverse();

//2.
function reverseList(list) {
    // Create an empty array to store the reversed elements
    const array = [];  
    //Start a loop from the last index of the list and iterate backwards until reaching the first index
    for (let i = list.length-1; i >= 0; i--) {
    // Push each element from the original list into the new array in reverse order  
      array.push(list[i]); 
    }
    // Return the reversed array
    return array;  
}
