// forEach METHOD IN JAVASCRIPT - INTERVIEW NOTES
// ----------------------------------------------
// forEach is an array method used to execute a provided function once for each array element.
// It does not return a new array (unlike map, filter, etc.).
// Syntax: array.forEach(callback(currentValue, index, array))

const coding = ["js", "ruby", "java", "python", "cpp"]

// Example 1: Using forEach with an anonymous function
// coding.forEach(function(val) {
//     console.log(val)
// })

const superHeros = ["flash", "superhero", "iron man", "batman"]

// superHeros.forEach(function(hero){
//     console.log(hero)
// })

superHeros.forEach((hero)=>{
    // console.log(hero)
})

// Example 2: Using forEach with an arrow function
// coding.forEach((val) => {
//     //console.log(val)
// })

// Example 3: Passing a named function to forEach

function printHero(hero){
    // console.log(hero)
}
superHeros.forEach(printHero)


function printMe(item) {
    // console.log(item);
}
// coding.forEach(printMe)

// Example 4: Accessing value, index, and array in forEach
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

// forEach with array of objects
const myCoding = [
    { languageName: "javascript", languageFileName: "js" },
    { languageName: "java", languageFileName: ".java" },
    { languageName: "Cpp", languageFileName: "c++" },
]

// myCoding.forEach((item) =>{
//     console.log(item.languageFileName)
// })

// myCoding.forEach((item) => {
//     // console.log(item.languageFileName)
// })

// INTERVIEW TIPS:
// - forEach does not return anything (undefined), so you can't chain it like map/filter.
// - You cannot break or return early from a forEach loop (use for...of or for loop if you need to break).
// - forEach is best for side effects (like logging, updating UI, etc.).
// - forEach can access value, index, and the whole array.
// - forEach works only on arrays, not on objects or maps directly.