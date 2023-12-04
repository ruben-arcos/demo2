//DESCRIPTION:
    // Our football team has finished the championship.

    // Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

    // For example: ["3:1", "2:2", "0:1", ...]

    // Points are awarded for each match as follows:

        // if x > y: 3 points (win)
        // if x < y: 0 points (loss)
        // if x = y: 1 point (tie)

    // We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

    // Notes:

        // our team always plays 10 matches in the championship
        // 0 <= x <= 4
        // 0 <= y <= 4


//my solution

function points(games) {
    // Initialize the variable to hold the total points earned
    let totalScore = 0;
    
    for (let i = 0; i < games.length; i++) {
      // Get the result of each game
      const gameResult = games[i];
      // Split the game result into two scores and convert them to numbers
      const [x,y] = gameResult.split(':').map(Number);
      
      // Check the outcome of the game and update the total points accordingly
      if (x > y) {
        // If the home team wins, add 3 points
        totalScore +=3
      } else if (x === y) {
        // If it's a draw, add 1 point
        totalScore +=1
      }
    }
    // Return the final total points earned
    return totalScore;
  }

//other solutions

//1.
const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

//2.
function points(games) {
    // Map each game to the difference between the home team's score and the away team's score
    return games.map(x => x[0] - x[2])
      // Filter out negative differences (where the away team scored more)
      .filter(x => x >= 0)
      // Reduce the filtered differences and calculate the total points
      .reduce((a, b) => a + (b > 0 ? 3 : 1), 0);
  }
  

