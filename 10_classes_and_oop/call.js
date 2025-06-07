// Notes and explanations for interview and new learners:
// This script demonstrates how to use the .call() method to set the context (this) when calling a function inside a constructor.

function setUsername (username){
    // Simulate complex DB calls or logic
    this.username = username // 'this' will be set by .call()
    console.log("called");
}

function createUser(username, email, password){
    // Use .call() to call setUsername with 'this' set to the new object being created
    setUsername.call(this, username)

    // Set additional properties
    this.email = email
    this.password = password
}

const chai  = new createUser("chai", "chai@google.com", "123")
console.log(chai) // Logs the new user object

/*
Key Explanations:
- .call() allows you to invoke a function with a specific 'this' context.
- In createUser, setUsername.call(this, username) ensures that 'this' inside setUsername refers to the new user object.
- This pattern is useful for code reuse and for simulating inheritance or composition in constructor functions.
- The new keyword creates a new object, and 'this' inside createUser refers to that object.
- This is a common pattern in JavaScript OOP before ES6 classes and super().
*/