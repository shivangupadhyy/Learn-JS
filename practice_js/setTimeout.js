// ===============================
// setTimeout, Event Loop, and "Trust Issues" — Interview Notes
// ===============================

// --- setTimeout and the Event Loop ---
// setTimeout schedules a callback to run after a minimum delay, but the actual execution depends on the event loop and call stack state.

// --- Example: Basic setTimeout ---
console.log("start");

function cb() {
    console.log("callback");
}
cb(); // Runs immediately

setTimeout(cb, 0); // Schedules cb to run "as soon as possible" after the current call stack is empty

console.log("End");

// --- Why setTimeout has "trust issues" ---
// Even with setTimeout(cb, 0), the callback does NOT run immediately after 0ms.
// It is placed in the callback queue and will only run after the call stack is empty.

// --- Blocking the Call Stack Example ---
// The following loop blocks the main thread for ~10 seconds:
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}
console.log("while expires");

// If setTimeout(cb, 0) was called before this loop, the callback will only run AFTER the loop finishes, not after 0ms.

// --- Key Interview Points ---
// - setTimeout does NOT guarantee exact timing; it only guarantees a minimum delay.
// - If the call stack is busy (e.g., with a long loop), setTimeout callbacks are delayed.
// - JavaScript is single-threaded; long-running code blocks everything, including UI and timers.
// - setTimeout(cb, 0) is often used to defer execution until after the current call stack is clear.

// --- Recap ---
// - Understand how setTimeout interacts with the event loop and call stack.
// - Be able to explain why setTimeout(cb, 0) does not run "immediately".
// - Know that blocking code delays all async callbacks and UI
