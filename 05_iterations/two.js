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


// let i = 0;
// while(i <= 10){
//     console.log("while loop", i)

//     i = i + 1
// }

// DO-WHILE LOOP
// Syntax: do { ... } while(condition)
// The code block is executed at least once, even if the condition is false at the start.
// let score = 11
// do{
//     // console.log(`score is ${score}`)
//     score ++
// } while( score <=10 )



    // let array = ["shivang", "google", "sde"]
    // // let i = 0 
    // do{
    //     console.log("array is working", array[i] )
    //      i++
    // } while( i < array.length)

        let arr = ["d-6", "d-5","d-4", "d-3", "d-2"]
        for (const num of arr) {
            console.log(`tower number is ${num}`)
        }
// INTERVIEW TIPS:
// - while checks the condition before each iteration; do-while checks after.
// - do-while always runs at least once.
// - Use while/do-while when you don't know how many times you'll loop in advance.
// - Practice converting for loops to while and vice versa.


