// --- Object Property Descriptors and Math.PI Example ---
// This file demonstrates how to inspect and modify property descriptors in JavaScript objects, including built-in objects like Math.
// Property descriptors control how properties behave (writable, enumerable, configurable).

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// Inspect the property descriptor for Math.PI
// Math.PI is a read-only, non-enumerable, non-configurable property
// console.log(descripter)

console.log(Math.PI) // Output: 3.141592653589793

// Example object
const chai = {
    name: "ginger chai",
    price: 250,
    isAvaiable: true,
    orderchai: function(){
        console.log(`chai nhi baane`)
    }
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, "name")) // Shows descriptor for 'name'

// You can change property descriptors using Object.defineProperty
// For example, make 'name' non-writable and non-enumerable:
// Object.defineProperty(chai, "name",{
//     writable: false,
//     enumerable: false
// })
// Now, 'name' cannot be changed and won't show up in for...of or Object.entries
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}

/*
Key Explanations:
- Object.getOwnPropertyDescriptor(obj, prop) lets you inspect how a property behaves (writable, enumerable, configurable, value).
- Math.PI is a good example: it's read-only and can't be changed or deleted.
- Object.defineProperty lets you change these settings for your own objects.
- Non-enumerable properties won't show up in loops like for...in or Object.entries.
- Real-world analogy: Property descriptors are like access permissions for object properties.
- Common pitfall: Trying to change a non-writable or non-configurable property will fail silently or throw an error in strict mode.
*/