/**
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

    ball1 = new Ball();
    ball2 = new Ball("super");

    ball1.ballType     //=> "regular"
    ball2.ballType     //=> "super"
 */

class Ball {
  // Constructor for the Ball class with an optional 'ballType' parameter.
  // If 'ballType' is provided when creating an object, it will be used as the ball type.
  // If 'ballType' is not provided, the default value is "regular."
  constructor(ballType = "regular") {
    // Set the 'ballType' property of the object.
    this.ballType = ballType;
  }
}

const ball1 = new Ball();          // Creates a Ball object with a default 'ballType' of "regular"
const ball2 = new Ball("super");    // Creates a Ball object with 'ballType' set to "super"

console.log(ball1.ballType); // Output: "regular"
console.log(ball2.ballType); // Output: "super"




