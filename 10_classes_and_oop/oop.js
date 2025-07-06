// Notes and explanations for interview and new learners:
// This script demonstrates two ways to create objects in JavaScript: object literals and constructor functions.

// 1. Object Literal Example
const user = {
    username: "Shivang",
    loginCount: 8,
    signedIn : true,

    getUserDetails : function(){
        // Method to print user details using 'this' keyword
        console.log(`username ${this.username} and loginCount is : ${this.loginCount}`);
    }
}
// Accessing properties and methods:
// console.log(user.username); // Access property
// console.log(user.getUserDetails()); // Call method
// console.log(this) // In global scope, 'this' refers to global object (window or global)

// 2. Constructor Function Example
function User(username, loginCount, signedIn){
    // 'this' refers to the new object being created
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    // Method defined for each instance
    this.greeting = function(){
        // console.log(`welcome ${this.username}`)
    }

    return this // Not required when using 'new', but doesn't hurt
}
// Creating instances using 'new' keyword
const userOne = new User("hitesh", 12, true)
const userTwo = new User('ChaiAurCode', 11, false)
console.log(userOne.constructor) // Shows the constructor function
console.log(userTwo)

// Key Points:
// - Object literals are good for single objects; constructor functions are used for creating multiple similar objects.
// - The 'new' keyword creates a new instance and sets 'this' to that instance.
// - Each call to 'new User()' creates a separate object (instance).
// - Methods defined inside the constructor are duplicated for each instance (use prototypes for shared methods).
// - 'constructor' property points to the function that created the instance.
// - This is the foundation for OOP in JavaScript before ES6 classes.