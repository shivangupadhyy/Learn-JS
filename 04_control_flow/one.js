// CONTROL FLOW IN JAVASCRIPT - NOTES & EXAMPLES
// ---------------------------------------------
// if, else if, else statements are used to control the flow of code based on conditions.

// Example 1: Basic if-else
// const temperature = 51
// if(temperature < 50){
//     console.log("hot");
// } else {
//     console.log("very hot");
// }
// Operators: <, >, <=, >=, ==, !=, ===, !==

// Example 2: Variable scope in if block
const score = 200;
if(score > 300){
    let power = "fly" // 'let' is block scoped
    console.log(`user power ${power}`)
}
// console.log(`user power  : ${power}`) // This will throw an error because 'power' is not accessible outside the block

// Example 3: Implicit scope (not recommended)
// if(balance > 500) console.log("test"); // Valid for single statement, but not best practice
// if(balance > 500) console.log("test"), console.log("test 2"); // Not recommended, avoid comma operator

// Example 4: if-else if-else ladder
const balance  = 1000
if (balance < 500) {
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750")
} else if (balance < 900){
    console.log("less than 900")
} else {
    console.log("more than 1000")
}

// LOGICAL OPERATORS
// -----------------
// && (AND): All conditions must be true
// || (OR): At least one condition must be true

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// Example 5: Using && (AND)
if (userloggedIn && debitCard) {
    console.log("allow to buy course")
}

// Example 6: Using || (OR)
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in")
}

// INTERVIEW TIPS:
// - Know the difference between == and === (loose vs strict equality)
// - Understand block scope (let/const vs var)
// - Practice writing if-else, else-if ladders, and using logical operators
// - Remember: Avoid using comma operator for multiple statements in if
// - Use braces {} for clarity, even for single-line if/else