// =======================
// Hoisting Example Section
// =======================

// Uncomment the following lines to see hoisting in action:

// a(); // Function declaration is hoisted, so this works: outputs "namaste javascript"
// console.log(a); // Logs the function definition (since 'a' is hoisted)
// console.log(x); // undefined, because 'x' is declared with var and hoisted but not initialized
// console.log(getName); // undefined, because arrow functions are assigned to variables (not hoisted as functions)
// console.log(getName3); // undefined, same reason as above

// var x = 10;

// // Function Declaration (hoisted completely)
// function a() {
//     console.log("namaste javascript");
// }

// // Arrow Function (variable hoisted, not the function body)
// var getName = () => {
//     console.log("namaste javascript");
// }

// // Function Expression (variable hoisted, not the function body)
// var getName3 = function() {
//     console.log("namste javascript");
// }

// a(); // Works, function declaration is hoisted
// console.log(x); // 10
// console.log(a); // Logs function definition

// // Note: During the creation phase, memory is allocated for variables (set to undefined) and function declarations (set to the function code).

// =======================
// Function Scope Example
// =======================

// var x = 1;
// a(); // Outputs 10 (local x inside function a)
// b(); // Outputs 100 (local x inside function b)
// console.log(x); // 1 (global x)

// function a() {
//     var x = 10; // Local scope for function a
//     console.log(x);
// }
// function b() {
//     var x = 100; // Local scope for function b
//     console.log(x);
// }

// =======================
// Global Scope & 'this' Example
// =======================

var a = 10; // Declared in global scope

function b() { // Function in global scope
    var x = 10; // Local variable inside function b
}

// In browsers, the global object is 'window'.
// 'var' declarations in global scope become properties of 'window'.
// 'this' in global scope also refers to 'window' in non-strict mode.

console.log(window.a); // 10 (because 'a' is attached to the window object)
console.log(a);        // 10 (direct access to global variable)
console.log(this.a);   // 10 ('this' refers to window in global scope)

// Interview Notes:
// - Function declarations are hoisted with their definitions.
// - Variables declared with 'var' are hoisted but initialized as undefined.
// - Function expressions and arrow functions are not hoisted as functions, only their variable name is hoisted (set to undefined).