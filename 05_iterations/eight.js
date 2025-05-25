const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

//console.log(myTotal)

const shoppingCart = [
    {
        item : "js course",
        price : 2999
    },
    {
        item : "py course",
        price : 3999
    },
    {
        item : "java course",
        price : 4999
    },
    {
        item : "mobile dev course",
        price: 5999
    },
]

const priceToPay = shoppingCart.reduce((acc, item ) => acc + item.price, 0)

console.log(priceToPay)