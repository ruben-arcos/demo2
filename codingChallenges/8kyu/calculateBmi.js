// DESCRIPTION:
    // Write function bmi that calculates body mass index (bmi = weight / height2).

    // if bmi <= 18.5 return "Underweight"

    // if bmi <= 25.0 return "Normal"

    // if bmi <= 30.0 return "Overweight"

    // if bmi > 30 return "Obese"


//my solution
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


function bmi(weight, height) {
    let total = weight / (height * height);
    
    if (total <= 18.5) {
      return "Underweight"
    } else if (total <= 25.0) {
      return "Normal" 
    } else if (total <= 30.0) {
      return "Overweight"
    } return "Obese"
  }
  
  console.log(bmi(80, 1.80))
  console.log(bmi(100, 1.80))

//other solutions

//1.
function bmi(weight, height) {
  var result = weight/Math.pow(height,2) 
  
  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

//2.
function bmi(weight, height) {
  
    var bmi  = weight/(height*height);
    
     return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
    
    }