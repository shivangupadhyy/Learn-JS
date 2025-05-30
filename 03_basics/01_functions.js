// Function to print individual characters of "shi"
function sayMyName() {
    console.log("s");
    console.log("h");
    console.log("i");
}

// sayMyName() // Uncomment to call the function

// Function to add two numbers with parameters
function addTwoNumbers(Number1, Number2) {
    // Calculate the sum and return the result
    return Number1 + Number2;
}

// const result = addTwoNumbers(3, 4) // Example of calling the function
// console.log(`result : ${result}`) // Uncomment to display the result

// Function to display a login message with a default username
function loginUserMessages(username = "Shivang") {
    // Check if username is provided
    if (!username) {
        console.log("plz enter a username");
        return; // Exit if username is not provided
    }
    // Return login message
    return `${username} just logged in`;
}

// console.log(loginUserMessages("Ayushi")) // Example of passing a username
// console.log(loginUserMessages()) // Example to see default username behavior

// Function to demonstrate the use of the rest parameter
function calculateCartPrice(val1, val2, ...num1) {
    // Rest parameter captures all additional arguments
    return num1;
}

// console.log(calculateCartPrice(200, 400, 300, 400, 500))
// Output will have remaining values beyond first two parameters

// Function to demonstrate rest parameter without initial values
function calculateCartPrice(...num1) {
    return num1; // Returns the entire array of arguments
}

// console.log(calculateCartPrice(200, 400, 300)) // Example output: [200, 400, 300]

// Object representing a user
const user = {
    username: "Shivang",
    price: 199
};

// Function to handle and display object properties
function handleObject(anyobject) {
    console.log(`this is my name ${anyobject.username} and price are : ${anyobject.price}`);
}

// handleObject(user) // Example of passing an object
handleObject({
    username: "Shivang",
    price: 299
}); // Example of passing a new object directly

// Array for demonstrating array operations
const newArr = [200, 300, 400, 500];

// Function to return the second value of an array
function returnSecondValue(Arr) {
    // Access the second element using index 1
    return Arr[1];
}

// console.log(returnSecondValue(newArr)) // Example of passing predefined array
console.log(returnSecondValue([200, 400, 600, 800])); // Example with inline array