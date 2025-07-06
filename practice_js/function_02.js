// ===============================
// JavaScript Callbacks, Event Listeners, Closures & Interview Notes
// ===============================

// --- Callback Functions ---
// A callback is a function passed as an argument to another function, to be "called back" later.
// Used for async operations, event handling, etc.

setTimeout(function() {
    console.log('timer'); // This function runs after 5 seconds (asynchronously)
}, 5000);

// Example: Passing a function as a callback
function x(y) {
    console.log("x");
    y(); // 'y' is called as a callback
}
x(function y() {
    console.log("y");
});

// --- JavaScript is Synchronous and Single-Threaded ---
// JS executes code line by line (synchronously) and has only one call stack (single-threaded).
// Long-running/blocking code can freeze the main thread and UI.

// --- Power of Callbacks ---
// Callbacks enable asynchronous programming (e.g., timers, AJAX, event handling).
// They allow code to run after an operation completes, without blocking the main thread.

// --- Event Listeners ---
// Event listeners are functions that run in response to user actions (clicks, input, etc.).
// They use callbacks to handle events asynchronously.

// Example: Adding an event listener
// document.getElementById('clickMe').addEventListener('click', function xyz() {
//     console.log('button clicked');
// });

// --- Closures with Event Listeners ---
// Closures allow event listeners to "remember" variables from their outer scope, even after the outer function has finished.

function attachEventListeners() {
    let count = 0; // 'count' is private to this function
    document.getElementById("clickMe").addEventListener('click', function xyz() {
        ++count;
        console.log("Button Clicked", count); // 'count' is remembered due to closure
    });
}
attachEventListeners();

// Each time the button is clicked, 'count' is incremented and logged.
// The callback function forms a closure over 'count'.
