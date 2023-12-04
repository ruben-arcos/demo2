// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
//      input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//      output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

//my solution

function openOrSenior(data){
    let result = [];
    
    for ( let i = 0; i < data.length; i++) {
      let senior = data[i][0];
      let handicap = data[i][1];
      
      if ( senior >= 55 && handicap > 7) {
        result.push('Senior')
      } else {
        result .push('Open')
      }
    }
    return result
  }

  console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
  console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))  
  console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))

//other solutions

//1.

// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }

//2.
function openOrSenior(data){
    function determineMembership(member){
        return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
    }
    return data.map(determineMembership);
}

//3.

let Category = {
    Open: 'Open',
    Senior: 'Senior',
  };
  
  function openOrSenior(data){
   return data.map(([age, handicap]) => {
      if (age >= 55 && handicap > 7) {
        return Category.Senior;
      }
  
      return Category.Open;
   });
  }
