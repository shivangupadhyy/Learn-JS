// ===================== JavaScript Functions: Interview Notes & Explanations =====================
// Functions are reusable blocks of code that perform a specific task.
// They help organize code, avoid repetition, and make code modular.

// Function declaration (named function)
function sayMyName (){
    console.log("s")
    console.log("h")
    console.log("i")
}
// sayMyName() // Uncomment to call the function

// Parameters vs Arguments:
// - Parameters: variables listed in function definition (e.g., Number1, Number2)
// - Arguments: values passed to the function when called (e.g., 3, 4)

// Function with parameters and return value
function addTwoNumbers(Number1, Number2) {
    // let result = Number1 + Number2
    // return result
    return Number1 + Number2
}
// const result = addTwoNumbers(3, 4)
// console.log(`result : ${result}`)

// Default parameters and input validation
function loginUserMessage(username = "ayushi"){
    if(!username){
        console.log("enter the valid username")
        return
    }
    return `${username} just logged it`
}
// console.log(loginUserMessage()) // Output: ayushi just logged it

// Rest operator: collects remaining arguments into an array
// function calculateCartPrice (val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 300 , 400, 500)) // [300, 400, 500]

// function calculateCartPrice (...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 300)) // [200, 400, 300]

// Passing objects to functions
const user = {
    username : "Shivang",
    price : 199
}
function handleObject(anyobject){
    // console.log(`this is my name ${anyobject.username} and price are : ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username: "Shivang",
    price: 299
})

// Passing arrays to functions and returning values
const newArr = [200, 300, 400, 500]
function returnSecondValue(Arr){
    console.log(`second index value : ${Arr[1]}`)
    return Arr[1]
}
// returnSecondValue(newArr)
console.log(returnSecondValue(newArr))
console.log(returnSecondValue([200, 400, 600, 800 ]))

// ===================== Interview Notes =====================
// - Know how to declare, call, and return values from functions
// - Understand parameters vs arguments
// - Use default parameters for safer code
// - Use the rest operator for variable arguments
// - Pass objects and arrays to functions for flexibility
// - Practice returning values and using them in your code
// - Comment your code for clarity, especially for beginners!