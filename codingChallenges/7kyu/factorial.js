// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial


//my solution

function factorial(n){
    if (n === 0) {
      return 1;
    } if (n < 0) {
      return 0;
    } return n * factorial (n - 1)
  }

  //other solutions

  //1.
  const factorial = n => n ? factorial(n - 1) * n : 1;



  //2.
  function factorial(n){
    let answer = 1;
    
    while (n > 0) {
      answer *= n;
      n--;
    }
    
    return answer;
  }

  //3.
  function factorial(n){
    let sum = 1;
     for (let i = 1; i <= n; i++){
       sum = sum * i;
     }
     return sum; 
   
   }
