//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


//my solution
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '')
   }
   
   console.log(removeExclamationMarks('hello world!!!'))
  
 //other solutions 
 //1.
 function removeExclamationMarks(s) {
    return s.split('!').join('');
  }

//2.
function removeExclamationMarks(s) {
    let res = '';

    for (let i = 0; i < s.length; i++) {
      if(s[i] !== '!'){ 
        res += s[i];
        }
    }
    return res;
  }