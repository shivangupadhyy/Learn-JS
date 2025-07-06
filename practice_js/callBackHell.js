// ===============================
// Callback Hell in JavaScript — Interview Notes & Recap
// ===============================

// --- What is Callback Hell? ---
// Callback hell refers to a situation where callbacks are nested within other callbacks multiple levels deep.
// This leads to code that is hard to read, maintain, and debug ("pyramid of doom").

// --- Example of Callback Hell ---
// Imagine a sequence of async operations (like in an e-commerce checkout):
/*
api.createObject(cart, function () {
    api.procedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet();
        });
    });
});
*/
// Each step depends on the previous one, leading to deeply nested callbacks.

// --- Why is Callback Hell a Problem? ---
// - Code becomes difficult to read and maintain.
// - Error handling is complex.
// - Logic is hard to follow and scale.

// --- How to Avoid Callback Hell? ---
// - Use named functions instead of anonymous callbacks.
// - Modularize code into smaller functions.
// - Use Promises and async/await for better readability and error handling.

// --- Example: Using Promises (for comparison) ---
// api.createObject(cart)
//   .then(api.procedToPayment)
//   .then(api.showOrderSummary)
//   .then(api.updateWallet)
//   .catch(errorHandler);

// --- Interview Recap ---
// - Callback hell happens when you have many nested async callbacks.
// - It makes code hard to read and maintain.
// - Modern JavaScript uses Promises and async/await to solve this problem.
// - Be ready to explain and refactor callback hell code

// callback hell, callback

const cart = ["shoes", "pants", "kurta"];

// api.createObject(cart, function () {

//     api.procedToPayment(function () {

//         api.showOrderSummar(
            
//             function () {
//             api.updateWallet
//         })

//     })
// })


api.createObject(cart, function(){

    api.procedToPayment()

})


