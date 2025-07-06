// SWITCH STATEMENT IN JAVASCRIPT - INTERVIEW NOTES
// -----------------------------------------------
// The switch statement is used to perform different actions based on different conditions (matching cases).
// It is often used as a cleaner alternative to multiple if-else-if statements when checking the same variable.

// Syntax:
// switch (expression) {
//     case value1:
//         // code block
//         break;
//     case value2:
//         // code block
//         break;
//     default:
//         // code block
// }

// Important Points:
// - The switch expression is evaluated once and compared with each case value using strict comparison (===).
// - The break statement prevents the code from running into the next case (fall-through).
// - The default case is optional and runs if no case matches.

// Example with numbers (commented out):
// const month = 5;
// switch (month) {
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("feb")
//         break;
//     case 3:
//         console.log("march")
//         break;
//     case 4:
//         console.log("april")
//         break;
//     default:
//         console.log("default")
//         break;
// }

// Example with strings:
const month = "feb";
switch (month) {
    case "january":
        console.log("1")
        break;
    case "feb":
        console.log(2)
        break;
    case "march":
        console.log("3")
        break;
    case "april":
        console.log("4") 
        break;    
    default:
        console.log("default")
        break;
}

// INTERVIEW TIPS:
// - Know the difference between switch and if-else (switch is better for multiple fixed values).
// - Remember: switch uses strict comparison (===), so type matters.
// - If break is omitted, execution will continue to the next case (fall-through).
// - Default is like the else in if-else.