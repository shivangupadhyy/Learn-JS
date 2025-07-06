// ===============================
// JavaScript Event Loop, Async JS & Interview Notes
// ===============================

// --- Asynchronous JavaScript & The Event Loop ---
// JavaScript is single-threaded (one call stack), but can handle async operations using the event loop.

// --- Web APIs (provided by the browser) ---
// These are NOT part of JavaScript itself, but are provided by the browser environment:
// - setTimeout / setInterval
// - DOM APIs (document, window, etc.)
// - fetch() for AJAX/network requests
// - localStorage/sessionStorage
// - console
// - location
// When you use these, JS hands off the work to the browser, which manages it outside the call stack.

// --- Call Stack ---
// The call stack is where JS executes code line by line (LIFO: Last In, First Out).
// Only one thing runs at a time in the call stack.

// --- Callback Queue (Task Queue) ---
// When async tasks (like setTimeout, click events) finish, their callbacks go to the callback queue.
// The event loop moves these callbacks to the call stack when it's empty.

// --- Microtask Queue ---
// Holds microtasks: promise .then/.catch/.finally callbacks, MutationObserver, etc.
// Microtasks have higher priority than the callback queue: all microtasks are processed before the next callback/task.

// --- Event Loop ---
// The event loop constantly checks if the call stack is empty.
// If empty, it first processes all microtasks, then moves one callback from the callback queue to the call stack.

// --- Promises & MutationObserver ---
// Promise callbacks (.then/.catch) and MutationObserver callbacks go to the microtask queue, not the callback queue.

// --- Example Order ---
// 1. JS runs code in the call stack.
// 2. Async tasks (setTimeout, fetch, etc.) are handed to Web APIs.
// 3. When ready, their callbacks go to the callback queue (or microtask queue for promises).
// 4. Event loop moves microtasks first, then callbacks, to the call stack for execution.

// --- Interview Recap ---
// - Understand the difference between call stack, callback queue, and microtask queue.
// - Know that promises/mutation observers use the microtask queue (higher priority).
// - Be able to explain how the event loop enables async behavior in single-threaded JS.
// - Know that Web APIs are provided by the browser, not JS itself.
// - Practice tracing code execution order with setTimeout,