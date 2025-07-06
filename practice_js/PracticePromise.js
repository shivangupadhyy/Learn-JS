// const randomPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         const shouldResolve = true;

//         if(shouldResolve){
//             resolve("hello world")
//         }else{
//             reject("error occoured")
//         }
//     },5000)
// })


// randomPromise.then((message)=>{
//     console.log(message)
// }).catch((error)=>{
//     console.log(error)
// })

// const value = 5;

// const double = (value) => new Promise((resolve) => resolve(value * 2))

// const addTen = (value) => new Promise((resolve) => resolve(value + 10))

// const multiplyByThree = (value)=> new Promise((resolve) => resolve(value * 3));

// double(value)
// .then(addTen)
// .then(multiplyByThree)
// .then((result) => {
//     console.log(result)
// })

// const delays = [800, 600, 1000];

// const fetchSimulator = (url, delay) =>{
//     return new Promise(resolve => setTimeout(()=> resolve(`Data from ${url}`), delay))
// }

// const data1  = fetchSimulator("https://crocoder.dev/data1", delays[0])
// const data2  = fetchSimulator("https://crocoder.dev/data1", delays[1])
// const data3  = fetchSimulator("https://crocoder.dev/data1", delays[2])

// Promise.race([data1, data2, data3])
// .then((Response) => {
//     console.log("this is the fastest response", Response)
// })

function createCancellationToken() {
    let cancel;
    const token = new Promise((_, reject) => {
        cancel = () => reject(new Error('Cancelled'));
    });
    return { token, cancel };
}

function fetchData(CancellationToken) {
    return new Promise((resolve, reject)=>{
        const timerID = setTimeout(()=>{
            resolve("Data Fetched")
        }, 3000)

        CancellationToken.token.catch(()=>{
            clearTimeout(timerID)
            reject(new Error("operation cancelled"));
        })
    })
}

const { token, cancel } = createCancellationToken();

const fetchPromise = fetchData(token);

// Simulate user cancellation after 1.5 seconds
setTimeout(() => {
    cancel();
}, 1500);

fetchPromise
    .then(data => console.log(data))
    .catch(error => console.error(error.message));