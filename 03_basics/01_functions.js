// function sayMyName (){
//     console.log("s")
//     console.log("h")
//     console.log("i")

// }
// sayMyName()
                       //parameter
// function addTwoNumbers(Number1, Number2) {
//     console.log(Number1 + Number2)
// }
              // argumentes

  function addTwoNumbers(Number1, Number2) {
    // let result = Number1 + Number2
    // return result

    return Number1 + Number2

}
// const result = addTwoNumbers(3, 4)
// console.log(`result : ${result}`)

function  loginUserMessages(username = "Shivang"){
    if(!username){
        console.log("plz enter a username")
        return
    }
    return `${username} just logged in`

}
// console.log(loginUserMessage()) // Output: ayushi just logged it

// console.log(loginUserMessages("Ayushi"))
// // console.log(loginUserMessages())// it will console undefined


// function calculateCartPrice (val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 300 , 400, 500))// so 200= val1, 400 = val2, and rest goes to rest operator 


// function calculateCartPrice (...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 300))

const user = {
    username : "Shivang",
    price : 199
}

function handleObject(anyobject){
    console.log(`this is my name ${anyobject.username} and price are : ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username: "Shivang",
    price: 299
})

const newArr = [200, 300, 400, 500]

function returnSecondValue(Arr){
    // console.log(`second index value : ${Arr[1]}`)
    return Arr[1]

}

// returnSecondValue(newArr)
// console.log(returnSecondValue(newArr))
console.log(returnSecondValue([200, 400, 600, 800 ]))



