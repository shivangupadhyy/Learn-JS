// * what is Async?
// * what is await ?
// * now async await works behind the scennes?
// * examples of using async/await
// *Error Handling
// *interviews
// *aysnc await vs promise.then/.catch

// const p = new Promise((resolve, reject) =>{
//     resolve
//     ("Promise Resolved Value");
// })

// async function getData(){
//     return p;
// }

// const dataPromise = getData()
// dataPromise.then((res) => console.log(res))
// // console.log(data)

//using async and await

// const p = new Promise((resolve, reject)=>{
//     resolve("Promise Resolved Value")
// });

// async function handlepromise(){
//   const val = await p;///await can be only keyword which is used inside the asyn function
//   console.log(val)
// }
// handlepromise()


// function getData(){
//     p.then((res)=>console.log(res))
// }

// getData();

const p =new Promise((Resolve, Reject)=>{
    setTimeout(() => {
        Resolve("Promise Resolved value!")
    }, 2000);
})

async function handlepromise(){
    console.log("Hello world")
    //js engine was waiting for promise to resolve
    const val = await p;
console.log("Namste Javascript")
    console.log(val)

    const val2 = await p;
    console.log("Namaste javascript")
    console.log(val2)
}

handlepromise();

// function getData(){

//     // js engine is not wait for promise to be resolved
//     p.then((res)=> console.log(res));
//     console.log("Namaste Javascript")
// }
// getData()