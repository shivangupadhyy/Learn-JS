// FOR...IN LOOP IN JAVASCRIPT - INTERVIEW NOTES
// ---------------------------------------------
// The for...in loop is used to iterate over the enumerable properties (keys) of an object.
// It is best suited for objects, not arrays or maps.

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}


// for (const key in myObject) {
//      console.log(`${key} shortcuts are ${myObject[key]}`)
//     // Iterates over keys: js, cpp, rb, swift
// }

for(const key in myObject){
    //console.log(`objects keys are: ${key} and ${myObject[key]}`)
}

// for...in can be used with arrays, but it is not recommended because it iterates over keys (indexes), not values.
const programming = ["js", "rb", "swift", "java", "cpp"]
for (const key in programming) {
    // console.log(programming[key])
    // Iterates over indexes: 0, 1, 2, 3, 4
}

// for...in does NOT work with Map objects because Map is not enumerable in this way.
// const map = new Map() // not iterable with for...in
// map.set('IN', "India")
// map.set('USA', "united States Of America")
// map.set("fr", "France")
// for (const key in map) {
//    console.log(key) // This will not work
// }

// INTERVIEW TIPS:
// - Use for...in for objects, not for arrays or maps.
// - for...in iterates over keys (property names), not values.
// - for...of is better for arrays, strings, and maps.
// - Map and Set are not enumerable with for...in.
// - If you need both key and value from an object, use for...in and access value with obj[key].


// You can also use Object.keys() with .length to find the number of properties (length) of an object.
// console.log(Object.keys(myObject).length) // Output: 4