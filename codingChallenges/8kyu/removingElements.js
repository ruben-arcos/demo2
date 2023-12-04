// Take an array and remove every second element from the array. Always keep the first 
//element and start removing with the next element.

// Example:
  // ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//my solution
function removeEveryOther(arr){
    return arr.filter((keep, remove) => remove % 2 === 0)
  }
  
  console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
  console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]))

//other solutions

//1.
function removeEveryOther2(arr){
    var newArr=[];
  for (var i = 0; i < arr.length; i+=2){
    newArr.push(arr[i]);
    }
  return newArr;
  }

  console.log(removeEveryOther2(['Hello', 'World', 'It\'s raining Again']))

//2.

function removeEveryOther3(arr){
    //your code here
    for (var i = 1; i < arr.length;i++){
        arr.splice(i,1);
    }
    return arr;
  }

  console.log(removeEveryOther2(['Hello', 'World', 'Your\'re toxic']))