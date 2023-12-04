//DESCRIPTION
    // Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

    // Examples (Input -> Output)
        // * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
        // * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
        // * [42, 54, 65, 87, 0]             -> min = 0, max = 87
        // * [5]                             -> min = 5, max = 5

    // Notes
        // You may consider that there will not be any empty arrays/vectors.

//my solution
//P: make two functions max and min that receive a list of integers as input
//R: return the largest and lowest nums
//E: min(-39,2,3,4,5) --> -39, max(39,2,3,4,5) --> 5
//P:
var min = function(list){
    //use the reduce method to find min value
    return list.reduce((a,b) => Math.min(a, b))
  }
  
  var max = function(list){
      
      return list.reduce((a,b) => Math.max(a, b))
  }

console.log(min([-30,2,3,4,5])); //output -30
console.log(max([-30,2,3,4,5])); //output 5

//other solutions

//1.
const minimum = (list) => Math.min(...list);
const maximum = (list) => Math.max(...list);

console.log(minimum([-12,4,6,7,2]))  //output -12
console.log(maximum([-12,4,6,7,2]))  //output 7

//2.
var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}

console.log(min([-30,2,3,4,5])); //output -30
console.log(max([-30,2,3,4,5])); //output 5

