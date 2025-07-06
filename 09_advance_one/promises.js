// Notes and explanations for interview and new learners:

// 1. Creating a Promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task (e.g., DB calls, cryptography, network)
    setTimeout(function(){
        // console.log('async task is complete');
        resolve() // Call resolve when async task is done
    }, 1000)
})

// Consuming a Promise with .then()
promiseOne.then(function(){
    // console.log('promise consumed')
})

// 2. Creating and consuming a Promise in one go
new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("async task 2 is completed")
        resolve()
    }, 1000)
}).then(function(){
    // console.log("async 2 resolve")
})

// 3. Passing data with resolve
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName : "shivang", email : "Run@example.com"})
    },1000)
})

promiseThree.then(function(user){
    // console.log(user) // Receives the object passed to resolve
})

// 4. Handling errors with .catch() and .finally()
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             console.log("error resolved")
//             resolve()
//         } else{
//             console.log("error occured")
//             reject()
//         }
//     },1000)
// })

// promiseFour.then(function(){
//     console.log("error resolved finally")
// })

// promiseFour.catch(function(){
//     console.log("error occured h")
// })

// 5. Chaining .then() and using .catch() and .finally()
// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username: "Shivang", password : "123"})
//         }else{
//             reject('ERROR : Somthing went wrong')
//         }
//     }, 1000);
// })

//  promiseFive.then((user)=>{
//     console.log(user)
//     return user.password
// }).then((password)=>{
//     console.log(password)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>{
//     console.log("the promise is either rejected or resolved")
// })

// 6. Using async/await with Promises
// const promiseSix = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"Javascript", password: "1234"})
//         }else{
//             reject('ERROR : Something went wrong in JS')
//         }
//     },1000)
// })

// async function consumePromiseSix(){
//  try {
//      const response =   await promiseSix
//   console.log(response)
//  } catch (error) {
//     console.log(error)
//  }
// }

// consumePromiseSix()

// 7. Fetch API with async/await
// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =  await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E:', error)
//     }
// }
// getAllUser()

// 8. Fetch API with .then(), .catch(), .finally()
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// })
// .catch(()=>{
//     console.log("error is occured")
// })
// .finally(()=>{
//     console.log("finally resolved or rejected")
// })

/*
Summary:
- Promises represent the eventual completion (or failure) of an async operation.
- Use .then() to handle resolved values, .catch() for errors, and .finally() for cleanup.
- You can chain .then() for sequential async steps.
- async/await syntax makes working with Promises easier and more readable.
- Fetch API returns a Promise, so you can use .then() or async/await to handle responses.
- Always handle errors with .catch() or try/catch (with async/await).
*/