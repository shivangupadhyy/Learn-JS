// FOR...OF LOOP IN JAVASCRIPT - INTERVIEW NOTES
// ---------------------------------------------
// The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.

// Example 1: Iterating over an array
// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
//     // Each element of the array is accessed one by one
// }

// Example 2: Iterating over a string
const greeting = "hello world!"
for (const greet of greeting) {
    // console.log(`values of greet ${greet}`)
    // Each character of the string is accessed one by one
}

// MAPS IN JAVASCRIPT
// ------------------
// Map is a collection of keyed data items, just like an Object. But the keys can be of any type.
// Maps are iterable and maintain the order of insertion.

const map = new Map()
map.set('IN', "India")
map.set('USA', "united States Of America")
map.set("fr", "France")

// Iterating over a Map using for...of
for (const [key, value] of map) {
   console.log(key, '-:', value)
    // Destructuring is used to get key and value directly
}


// for (const [key, value] of map) {
//     console.log(key, '-:', value)
    
// }

// Note: for...of does NOT work directly on plain objects
const myObject = {
    'game1' : 'GTA',
    'game2' : 'NFS'
}

// The following will throw an error because objects are not iterable with for...of
// for (const [key, value] of myObject) {
//     console.log(key, 'name is ', value)
// }

// INTERVIEW TIPS:
// - Use for...of for arrays, strings, maps, sets.
// - Use for...in for iterating over object keys (not recommended for arrays).
// - Map maintains insertion order and allows any type of key.
// - for...of with destructuring is powerful for maps and arrays of arrays.
// - Objects are not directly iterable with for...of; use Object.keys(), Object.values(), or Object.entries() for iteration.