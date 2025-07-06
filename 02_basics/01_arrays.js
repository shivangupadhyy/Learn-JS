//array
//  () parenthies
// [] squar brackets
// {} curly brackets
// [] array
// {} object
// () function

const myArr = [0 ,1 , 2 , 3 , 4 , 5];
// console.log(myArr[0]); // 0
// console.log(myArr[1])
const myHeros = ['spiderman' , 'batman' , 'superman'];
// console.log(myHeros[2]); // spiderman

const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr2.length)

// array Methods

// myArr.push(6); // add to the end
// myArr.push(7); // add to the end
// myArr.pop(); // remove from the end

// myArr.unshift(9); // add element in the start
// myArr.shift(); //remove from   the start

// console.log(myArr.includes(9)); // check if the element is present in the array or not
// console.log(myArr.indexOf(9)); // check the index of the element in the array
// console.log(myArr.lastIndexOf(3)); // check the last index of the element in the array

 const newArr = myArr.join();

// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]
// console.log(newArr)
// console.log(typeof myArr); // object
// console.log(typeof newArr); // string\

//slice and splice
console.log("A", myArr);


const myn1 = myArr.slice(1, 3); // slice the array from index 1 to 3 it includes 1 and 2 excludes 3
console.log("B", myArr); // original array is not changed
console.log(myn1)

 const myn2 = myArr.splice(1, 3)
 console.log("C", myArr) // original array is changed
// // it will remove the elements from the original array and return the removed elements
 console.log(myn2) // it will remove the elements from the original array and return the removed elements