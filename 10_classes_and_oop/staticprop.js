// --- JavaScript Static Methods Example ---
// This file demonstrates the use of static methods in ES6 classes, a common interview topic and useful real-world feature.
// Static methods belong to the class itself, not to instances of the class.
// Real-world analogy: Think of a static method as a utility function for the blueprint (class), not for individual objects.

class User{
    constructor(username){
        this.username = username; // Each user instance has a username
    }
    logMe(){
        // Instance method: logs the username
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        // Static method: called on the class, not on instances
        // Common use: utility or factory methods
        return `123`;
    }
}

const shivang = new User("ayushi");
shivang.logMe(); // Works: instance method
// console.log(shivang.createId()) // Error: static methods are not accessible on instances

class teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iPhone = new teacher("iPhone", "Iphone@Apple.com");
iPhone.logMe(); // Inherited instance method
console.log(teacher.createId()); // Static method called on the class
// console.log(iPhone.createId()); // Error: static methods are not accessible on instances

/*
Key Explanations:
- static methods are called on the class itself, not on instances (objects created from the class).
- You cannot call a static method from an instance (e.g., shivang.createId() will throw an error).
- Static methods are often used for utility functions, not tied to a specific object.
- Inheritance: static methods are inherited by subclasses (e.g., teacher.createId()).
- Common pitfall: Trying to access static methods from an instance will result in an error.
- Real-world analogy: A car factory (class) might have a static method to count total cars produced, but each car (instance) doesn't have that method.
*/