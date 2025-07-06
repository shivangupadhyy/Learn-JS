// --- JavaScript Getters and Setters Example ---
// This file demonstrates how to use getters and setters in ES6 classes, a common interview topic and useful real-world feature.
// Getters and setters allow you to control access to object properties, add validation, or compute values dynamically.

// Define a User class with custom getter and setter logic
class User {
    constructor(email, password){
        // When you assign to this.email and this.password, the setters below are called
        this.email = email,
        this.password = password
    }

    // Getter for email property
    get email(){
        // Returns the email in uppercase (computed property)
        return this._email.toUpperCase()
    }

    // Setter for email property
    set email(id){
        // Sets the internal _email property
        this._email = id
        // Note: Setters should never return a value
    }

    // Getter for password property
    get password(){
        // Returns the password with 'Shivang' appended (not secure, just for demo)
        // return this._password.toUpperCase()
        return `${this._password}Shivang`
    }

    // Setter for password property
    set password(value){
        // Sets the internal _password property
        this._password = value
    }
}

const hitesh = new User("Shivang@microsoft.com"," abc")
console.log(hitesh.email); // Output: SHIVANG@MICROSOFT.COM

/*
Key Explanations:
- Getters and setters allow you to define custom behavior when getting or setting a property.
- The actual data is stored in a different property (commonly prefixed with _), to avoid recursion.
- Getters can compute or transform values on the fly (e.g., always return uppercase).
- Setters can validate or preprocess values before storing them.
- Common pitfall: If you use the same property name inside the getter/setter, you'll get a stack overflow (infinite recursion).
- Real-world analogy: Getters/setters are like a smart mailbox—you can check (get) or deliver (set) mail, but the box controls how it's done.
- For interviews, be ready to explain why and when to use getters/setters, and how they help with encapsulation and data validation.
*/