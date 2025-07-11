const p1 = new Promise((resolve, reject) =>{
    // setTimeout(()=>{
    //     resolve("p1 is resolve sucess")
    // },3000)
    setTimeout(()=>{
        reject("p1 is fail sucess")
    },3000)
})
const p2 = new Promise((resolve, reject) =>{
    // setTimeout(()=>{
    //     resolve("p2 is resolve sucess")
    // },5000)
    setTimeout(()=>{
        reject("p2 is failed sucess")
    },1000)
})
const p3 = new Promise((resolve, reject) =>{
    // setTimeout(()=>{
    //     resolve("p3 is resolve sucess")
    // },2000)
    setTimeout(()=>{
        reject("p3 is failed sucess")
    },2000)
})

// Promise.all([p1, p2, p3]).then(res=>{
//     console.log(res);
// }).catch((err) => {
//     console.error(err)
// })
// Promise.allSettled([p1, p2, p3]).then(res=>{
//     console.log(res);
// }).catch((err) => {
//     console.error(err)
// })
// Promise.race([p1, p2, p3]).then(res=>{
//     console.log(res);
// }).catch((err) => {
//     console.error(err)
// })
Promise.any([p1, p2, p3]).then(res=>{
    console.log(res);
}).catch((err) => {
    console.error(err)
    console.log(err.errors[0])
})