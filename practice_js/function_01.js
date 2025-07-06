// ===============================
// JavaScript Functions — Interview Notes & Recap
// ===============================

// --- Function Statement / Function Declaration ---
// A function statement (declaration) defines a named function.
// These are hoisted, so you can call them before their definition.
function a() {
    console.log("a called");
}
a(); // Works due to hoisting

// --- Function Expression ---
// A function expression assigns a function to a variable.
// Only the variable is hoisted (as undefined), not the function body.
var b = function() {
    console.log("b called");
};
b(); // Works only after the definition

// --- Difference: Function Statement vs Expression ---
// The main difference is hoisting:
// - Function declarations are hoisted with their definitions.
// - Function expressions are not hoisted as functions, only the variable is hoisted.

// --- Anonymous Function ---
// A function without a name. Often used as arguments or assigned to variables.
// Example (invalid as a standalone statement):
// function () {}

// --- Named Function Expression ---
// A function expression with a name. The name is only accessible inside the function.
var b = function syz() {
    console.log("b called");
};
// syz(); // Error: syz is not defined in this scope (only inside the function body)

// --- Parameters vs Arguments ---
// Parameters: Variables listed in the function definition.
// Arguments: Values passed to the function when called.
var b = function(param1, param2) { // param1, param2 are parameters
    console.log("b called");
};
b(1, 2); // 1, 2 are arguments

// --- First Class Functions / First Class Citizens ---
// In JavaScript, functions can be:
// - Assigned to variables
// - Passed as arguments to other functions
// - Returned from other functions
// This is called "first class functions" or "first class citizens".

// Example: Passing a function as an argument
function greet(fn) {
    fn();
}
greet(function() {
    console.log("Hello from a first class function!");
});

// --- Arrow Function ---
// A concise syntax for writing functions (introduced in ES6).
var myFunction = () => {
    console.log("called");
};

// --- Interview Recap ---
// - Know the difference between function declarations and expressions (especially hoisting).
// - Understand anonymous and named function expressions.
// - Be able to explain parameters vs arguments.
// - Know what "first class functions" means in JavaScript.
// - Be comfortable with arrow function