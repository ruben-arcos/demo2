// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"


function warnTheSheep(queue) {
    // Check if the last element of the queue is 'wolf'
    if (queue[queue.length -1 ] === 'wolf') {
        return "Pls go away and stop eating my sheep"
    } else {
        // Find the index of 'wolf' in the queue
        const sheepIndex = queue.indexOf('wolf')
        // Calculate the position of the sheep in danger
        return `Oi! Sheep number ${queue.length - sheepIndex - 1}! You are about to be eaten by a wolf!`
    }
}

console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]))
console.log(warnTheSheep(["sheep", "wolf"]))
console.log(warnTheSheep(["wolf"]))

