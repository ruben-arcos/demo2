// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good 
// ideas 'good' and bad ideas 'bad'. If there are one or two good 
// ideas, return 'Publish!', if there are more than 2 return 
// 'I smell a series!'. If there are no good ideas, as is often 
// the case, return 'Fail!'.

function well(x){
  // Initialize a counter for good ideas
  let goodCount = 0
  
  // Loop through each element in the array
  for ( let i = 0; i <= x.length; i++ ) {
    if ( x[i] === 'good') {
        // Increment the counter for each 'good' idea
       goodCount++
    } 
  }
  
  // Check the count of good ideas and return corresponding response
  if (goodCount === 0) {
    return 'Fail!'
  } else if (goodCount <= 2) {
    return 'Publish!'
  } else {
    return 'I smell a series!'
  }
}

console.log(well(['bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))