//DESCRIPTION:
    // Clock shows h hours, m minutes and s seconds after midnight.

    // Your task is to write a function which returns the time since midnight in milliseconds.

        // Example:
        // h = 0
        // m = 1
        // s = 1

        // result = 61000

    // Input constraints:
        // 0 <= h <= 23
        // 0 <= m <= 59
        // 0 <= s <= 59

//my solution 
// Parameters:
// - h: Hours (0 <= h <= 23)
// - m: Minutes (0 <= m <= 59)
// - s: Seconds (0 <= s <= 59)
function past(h, m, s) {
  // Constants for conversion factors
  const millSecsPerSec = 1000; // Milliseconds per second
  const millSecsPerMin = millSecsPerSec * 60; // Milliseconds per minute
  const millSecsPerHour = millSecsPerMin * 60; // Milliseconds per hour
  
  // Calculate the total number of milliseconds since midnight
  return h * millSecsPerHour + m * millSecsPerMin + s * millSecsPerSec;
}

//other solutions

//1.
function past(h, m, s) {
  // Calculate the total number of seconds since midnight
  // - Multiply hours by 3600 (60 seconds * 60 minutes)
  // - Multiply minutes by 60
  // - Add seconds
  // - This gives the total number of seconds
  // Then, multiply the total seconds by 1000 to convert to milliseconds
  return ((h * 3600) + (m * 60) + s) * 1000;
}

//2.
function past(h, m, s){
  var hours = h * 60 * 60 * 1000;
  var minutes = m * 60 * 1000;
  var seconds = s * 1000;
  
  return hours + minutes + seconds;
}

//3.
function past(h, m, s) {
  // Get the current time and set the specified hours, minutes, and seconds
  const setTime = new Date().setHours(h, m, s);
  
  // Get the current time and set it to midnight (0 hours, 0 minutes, 0 seconds)
  const midnight = new Date().setHours(0, 0, 0);
  
  // Calculate the difference between the set time and midnight in milliseconds
  // The difference represents the number of milliseconds that have passed since midnight
  const timeSinceMidnight = setTime - midnight;
  
  // Return the rounded value of the time since midnight in milliseconds
  return Math.round(timeSinceMidnight);
}

//explanation
//New Date() is used to create a new Date object that represents the current date and time. The setHours() method is then called on this Date object to set the specified hours, minutes, and seconds based on the provided arguments h, m, and s.

// Here's a step-by-step explanation:

// new Date() creates a new Date object that represents the current date and time.
// The setHours() method is called on the Date object to modify its hour, minute, and second components. It takes three arguments: h, m, and s, which are the hours, minutes, and seconds respectively that you want to set.
// The setHours() method updates the Date object by setting the hour, minute, and second components to the provided values. It returns the new timestamp representing the updated Date object.
// The returned timestamp is assigned to the setTime variable.
// The setTime variable now holds a timestamp that represents the specified time (h, m, s) on the current date. This timestamp can be used to perform further calculations or comparisons with other timestamps.