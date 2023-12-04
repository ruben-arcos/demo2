//DESCRIPTION
    // There was a test in your class and you passed it. Congratulations!
    // But you're an ambitious person. You want to know if you're better than the average student in your class.

    // You receive an array with your peers' test scores. Now calculate the average and compare your score!

    // Return True if you're better, else False!

    // Note:
    // Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//my solution

// Declare a variable called `avgGrade` and initialize it to undefined.
let avgGrade = undefined;

// Define a function called `betterThanAverage`. This function takes two arguments: `classPoints` and `yourPoints`.
function betterThanAverage(classPoints, yourPoints) {

  // Calculate the average grade of the class by using the `reduce()` method. The `reduce()` method takes two arguments: a function and an initial value. The function is called repeatedly, with the current sum and the next element of the array as its arguments. The initial value is used as the first argument to the function the first time it is called. In this case, the function adds the current point to the sum. The initial value is undefined, so the sum will start at 0.
  avgGrade = classPoints.reduce((sum, point) => sum + point) / classPoints.length;

  // Compare your points to the average grade. If your points are higher than the average grade, return true. Otherwise, return false.
  if (yourPoints > avgGrade) {
    return true;
  } else {
    return false;
  }
}

// Call the `betterThanAverage()` function with the arguments `[90,89,68,70,79,94,88,78,69]` and 93.
console.log(betterThanAverage([90,89,68,70,79,94,88,78,69], 93));

// Log the value of the `avgGrade` variable.
console.log(avgGrade);


//1.
function betterThanAverage(classPoints, yourPoints) {
    // This function takes two arguments: `classPoints` and `yourPoints`.
    // `classPoints` is an array of grades for the class.
    // `yourPoints` is your grade.
  
    // Calculate the average grade of the class by using the `reduce()` method.
    // The `reduce()` method takes two arguments: a function and an initial value.
    // The function is called repeatedly, with the current sum and the next element of the array as its arguments.
    // The initial value is used as the first argument to the function the first time it is called.
    // In this case, the function adds the current point to the sum.
    // The initial value is 0, so the sum will start at 0.
    const avgGrade = classPoints.reduce((sum, point) => sum + point, 0);
  
    // Compare your points to the average grade.
    // If your points are higher than the average grade, return true.
    // Otherwise, return false.
    return yourPoints > avgGrade;
  }
  