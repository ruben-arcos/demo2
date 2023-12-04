/**
 * Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
 */

function combat(health, damage) {
  // Ensure damage is within the valid range
  if (damage < 0) {
    // If damage is negative, it represents healing, so add it to health
    return health + Math.abs(damage);
  } else {
    // If damage is positive, subtract it from health
    return Math.max(0, health - damage); // Ensure health doesn't go below zero
  }
}

console.log(combat(100, 5)); // output: 95
console.log(combat(92, 8)); // output: 84
console.log(combat(20, 30)); // output: 0

// other solutions

// 1.

function combat3(health, damage) {
  return health < damage ? 0 : health - damage;
}

console.log(combat3(67, 1)); // output: 95
console.log(combat3(2, 8)); // output: 84
console.log(combat3(56, 98)); // output: 0

// 2.
function combat4(health, damage) {
  if (health - damage < 0) {
    return 0;
  } else {
    return health - damage;
  }
}

console.log(combat4(15, 67)); // output: 95
console.log(combat4(100, 0)); // output: 84
console.log(combat4(77, 19)); // output: 0
