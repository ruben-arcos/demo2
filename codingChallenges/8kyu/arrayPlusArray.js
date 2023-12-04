// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//my solution
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc,curr) => acc + curr, 0)
   };


//other solutions

//1.
function arrayPlusArray(arr1, arr2) {
    //The spread operator (...) is used to expand the elements of each array and concatenate them into a single array.
    let sum = [...arr1, ...arr2]
    return sum.reduce((acc, curr) => acc + curr, 0)
}

//2.
function arrayPlusArray(arr1, arr2) {
    let r = 0;
    for(let i=0; i<arr1.length;i++){
      r+=arr1[i] + arr2[i];
    }
    return r;
  }