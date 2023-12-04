//DESCRIPTION
    // You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

    // Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

    // []                                -->  "no one likes this"
    // ["Peter"]                         -->  "Peter likes this"
    // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
    // ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
    // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
    // Note: For 4 or more names, the number in "and 2 others" simply increases.


//my solution
function likes(names) {
    const length = names.length;
  
    if (length === 0) {
      // If the array is empty, return the corresponding text
      return "no one likes this";
    } else if (length === 1) {
      // If there is only one name, return the name with "likes this"
      return names[0] + ' likes this';
    } else if (length === 2) {
      // If there are two names, return both names with "and" in between, followed by "like this"
      return names[0] + ' and ' + names[1] + ' like this';
    } else if (length === 3) {
      // If there are three names, return the first two names separated by commas, followed by the last name with "and" in between, and "like this"
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    } else {
      // If there are more than three names, return the first two names separated by commas, followed by the count of remaining names and "others like this"
      return names[0] + ', ' + names[1] + ' and ' + (length - 2) + ' others like this';
    }
  }

  //explanation to  (length - 2)
  //The expression + (length - 2) is used to concatenate the count of remaining names with the text string.

// Let's consider an example where the length of the names array is greater than 3. In this case, we want to display the names of the first two people in the array, followed by the count of remaining names.

// Here's how the expression works:

// length refers to the total number of names in the array.
// We subtract 2 from length because we have already accounted for the first two names in the text. This gives us the count of remaining names.
// The expression (length - 2) evaluates to the count of remaining names.
// By using + to concatenate this count with the text string, we include the count in the final output.
// For example, if names has 5 elements, the expression (length - 2) evaluates to 3. The resulting text would be "Name1, Name2 and 3 others like this".

// In summary, the expression + (length - 2) helps combine the count of remaining names with the text, allowing us to dynamically display the correct information based on the length of the names array.

  //other solutions
//1.
function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }

  //2.
  // use .length to see how many items are in the array and use if statements to test the conditions.
// for the 4 or more names be sure to subtract two from the .length to get the and x others.
// use ${} to write out string with items from array


function likes(names) {
    // TODO
    
    if (names.length === 0) {
      return "no one likes this";
    } else if (names.length === 1) {
      return `${names[0]} likes this`;
    } else if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (names.length > 3) {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
      
  }
