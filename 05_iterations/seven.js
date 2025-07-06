// Array of numbers from 1 to 10
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Example: Using map and filter for array transformations
// Step 1: Multiply each number by 10
// Step 2: Add 1 to each result
// Step 3: Filter out numbers less than 40
const newNums = myNumers
        .map( (num) => num * 10 ) // [10, 20, ..., 100]
        .map( (num)=> num + 1 )   // [11, 21, ..., 101]
        .filter( (num)=> num >= 40) // Keep numbers >= 40
// newNums will be [41, 51, 61, 71, 81, 91, 101]
// console.log(newNums)

// Chained version (same as above, but in one line)
const newNum = myNumers.map((num)=> num *10 ).map((num)=> num +1).filter( (num) => num>=40)
console.log(newNum) // Output: [41, 51, 61, 71, 81, 91, 101]

// Interview Notes:
// - Demonstrates use of map for element-wise transformation.
// - Shows chaining of multiple map and filter operations for data processing.
// - Highlights functional programming style in JavaScript.
// - Useful for scenarios where you need to transform and filter data in steps.