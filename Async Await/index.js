// * What is Async?
//   - 'async' is a keyword used to declare asynchronous functions.
//   - An async function always returns a Promise.
//   - Enables use of 'await' inside the function.

// * What is Await?
//   - 'await' is used to pause execution until a Promise is settled (resolved or rejected).
//   - Can only be used inside async functions.
//   - Makes asynchronous code look and behave like synchronous code.

// * How does async/await work behind the scenes?
//   - Async functions return Promises.
//   - 'await' pauses the function execution until the awaited Promise resolves.
//   - The rest of the code after 'await' runs only after the Promise is resolved.

// * Example using async/await:
const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value");
});

// Async function returning a Promise
async function getData() {
    return p; // Equivalent to: return Promise.resolve("Promise Resolved Value");
}

// Consuming the async function with .then()
const dataPromise = getData();
dataPromise.then((res) => console.log(res)); // Output: Promise Resolved Value

// Using async/await for better readability
async function handlePromise() {
    const val = await p; // Waits for p to resolve
    console.log(val);    // Output: Promise Resolved Value
}
handlePromise();

// * Error Handling with async/await
// async function fetchData() {
//     try {
//         const response = await fetch("https://api.github.com/users/shivangupadhyy");
//         const json = await response.json();
//         console.log(json);
//     } catch (error) {
//         console.log(error); // Handles network or parsing errors
//     }
// }
// fetchData();

async function  getProfileInfo() {
    const response  = await fetch("https://api.github.com/users/shivangupadhyy");
    const json = await response.json();
    console.log(json);
}
getProfileInfo()

// * Async/Await vs Promise.then/.catch
//   - async/await makes code easier to read and maintain.
//   - .then/.catch can lead to callback hell if chaining multiple promises.
//   - Error handling with try/catch is more intuitive with async/await.

// * Interview Tips:
//   - async functions always return a Promise.
//   - await can only be used inside async functions.
//   - Use try/catch for error handling with async/await.
//   - async/await is syntactic sugar over Promises.
//   - Useful for writing cleaner asynchronous code.

//async is a keyword which is used with function and async funcations are a differernt thing and then tell them that await a can be used only inside async function to handle promisese and these promises are asynchronous

// * Summary:
//   - Use async/await for better readability and maintainability.
//   - Always handle errors with try/catch in async functions.
//   - Understand how Promises work, as async/await is built


