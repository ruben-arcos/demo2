// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

    // 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
    // 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
    // 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
    // 0, in other cases
    
// Examples(Inputs-->Output):

    // 100, 12 --> 100
    // 99, 0 --> 100
    // 10, 15 --> 100

    // 85, 5 --> 90

//my solution
function finalGrade(exam, projects) {
    // Check if the exam score is greater than 90 or the number of projects is 10 or more
    if (exam > 90 || projects > 10) {
      // If true, return 100 as the final grade  
      return 100; 
       // Check if the exam score is greater than 75 and the number of projects is 5 or more
    } else if (exam > 75 && projects >= 5) {
      // If true, return 90 as the final grade
      return 90; 
      // Check if the exam score is greater than 50 and the number of projects is 2 or more
    } else if (exam > 50 && projects >= 2) {
      // If true, return 75 as the final grade
      return 75; 
    }
    // If none of the above conditions are met, return 0 as the final grade
    return 0; 
  }

  console.log(finalGrade(85, 5));


//other solutions

//1.
function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) return 100;
    if(exam > 75 & projects >= 5) return 90;
    if(exam > 50 & projects >= 2) return 75;
    return 0;
  }

//2.
finalGrade = (exam, projects) => {
    switch (true) {
         case (exam > 90 || projects > 10):
         return 100
         break;
         case (exam > 75 && projects >= 5):
         return 90;
         break;
         case (exam > 50 && projects >= 2):
         return 75
         break;
         case (exam <= 55 || projects <= 2):
         return 0;
         break;
         
  }
  }