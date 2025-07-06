const score = 10;

// console.log(score);


const balance  = new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log( balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.853;
// console.log(otherNumber.toPrecision(4));

const hundred = 100000;
console.log(hundred.toLocaleString('en-IN'));


//++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-10));// 10 it returns the absolute value convert negative to positive
// console.log(Math.round(10.4)); // 10 it rounds to the nearest integer 
// console.log(Math.ceil(10.1)); // 11 it rounds up to the nearest integer beacause it is greater than 10.1
// console.log(Math.floor(10.9)); // 10 it rounds down to the nearest integer beacause it is less than 10.9    
// console.log(Math.sqrt(4)); // 2 it returns the square root of the number
// console.log(Math.min(1, 2, 3, 4, 5)); // 1 it returns the minimum value from the given numbers
// console.log(Math.max(1, 2, 3, 4, 5)); // 5 it returns the maximum value from the given numbers


// console.log(Math.random()); // 0.123456789 it returns a random number between 0 and 1
// console.log((Math.random() * 10) + 1); // 5.123456789 it returns a random number between 1 and 10

// console.log(Math.floor(Math.random()*10 +1)); // 5 it returns a random number between 1 and 10

const min = 20;
const max = 30;
// console.log(Math.floor(Math.random()* (max- min + 1)) + min)// 20 it returns a random number between 20 and 30
console.log(Math.floor(Math.random() * (max - min + 1)) + min)