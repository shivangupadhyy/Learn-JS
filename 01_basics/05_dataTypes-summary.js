// // primitive datatypes
// // string
// // number
// // boolean
// // null
// // undefined
// // symbol
// // bigint

// // const id = Symbol("123");
// // const anotherId = Symbol("123");
// // console.log(id === anotherId); // false
// //  console.log(typeof id); // symbol


// //  const bigNumber = 1212323434354n;// BigInt
// // BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1
// //  console.log(typeof bigNumber); 

// // reference datatypes  / non-primitive datatypes
// // Array
// // Object
// // Functions

// const heros = ["spider", "batman", "superman"];

// for(let i = 0; i<heros.length; i++){
//     const h1 = heros[i]
//     // console.log(h1)
// }

// // const myObj = {
// //     name : "shivang",
// //     age: 22,
    
// // }



// //  const myFunction =  function (){
// //     console.log("hello");
// // }

// // console.log(typeof heros); // object; 


// // console.log(typeof myObj); // object
// // console.log(typeof myFunction); // function
// // console.log(typeof null); // object
// // console.log(typeof undefined); // undefined
// // console.log(typeof 1); // number
// // console.log(typeof "shivang"); // string
// // console.log(typeof true); // boolean
// // console.log(typeof Symbol("123")); // symbol
// // console.log(typeof 1212323434354n); // bigint
// // console.log(typeof 1n); // bigint
// // console.log(typeof 1.2); // number
// // console.log(typeof 1.2n); // error


// // +++++++++++++++++++++++++++++++++++++++++++

// //stack (primitive) , heap(non-primitive) 
// // stack is a memory area where primitive data types are stored
// // heap is a memory area where non-primitive data types are stored
// let myName = "shivang";

// let anotherName = myName;

// anotherName = "Ayushi";

// // console.log(myName); // AYUSHI
// // console.log(anotherName); // SHIVANG

// let userOne ={
//     email : "user@gmail.com",
//     upi: "user@okhdfc",
// }

// let userTwo = userOne;

// userTwo.email = "shivang@gmail.com";
// // console.log(userOne.email); //
// // console.log(userTwo.email); //

// let userName = {
//     email: "Ayushi@gmail.com",
//     age: 22,
// }

// let userName2 = userName;

// userName2.email = "Shivang@gmail.com";
// console.log(userName.email); //
// console.log(userName2.email); //