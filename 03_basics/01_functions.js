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

// console.log(loginUserMessages("Ayushi"))
// // console.log(loginUserMessages())// it will console undefined