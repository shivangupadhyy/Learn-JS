// TRUTHY AND FALSY VALUES IN JAVASCRIPT - INTERVIEW NOTES
// -------------------------------------------------------
// In JavaScript, every value is either truthy or falsy when evaluated in a boolean context (like an if statement).

// Falsy values (evaluate to false):
// false, 0, -0, 0n (BigInt zero), "", null, undefined, NaN

// Truthy values (evaluate to true):
// "0", 'false', " " (space), [], {}, function(){}

// Example:
const userEmail = [] // truthy value
if (userEmail) {
    console.log("got user email");
} else {
    console.log("don't have user email ")
}

// Checking for empty array:
if(userEmail.length === 0){
    console.log("Arr is empty");
} else {
    console.log("check array")
}

// Checking for empty object:
const emptyObj = {}
if(Object.keys(emptyObj).length === 0 ){
    console.log("object is empty")
}
// Object.keys(emptyObj).length

// NULLISH COALESCING OPERATOR (??)
// Used to provide a default value when the left side is null or undefined.
let val1;
val1 = null ?? 10 ?? 15 // returns 10, as null triggers the default
console.log(val1)
// TERNARY OPERATOR
// Syntax: condition ? exprIfTrue : exprIfFalse
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// INTERVIEW TIPS:
// - Know all falsy values by heart.
// - Use Object.keys(obj).length === 0 to check for empty objects.
// - Nullish coalescing (??) is different from || (it only checks for null/undefined, not other falsy values).
// - Ternary operator is a shorthand for if-else.

