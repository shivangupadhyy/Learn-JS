// Notes and explanations for interview and new learners:

// 1. Object with method using 'this' keyword
const user = {
    username: "shivang",
    price : 999,

    // Regular function: 'this' refers to the current object
    welcomeMessage: function () {
        // console.log(`${this.username}, welcome to webiste`); // 'this.username' refers to 'user.username'
        // console.log(this); // Logs the whole 'user' object
    }
}

user.welcomeMessage() // Uncomment to call the method
user.username = "ayushi" // Changing property value
user.welcomeMessage() // Shows updated username
// console.log(this); // In global scope, 'this' refers to global object (window in browser, {} in Node.js)

// 2. 'this' inside a regular function (not object method)
// function chai (){
//     let username  = "shivang"
//     // console.log(this); // 'this' is undefined in strict mode, or global object otherwise
// }
// chai()

// 3. 'this' inside a function expression
// const chai = function () {
//     let username = "shivang"
//     console.log(this.username) // undefined, as 'this' does not refer to the object
// }
// chai()

// 4. 'this' inside an arrow function
// const chai =()=>{
//     let username = "shivang"
//     console.log(this) // Arrow functions do not have their own 'this', inherit from parent scope
// }
// chai()

// 5. Arrow function with return value
// const addTwo = (num1, num2)=>{
//  return num1 + num2
// }
// console.log(addTwo(3, 4))


// 6. Arrow function with implicit return
const addTwo = (num1 , num2)=> (num1 + num2)
console.log(addTwo(3,6))

// 7. Arrow function returning an object (wrap object in parentheses)
// const addTwo  = (num1, num2) => ({username : "shivang"})

// console.log(addTwo()); // Returns: { username: 'shivang' }

// Summary:
// - Use regular functions for object methods to access 'this'.
// - Arrow functions do not have their own 'this'.
// - For returning objects from arrow functions, wrap the object in parentheses.
// - 'this' behaves differently in global, function, and object contexts.