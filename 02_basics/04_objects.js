// ===================== JavaScript Objects: Interview Notes & Explanations =====================
// Objects are key-value pairs used to store and organize data.
// There are two main ways to create objects:
// 1. Singleton object (using new Object())
// 2. Object literal (using {})

// const tinderUser =  new Object() // singleton object 
const tinderUser = {} // nonsingleton Object (object literal)

// Adding properties to an object
tinderUser.id = "123abc"
tinderUser.name = "shivang"
tinderUser.age = 22
tinderUser.isLoggedIn = false

// console.log(tinderUser); // Print the object

// Nested objects: objects inside objects
const regularUser = {
    email : "Shivang@gmail.com",
    Fullname: {
        username: {
            firstname: "shivang",
            lastname: "upadhyay"
        }
    }
}
// Accessing nested properties:
// console.log(regularUser.Fullname.username);

// Merging objects (shallow copy)
const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4 : "d", 5: "e", 6: "f"}
// const obj3 = Object.assign({}, obj1, obj2) // ES5 way
const obj3 = {...obj1, ...obj2} // ES6 spread operator (recommended)
// console.log(obj3);

// Object utility methods:
// Object.keys(obj) - returns array of keys
// Object.values(obj) - returns array of values
// Object.entries(obj) - returns array of [key, value] pairs
// obj.hasOwnProperty('key') - checks if property exists
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("name"));

// Object destructuring: extract properties into variables
// const course = {
//    courseName: "javascript",
//    coursePrice: "199",
//    courseInstructor: "shivang"
// }
// const {courseName: Name} = course // destructuring with alias
// console.log(Name); // javascript

// Function parameter destructuring example:
// const navbar = ({company}) => {
// }
// navbar( company = "Shivang") // function expression

// JSON structure (commonly used for data exchange):
// {
//     "name": "shivang",
//     "coursename": "javascript",
//     "coursePrice": "199",
//     "courseInstructor": "shivang",
// }

// ===================== Interview Notes =====================
// - Know how to create, access, and update objects
// - Understand nested objects and how to access deep properties
// - Be able to merge objects and use spread operator
// - Use Object utility methods for keys, values, and entries
// - Understand object destructuring for cleaner code
// - Recognize JSON as a data format (not a JS object, but similar syntax)
// - Practice checking property existence with hasOwnProperty
// - Be able to explain shallow vs deep copy
// - Comment your code for clarity, especially for beginners!