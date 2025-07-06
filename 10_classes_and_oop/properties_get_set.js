// --- JavaScript Getters and Setters with Object.defineProperty Example ---
// This file demonstrates how to use Object.defineProperty to add getters and setters to object properties in constructor functions.
// This approach gives you fine-grained control over property access, validation, and transformation.

// Constructor function for User objects
function User(email, password){
    // Internal properties (convention: underscore prefix)
    this._email = email
    this._password = password

    // Define a getter and setter for 'email'
    Object.defineProperty(this, 'email', {
        get : function(){
            // Getter: returns the email in uppercase (computed property)
            return this._email.toUpperCase()
        },
        set : function(value){
            // Setter: sets the internal _email property
            this._email = value
        }
    })

    // Define a getter and setter for 'password'
    Object.defineProperty(this, 'password', {
        get : function(){
            // Getter: returns the password in uppercase (for demo, not secure)
            return this._password.toUpperCase()
        },
        set : function(pass){
            // Setter: sets the internal _password property
            this._password = pass
        }
    })
}

const userId = new User("Shivang@gmail.com", "abs")
console.log(userId.email)    // Output: SHIVANG@GMAIL.COM
console.log(userId.password) // Output: ABS

/*
Key Explanations:
- Object.defineProperty allows you to add custom getters and setters to object properties.
- This is useful for validation, transformation, or encapsulation of internal data.
- The actual data is stored in a different property (commonly prefixed with _), to avoid recursion.
- Getters can compute or transform values on the fly (e.g., always return uppercase).
- Setters can validate or preprocess values before storing them.
- Common pitfall: If you use the same property name inside the getter/setter, you'll get a stack overflow (infinite recursion).
- For interviews, be ready to explain why and when to use Object.defineProperty, and how it helps with encapsulation and data validation.
*/