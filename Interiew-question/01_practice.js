// ===============================
// Closures, Data Hiding, Encapsulation, and Garbage Collection
// Interview Recap & Notes
// ===============================

// --- Closures ---
// A closure is a function that "remembers" its lexical scope even when executed outside that scope.
// This allows inner functions to access variables from their parent (outer) function even after the parent has finished executing.

// Example: Closure with lexical scope
function outest() {
    var c = 20;
    function outer(b) {
        // let a = 10; // If commented out, JS will look for 'a' in a higher scope (global)
        function inner() {
            console.log(a, b, c); // inner has access to a, b, c
        }
        return inner;
    }
    return outer;
}

let a = 100;
// outest()("hello world")(); // Demonstrates closure and scope chain

// --- Data Hiding & Encapsulation with Closures ---
// Using closures, we can create private variables and expose only specific methods, achieving encapsulation.

function Counter() {
    var count = 0; // 'count' is private to Counter

    // Public method to increment count
    this.inncrementCounter = function () {
        count++;
        console.log(count);
    }
    // Public method to decrement count
    this.decrementCounter = function () {
        count--;
        console.log(count);
    }
}

// Usage example:
var counter1 = new Counter();
// counter1.inncrementCounter(); // 1
// counter1.decrementCounter();  // 0
// Note: 'count' is not accessible directly from outside

// --- Disadvantages of Closures ---
// Closures can lead to increased memory usage because variables referenced by closures are not garbage collected
// until the closure itself is released. Overusing closures may cause memory leaks in large applications.

// --- Garbage Collection ---
// JavaScript's garbage collector automatically frees memory that is no longer referenced.
// Variables that are not used by any active closure or function can be garbage collected.

// --- Relation between Closures and Garbage Collection ---
// Only variables actually used by the closure are retained in memory.
// Unused variables in the closure's scope can be garbage collected.

function a() {
    var x = 0, z = 10; // 'z' is not used in the closure, so it can be garbage collected
    return function b() {
        console.log(x); // Only 'x' is retained by the closure
    }
}

var y = a();
y(); // prints 0

// --- V8 Engine ---
// The V8 JavaScript engine (used in Chrome and Node.js) optimizes closures and garbage collection.
// It ensures only variables referenced by closures are kept in memory, improving performance.

// --- Interview Recap ---
// - Closures allow functions to access variables from their parent scope even after the parent has finished executing.
// - Closures are used for data hiding and encapsulation (private variables).
// - Be mindful of memory usage with closures; unused variables are garbage collected, but referenced ones are kept.
// - Practice explaining and writing closure-based patterns for interviews!

// --- Practice: Try writing your own closure-based counter or data-hiding pattern
