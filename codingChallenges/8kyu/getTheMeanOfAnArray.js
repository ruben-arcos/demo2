//Return the average of the given array rounded down to its nearest integer.

//The array will never be empty.

//my solution
function getAverage(marks) {
  let arr = 0;
  // Iterate over each mark in the array
  for (let i = 0; i < marks.length; i++) {
    // Add each mark to the sum
    arr += marks[i]
  }
  // Calculate the average by dividing the sum by the number of marks
  let arrAvg = arr / marks.length
  // Round down the average to the nearest integer
  let roundedAvg = Math.floor(arrAvg)
  
  return roundedAvg;
}

console.log(getAverage([80, 90, 70]));  // Output: 80
console.log(getAverage([95, 85, 92, 88]));  // Output: 90
console.log(getAverage([60, 65, 55, 58]));  // Output: 59

//other solutions
//1.
function getAverage2(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}
console.log(getAverage2([80, 90, 70]));  // Output: 80
console.log(getAverage2([95, 85, 92, 88]));  // Output: 90
console.log(getAverage2([60, 65, 55, 58]));  // Output: 59

//2.
function getAverage3(marks){

  // calculates total number of marks
  var total = 0;
  for(var i = 0; i < marks.length; i++){
    total += marks[i];
  }
  
  /* returns total number of marks divided by number of marks
     rounded down to nearest integer */
  return Math.floor(total / marks.length);
}

console.log(getAverage3([80, 90, 70]));  // Output: 80
console.log(getAverage3([95, 85, 92, 88]));  // Output: 90
console.log(getAverage3([60, 65, 55, 58]));  // Output: 59