// Notes and explanations for interview and new learners:
// This script demonstrates function objects, prototypes, and how the 'new' keyword works in JavaScript.

// 1. Functions are objects in JavaScript
function multiplyBy5(num){
    return num * 5
}
// You can add properties to functions because they are objects
multiplyBy5.power = 2
console.log(multiplyBy5(6))        // 30
console.log(multiplyBy5.power)     // 2
console.log(multiplyBy5.prototype) // {} (empty object by default)

// 2. Constructor function and prototypes
function createuser(username, score){
    // 'this' refers to the new object being created
    this.username = username
    this.score = score
}

// Add methods to the prototype so all instances share them (memory efficient)
createuser.prototype.increment = function(){
    this.score++
}

createuser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

// Create new instances using 'new'
const chai = new createuser("chai", 50)
const tea = new createuser("tea", 250)

chai.printMe() // price is 50

/*
How the 'new' keyword works behind the scenes:
1. A new object is created.
2. The new object is linked to the constructor's prototype.
3. The constructor function is called with 'this' bound to the new object.
4. If the constructor doesn't return an object, the new object is returned.

Key Points:
- Use prototypes to share methods across all instances.
- The 'new' keyword is essential for constructor functions to work as intended.
- Functions in JavaScript are objects and can have properties and prototypes.
- This is the foundation for OOP in JavaScript before ES6 classes.
*/


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/