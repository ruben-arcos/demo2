//Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, 
//saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals 
//and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of 
//a given number of petals. The number of petals is always greater than 0.

//my solution
function howMuchILoveYou(nbPetals) {
  
    const phrases = [
      
      "I love you",
      "a little",
      "a lot",
      "passionately",
      "madly",
      "not at all"
      
    ]
    
    return phrases[(nbPetals - 1) % phrases.length]
    
  }
  
  console.log(howMuchILoveYou(7)); // Output: 'I love you'
  console.log(howMuchILoveYou(1)); // Output: 'I love you'
  console.log(howMuchILoveYou(3)); // Output: 'a lot'
  console.log(howMuchILoveYou(6)); // Output: 'not at all'

//other solutions
//1.
function howMuchILoveYou(nbPetals) {
    let phrase = {    
      0: "not at all",
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly"
    }
    return phrase[nbPetals%6]
  }

//2.
function howMuchILoveYou(nbPetals) {
    let n = nbPetals % 6
    if(n===1){
        return 'I love you'
    }else if(n === 2){
        return 'a little'
    }else if(n === 3){
        return 'a lot'
    }else if(n === 4){
        return 'passionately'
    }else if(n === 5){
        return 'madly'
    }else if((n === 6) || (n === 0)){
        return 'not at all'
    }
}
