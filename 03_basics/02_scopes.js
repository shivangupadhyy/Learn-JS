// ===================== JavaScript Scope & Hoisting: Interview Notes & Explanations =====================
// Scope determines where variables and functions are accessible in your code.
// There are three main types of scope in JavaScript:
// 1. Global Scope: accessible everywhere
// 2. Function/Local Scope: accessible only inside the function
// 3. Block Scope: accessible only inside the block (if, for, etc.)

let a = 400 // Global scope

if (true) {
    let a = 10; // Block scope (only inside this if block)
    const b = 20; // Block scope
    var c = 30; // Function or global scope (var is NOT block scoped)
    // console.log(`inner: ${a}`) // 10
}

// console.log(a); // 400 (global 'a')
// console.log(b); // Error: b is not defined (block scoped)
// console.log(c); // 30 (var leaks out of block)

// ===================== Function Scope & Closures =====================
function one (){
    const username = "shivang" // Local to function one
    function two (){
        const website = "youtube" // Local to function two
        console.log(username) // Can access parent's variable (closure)
    }
    // console.log(website) // Error: website is not defined here
    // two() // Uncomment to call inner function
}
one()

if (true) {
    const username = "shivang"
    if(username === "shivang"){
        const website = " youtube"
        // console.log(username + website) // Accessible here
    }
    // console.log(website) // Error: website is not defined here
}
// console.log(username) // Error: username is not defined here

// ===================== Hoisting: Function Declarations vs Expressions =====================
console.log (addone(5)) // Works: function declarations are hoisted
function addone (num){
    return num + 1
}

console.log(addTwo(5)) // Error: Cannot access 'addTwo' before initialization
const addTwo  = function(num){
    return num + 2 
}
addTwo(5)

// ===================== Interview Notes =====================
// - let and const are block scoped; var is function/global scoped (avoid var)
// - Inner functions can access variables from their parent (closure)
// - Hoisting: function declarations are hoisted, function expressions are not
// - Always declare variables at the top of their scope
// - Practice reading and tracing variable scope for debugging
// - Comment your code for clarity, especially for beginners!