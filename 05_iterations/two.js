// WHILE AND DO-WHILE LOOPS IN JAVASCRIPT - INTERVIEW NOTES
// --------------------------------------------------------

// WHILE LOOP
// Syntax: while(condition)//{ ... }
// // Used when the number of iterations is not known in advance.
// let i = 0
// while (i <= 10) {
//     console.log(`value of index ${i}`)
//     i = i + 2
// }

// Iterating over arrays with while
// let myArray = ["flash", "superman", "Siperman"]
// let i = 0
// while (i < myArray.length){
//     console.log(`value of array ${myArray[i]}`)
//     i  = i + 1
// }

// DO-WHILE LOOP
// Syntax: do { ... } while(condition)
// The code block is executed at least once, even if the condition is false at the start.
let score = 11
do{
    console.log(`score is ${score}`)
    score ++
} while( score <=10 )

// INTERVIEW TIPS:
// - while checks the condition before each iteration; do-while checks after.
// - do-while always runs at least once.
// - Use while/do-while when you don't know how many times you'll loop in advance.
// - Practice converting for loops to while and vice versa.