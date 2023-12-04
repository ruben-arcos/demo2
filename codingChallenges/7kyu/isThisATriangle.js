// DESCRIPTION:
    // Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

    // (In this case, all triangles must have surface greater than 0 to be accepted).

//my solution
function isTriangle(a, b, c) {
    // Check if any side is less than or equal to 0
    if (a <= 0 || b <= 0 || c <= 0) {
      return false;
    }
    // Check if the sum of any two sides is less than or equal to the remaining side
    if (a + b <= c || a + c <= b || b + c <= a) {
      return false;
    }
  
    return true;
  }

//other solutions

//1.
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

//2.
function isTriangle(a, b, c) {
    // Find the maximum value among the three sides
    var max = Math.max(a, b, c);

    // Check if the sum of the two smaller sides is greater than the largest side
    // If true, it means a triangle can be formed
    // If false, it means the sides cannot form a triangle
    return a + b + c - max > max;
}

//a + b + c - max: This part calculates the sum of all three sides of the triangle (a, b, and c) and subtracts the maximum side length (max) from it. The purpose is to obtain the sum of the two shorter sides.

// > max: This comparison checks if the sum of the two shorter sides is greater than the longest side (max). If the sum of the two shorter sides is indeed greater than the longest side, it means that a triangle can be formed using the given side lengths. In this case, the expression evaluates to true. Otherwise, if the sum is not greater than the longest side, it means the side lengths cannot form a triangle, and the expression evaluates to false.

