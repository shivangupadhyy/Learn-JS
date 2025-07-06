// --- JavaScript Classes and Prototypes Example ---
// This file demonstrates how to create classes in JavaScript using both ES6 class syntax and the older prototype-based approach.
// These are key OOP concepts for interviews and real-world projects.

// --- ES6 Class Syntax (commented out) ---
// class User {
//     constructor(username, email, password){
//         this.username = username; // Each user has a username
//         this.email = email;       // Each user has an email
//         this.password = password; // Each user has a password
//     }

//     encryptPassword(){
//         // Returns the password with 'abc' appended (not secure, just for demo)
//         return `${this.password}abc`;
//     }

//     changeUsername (){
//         // Returns the username in uppercase
//         return `${this.username.toUpperCase()}`;
//     }
// }
// // Usage example:
// const chai = new User("shivang", "shivang@google.com", "vansh@683");
// console.log(chai.encryptPassword()); // Output: vansh@683abc
// console.log(chai.changeUsername());  // Output: SHIVANG

// --- Prototype-based Approach (behind the scenes) ---
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

// Add methods to the prototype so all User instances share them (memory efficient)
User.prototype.encryptPassword = function(){
    // Prints the password with 'abcdef' appended (not secure, just for demo)
    console.log(`${this.password}abcdef`);
}

User.prototype.changeUsername = function(){
    // Prints the username in uppercase
    console.log(`${this.username.toUpperCase()}`);
}

// Create a new User instance using the constructor function
const hello = new User("Shivang", "Shivang@microsoft.com", "Shivang@683");
hello.encryptPassword(); // Output: Shivang@683abcdef
hello.changeUsername();  // Output: SHIVANG

// --- Key Interview Points ---
// 1. ES6 classes are syntactic sugar over the prototype-based system.
// 2. Methods defined in the class body or on the prototype are shared by all instances (saves memory).
// 3. Always use 'new' when calling a constructor function, or 'this' will refer to the global object (common pitfall).
// 4. Real-world analogy: Think of a class as a blueprint (like a car design), and each object as a car built from that blueprint.
// 5. Time/space complexity: Creating objects is O(1); methods are shared, so space is efficient.
// 6. Edge case: If you define a method inside the constructor, each instance gets its own copy (wastes memory).
// 7. For interviews, be ready to explain both ES6 class and prototype-based approaches, and when to use each.