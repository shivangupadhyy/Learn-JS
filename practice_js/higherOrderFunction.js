// ===============================
// Higher Order Functions in JavaScript — Interview Notes & Recap
// ===============================

// --- What is a Higher Order Function? ---
// A higher order function is a function that:
// - Takes another function as an argument, OR
// - Returns a function as its result

// --- Example: Passing a function as an argument ---
function x() {
    console.log("namaste");
}
function y(fn) {
    fn(); // Calls the function passed as argument
}
// y(x);

// --- Practical Example: Calculating Area, Circumference, Diameter for Circles ---
const radius  = [3, 1, 2, 4];

// Individual calculation functions
const area = function(radius) {
    return Math.PI * radius * radius;
}
const circumference = function(radius) {
    return 2 * Math.PI * radius;
}
const diameter = function(radius) {
    return 2 * radius;
}

// --- Without Higher Order Function ---
// You'd write separate functions for each calculation:
const calulateArea = function (radiusArr) {
    const output = [];
    for(let i=0; i<radiusArr.length; i++){
        output.push(Math.PI * radiusArr[i] * radiusArr[i])
    }
    return output;
}
// console.log(calulateArea(radius));

// --- With Higher Order Function ---
// Let's generalize the logic using a higher order function:
const calculate = function(arr, logic) {
    const output = [];
    for(let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
}
// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// --- Even More Elegant: Adding to Array Prototype ---
// This allows us to use .calculate() on any array:
Array.prototype.calculate = function(logic) {
    const output = [];
    for(let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

// --- Usage Examples ---
console.log(radius.map(area));           // Using built-in map (also a higher order function)
console.log(radius.calculate(area));     // Using our custom higher order function
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));

// --- Interview Recap ---
// - Higher order functions are functions that take other functions as arguments or return them.
// - Array methods like .map, .filter, .reduce are higher order functions.
// - You can create your own higher order functions for reusable, modular code.
// - Extending Array.prototype (with caution) can add custom utilities to all arrays.
// - Be able to explain and implement higher order functions in interviews!
