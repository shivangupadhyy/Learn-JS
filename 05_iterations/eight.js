// Array of numbers to sum
const myNums = [1, 2, 3]

// Using reduce to sum all numbers in the array
// acc: accumulator, curr: current value
// Initial value of accumulator is 0
// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
// myTotal will be 6 (1+2+3)
// const myTotal = myNums.reduce((acc, curr ) => acc+curr, 0)

// Example: Shopping cart with items and prices
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
const pricepay = shoppingCart.reduce((acc, item)=> acc + item.price, 0)

// Using reduce to calculate total price from shoppingCart
// acc: accumulator (total so far), item: current object in array
// Initial value of acc is 0
// const priceToPay = shoppingCart.reduce((acc, item ) => acc + item.price, 0)
// priceToPay will be the sum of all course prices

console.log(pricepay) // Output: 17996