// ITERATION IN JAVASCRIPT - INTERVIEW NOTES
// -----------------------------------------
// JavaScript provides several ways to loop/iterate over data: for, while, do-while, for...of, for...in, etc.

// FOR LOOP
// Syntax: for(initialization; condition; increment){ ... }
// Used when the number of iterations is known.
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is  the best number")
    }
    // console.log(element)
}

// NESTED FOR LOOPS
// Useful for working with matrices, tables, or generating multiplication tables.
for (let i = 1; i <= 10; i++){
    // console.log(`Outter loop value: ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value :  ${j}  and inner loop ${i}`)
        // console.log(i + '*' + j + " = "  + i*j);
    }
}

// LOOPING THROUGH ARRAYS
let myArray = [ "flash", "SuperMan", "SpiderMan"]
for(let i = 0; i < myArray.length; i++){
    const element = myArray[i]
    //console.log(element)
}

// BREAK AND CONTINUE
// break: exits the loop completely
// continue: skips the current iteration and continues with the next
// for (let i = 1; i<=20; i++){
//     if (i == 5){
//         console.log(`detected 5`)
//         break;
//     }
//     console.log(`value of i ${i}`)
// }
for (let i = 1; i<=20; i++){
    if (i == 5){
        console.log(`detected 5`)
        continue;
    }
    console.log(`value of i ${i}`)
}

// INTERVIEW TIPS:
// - Know the difference between for, while, and do-while loops.
// - Use break to exit a loop early, continue to skip an iteration.
// - for loops are best when the number of iterations is known.
// - while and do-while are better when the number of iterations is not known in advance.
// - Practice nested loops and array iteration.