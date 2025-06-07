// --- JavaScript Class Inheritance Example ---
// This file demonstrates ES6 class inheritance, a key OOP concept for interviews and real-world projects.
// Inheritance allows you to create a new class (child) that reuses, extends, or modifies the behavior of another class (parent).
// Real-world analogy: Think of 'User' as a general employee, and 'teacher' as a specialized employee with extra abilities.

// Parent class: User
class User {
    constructor (username){
        // The constructor runs when you create a new User (or teacher) object.
        // 'username' is a property unique to each user.
        this.username = username;
    }

    logMe (){
        // Instance method: logs the username to the console.
        // This method is available to all User and teacher objects.
        console.log(`USERNAME is : ${this.username}`);
    }
}

// Child class: teacher extends User
// 'extends' means teacher inherits all properties and methods from User.
class teacher extends User{
    constructor(username, email, password){
        super(username); // Calls the parent (User) constructor to set username.
        // 'super' is required before using 'this' in a subclass constructor.
        this.email = email;     // teacher-specific property
        this.password = password; // teacher-specific property
    }

    addCourses(){
        // Method unique to teacher class.
        // Real-world analogy: Only teachers can add courses, not all users.
        console.log(`A new course was added by ${this.username}`);
    }
}

// Create a new teacher object. This object has username, email, password, and both User and teacher methods.
const chai  = new teacher("chai", "chai@gmial.com", "password");

chai.addCourses(); // Calls teacher's method. Output: A new course was added by chai
chai.logMe();      // Calls inherited User method. Output: USERNAME is : chai

// Create a new User object. This object only has username and User methods.
const tea = new User("shivang");
tea.logMe(); // Output: USERNAME is : shivang

// --- Key Interview Points ---
// 1. 'extends' enables inheritance. Child class gets all parent class features.
// 2. 'super()' must be called in the child constructor before using 'this'.
// 3. Child class can have its own methods and properties in addition to inherited ones.
// 4. All teacher objects are also User objects, but not all Users are teachers (is-a relationship).
// 5. Common pitfall: Forgetting to call 'super()' in the child constructor will throw an error.
// 6. Time/space complexity: Creating objects is O(1) for both classes; methods are shared via prototype chain, so memory is efficient.
// 7. Real-world use: Inheritance is used to model hierarchies (e.g., Employee → Manager, Animal → Dog).
// 8. Edge case: If you override a parent method in the child, only the child's version is used for child objects.