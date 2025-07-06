// ===============================
// Promises in JavaScript — Interview Notes & Recap
// ===============================

// --- What is a Promise? ---
// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Think of it as a placeholder for a value that will be available in the future (a "container for a future value").

// --- Why are Promises Important? ---
// - They help manage asynchronous code in a more readable and maintainable way than callbacks.
// - Promises solve "callback hell" by allowing chaining of async operations.
// - They provide built-in error handling with .catch().

// --- Promise States ---
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// --- Basic Usage Example ---
// Synchronous callback style (callback hell):
const cart = ["shoes", "pants", "kurta"];
createOrder(cart, function(orderID){
    proccedToPayment(orderID);
});

// Promise style (cleaner and chainable):
const promise = createOrder(cart); // createOrder returns a Promise

promise.then(function(orderID){
    proccedToPayment(orderID);
});

// Chaining multiple async operations with Promises:
createOrder(cart)
    .then(function(orderID){
        return proccedToPayment(orderID);
    })
    .then(function(paymentInfo){
        return showorderSummary(paymentInfo);
    })
    .then(function(paymentInfo){
        return updateWalletBalance(paymentInfo);
    })
    .catch(function(error){
        // Handle any error in the chain
        console.log(error);
    });

// --- Real World Example: Fetch API returns a Promise ---
const GITHUB_API = "https://api.github.com/users/akshaymarch7";
const user = fetch(GITHUB_API); // fetch returns a Promise

console.log(user); // Logs a Promise object

user.then(function(data){
    console.log(data); // Logs the response when the Promise resolves
});

// --- Key Interview Points ---
// - Promises represent the eventual result of an async operation.
// - Use .then() for success, .catch() for errors, and .finally() for cleanup.
// - Promises can be chained for sequential async operations.
// - Promises help avoid callback hell and make async code more readable.
// - Be able to explain promise states and how to use them in real

