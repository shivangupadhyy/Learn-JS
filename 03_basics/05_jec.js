// This file demonstrates JavaScript Execution Context concepts.

// 1. There are three main types of execution context:
//    - Global Execution Context (created for the whole script, accessible via 'this')
//    - Function Execution Context (created whenever a function is called)
//    - Eval Execution Context (rarely used, created by eval())

// 2. The JavaScript code runs in two phases:
//    - Memory Creation Phase: Variables and functions are stored in memory (hoisting happens here).
//    - Execution Phase: Code is executed line by line, and values are assigned.

// Example variables:
let val1 = 10;
let val2 = 5;

// Example function to show function execution context:
function chai(num1, num2){
    // When this function is called, a new execution context is created for it.
    let total = num1 + num2;
    return total
}

// Function calls create new execution contexts:
let result1 = chai(val1, val2)
let result2 = chai(10, 2)

console.log(result1) // Output: 15
console.log(result2) // Output: 12

// Summary of phases:
// 1. Global Execution Phase: Sets up the global context.
// 2. Memory Phase: Allocates memory for variables/functions (hoisting).
// 3. Execution Phase: Executes code and assigns values.