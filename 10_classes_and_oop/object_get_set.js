// --- JavaScript Object Getters and Setters Example ---
// This file demonstrates how to use getters and setters in plain JavaScript objects (not classes).
// Getters and setters allow you to control access to object properties, add validation, or compute values dynamically.

const User = {
    _email: "Shivang@google.com", // Internal property (convention: underscore prefix)
    _password : "abcc",           // Internal property

    // Getter for email property
    get email(){
        // Returns the email in uppercase (computed property)
        return this._email.toUpperCase();
    }, 

    // Setter for email property
    set email(id){
        // Sets the internal _email property
        this._email = id;
    }
}

// Usage example:
// console.log(User.email); // Output: SHIVANG@GOOGLE.COM
// User.email = "chai@example.com";
// console.log(User.email); // Output: CHAI@EXAMPLE.COM

/*
Key Explanations:
- Getters and setters can be used in plain objects as well as classes.
- The actual data is stored in a different property (commonly prefixed with _), to avoid recursion.
- Getters can compute or transform values on the fly (e.g., always return uppercase).
- Setters can validate or preprocess values before storing them.
- Common pitfall: If you use the same property name inside the getter/setter, you'll get a stack overflow (infinite recursion).
- Real-world analogy: Getters/setters are like a smart mailbox—you can check (get) or deliver (set) mail, but the box controls how it's done.
- For interviews, be ready to explain why and when to use getters/setters, and how they help with encapsulation and data validation.
*/