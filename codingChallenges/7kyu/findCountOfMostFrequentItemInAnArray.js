//DESCRIPTION

    // Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

    // Example
    // input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
    // ouptut: 5 
    // The most frequent number in the array is -1 and it occurs 5 times.

//my solution
function mostFrequentItemCount (collection) {
    // Check if the collection is an empty array
    if (Array.isArray(collection) && collection.length === 0) {
         // Return 0 for an empty array
        return 0;
    }

    // Create an empty object to store the counts of each item
    let countMap = {}

    // Iterate over the collection array
    for (let i = 0;  i  < collection.length; i++ ) {
        // Get the current item
        let item = collection[i];
        // If the item exists in the countMap object
        if (countMap[item]) {
            // Increment its count
            countMap[item]++;
        }  else {
            // Otherwise, initialize its count to 1
            countMap[item] = 1;
        }
    }

    // Initialize the maximum count to 0
    let maxCount = 0;

    // Iterate over the countMap object
    for (let key in countMap) {
        // If the count is greater than the current maximum count
        if (countMap[key] > maxCount) {
            // Update the maximum count
            maxCount = countMap[key]
        }
    }
    
    // Return the maximum count as the result
    return maxCount;
}

console.log(mostFrequentItemCount([1,2,3,4,5,6,7,7,7,8,9]));
console.log(mostFrequentItemCount([1,2,2,2,2,2,2,2,3,4,5]));

//break down in simpler terms:

// 1. We have a function called `mostFrequentItemCount` that takes an array called `collection` as input.

// 2. We check if the `collection` is an empty array. If it is, we return 0, because there are no items in the collection.

// 3. If the `collection` is not empty, we create an empty object called `countMap`. This object will store the counts of each item in the collection.

// 4. We iterate over each item in the `collection` array.

// 5. For each item, we check if it already exists as a property in the `countMap` object.
    //- If it exists, we increment its count by 1.
    //- If it doesn't exist, we initialize its count to 1.

// 6. After counting the occurrences of each item, we initialize a variable called `maxCount` to 0. This variable will store the maximum count we find.

// 7. We iterate over each property in the `countMap` object.

// 8. For each property (key-value pair) in the countMap object, we compare the count (value) with the current maximum count (maxCount). If the count of the current item is greater than the current maximum count, we update the maxCount to the new higher count. This ensures that maxCount holds the count of the most frequent item encountered so far in the collection array.

// 9. Finally, we return the `maxCount` as the result, which represents the count of the most frequent item in the `collection` array.

//other solutions

//1. 
// function mostFrequentItemCount(c) {
//     return c.length ? Math.max(...c.map(x=>c.filter(y=>y==x).length)) : 0;
//   }

function mostFrequentItemCount(c) {
    // Check if the array length is non-zero
    return c.length ? 
      // If it is non-zero, calculate the count of the most frequent item
      Math.max(
        // Create a new array where each element represents the count of occurrences of that element in the input array
        ...c.map(x =>
          // Filter the elements in the input array that are equal to the current element (x)
          c.filter(y => y == x).length
        )
      ) 
      : 
      // If the array length is zero, return 0
      0;
  }

console.log(mostFrequentItemCount([1,2,2,2,2,2,2,2,3,4,5]));
console.log(mostFrequentItemCount([0]));


//step-by-step breakdown of the code:

    // 1. The function `mostFrequentItemCount` takes an array `c` as input.
    // 2. The ternary operator `c.length ? ... : 0` checks if the length of the input array is non-zero.
    // 3. If the length of the array is non-zero (i.e., the condition `c.length` evaluates to `true`), the code after the `?` is executed.
    // 4. Inside the `Math.max(...c.map(x=>c.filter(y=>y==x).length))` expression, the following steps are performed:
        //    a. The `map` method is used to create a new array where each element `x` represents the count of occurrences of `x` in the input array `c`.
        //    b. The `filter` method is used to filter the elements of `c` that are equal to `x`, effectively counting the occurrences of `x` in `c`.
        //    c. The `length` property is used to obtain the count of occurrences of `x`.
        //    d. The spread operator `...` is used to spread the resulting array of counts as individual arguments to the `Math.max` function.
        //    e. The `Math.max` function returns the maximum value among the counts, representing the count of the most frequent item in `c`.
    // 5. If the length of the array is zero (i.e., the condition `c.length` evaluates to `false`), the code after the `:` is executed, and it simply returns `0`.
    // 6. The function returns the count of the most frequent item in the array, or `0` if the array is empty.

// So, the code calculates the count of the most frequent item in the input array using array manipulation methods like `map`, `filter`, and the spread operator, and it handles the case of an empty array by returning `0`.

//2.
function mostFrequentItemCount(collection) {
    var count = 0,
    frequentCount = 0;
//At the start of the process this FOR loop starts at index 0 (var i)
   
   for (var i = 0; i < collection.length; i++) {

//This FOR loop also starts at index 0 (var j)
        for (var j = 0; j < collection.length; j++) {

//Var i remains on index 0 as var j cycles through the entire array comparing each number in the array to that first index (var i).
//if var i and var j are ever the same count gets incremented.
            
            if (collection[i] == collection[j]) { 
                count++; 
            }
//IF after cycling through the array a new more frequent number is found, that count is stored in frequentCount.
            if (frequentCount < count) {
                frequentCount = count; 
            }

        }
//Count then gets reset. Process starts again
        count = 0;  
        
    }
//A final count gets returned from function
    return frequentCount; 
}