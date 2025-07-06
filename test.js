// --- JavaScript Array Internals: SMI, Double, Packed, and Holey Arrays ---
// This file explores how JavaScript engines (like V8) optimize arrays based on their contents and structure.
// Understanding these concepts is useful for interviews and for writing high-performance JavaScript code.
// Real-world analogy: Think of arrays as boxes. If you keep the box neat (no holes, same type), it's easy to handle. If you poke holes or mix types, it's harder and slower to use.

// SMI (Small Integer) arrays are the most optimized (fastest) in V8.
// If you add floats, strings, or leave holes, the engine changes the internal representation, which can slow things down.

const myArr = [];
// %DebugPrint(myArr) // V8-specific: shows internal array type (not for browsers)

// Continuous vs. Holey arrays
// Continuous: All indices filled, no gaps (fastest)
// Holey: Some indices missing (slower)

// SMI (Small Integer) - all elements are small integers
// Packed element - no holes, all elements present
// Double - contains floats, strings, or other types

const arrTwo = [1, 2, 3, 4, 5]; // packed_SMI_elements (fastest)

arrTwo.push(6.0); // Now contains a float, may become packed_double_elements
arrTwo.push('7'); // Now contains a string, becomes packed_elements (less optimized)

arrTwo[10] = 11; // Creates holes (indices 6-9 are empty), becomes holey_elements (slowest)

console.log(arrTwo);
console.log(arrTwo.length); // 11
console.log(arrTwo[9]); // undefined (hole)
console.log(arrTwo[19]); // undefined (out of bounds, costly to access)

// Bound check examples (not actual code):
// hasOwnProperty(arrTwo, 9) // false (hole)
// hasOwnProperty(arrTwo.prototype, 10) // false
// hasOwnProperty(Object.prototype, 10) // false

// Holes are very expensive in JS arrays because the engine can't optimize them as well.

const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[2]); // 3

// SMI > DOUBLE > PACKED (order of optimization)
// H_SMI > H_DOUBLE > H_PACKED (holey versions, less optimized)

const arrFour = new Array(3); // Creates an array with 3 holes (all undefined)
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1'; // Now contains a string, still holey_elements
arrFour[1] = '2';
arrFour[2] = '3';

const arrFive = [];
arrFive.push('1'); // packed_ELEMENTS (no holes, all present)
arrFive.push('2');
arrFive.push('3');

const arrSix = [1, 2, 3, 4, 5];
arrSix.push(Infinity); // Adding a special value, still packed (but not SMI)

// Iteration best practices:
// Use for, for-of, or forEach for array iteration. Avoid creating holes for best performance.
// for (let i = 0; i < arrSix.length; i++) { ... }
// for (const val of arrSix) { ... }
// arrSix.forEach(val => { ... });

/*
Key Interview Points:
- Arrays with only small integers and no holes are fastest (packed SMI).
- Adding floats, strings, or holes makes arrays slower (packed double, packed, or holey).
- Accessing holes (undefined indices) is slower and less predictable.
- Always prefer continuous, type-consistent arrays for performance.
- Time complexity: Access is O(1), but holes and mixed types can make real-world performance much worse.
- Edge case: Setting a high index (e.g., arr[1000] = 1) creates a large, sparse array (lots of holes).
- For interviews: Be ready to explain why holes and mixed types are bad for performance, and how JS engines optimize arrays.
*/