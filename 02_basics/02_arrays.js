const marvel_heros = ["ironman", "spiderman", "hulk", "thor", "black widow"];
const dc_heros = ["batman", "superman", "wonder"];

// marvel_heros.push(dc_heros); // add dc_heros to the end of marvel_heros 
// it push in existing array

// console.log(marvel_heros) //it cnosider whole dc_heros array as one array
// console.log(marvel_heros[5][0]) 


// const allHearos = marvel_heros.concat(dc_heros)
// console.log(allHearos)
// //concat it return a new array



// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

// const another_arr = [1, 2, 3, [4, 5, 6, 7], 6, 5,[5, 6,[5,8 ]]]

// const real_arr = another_arr.flat(Infinity) // it will flatten the array
// console.log(real_arr) // it will flatten the array

// console.log(Array.isArray("shivang")) // it will check if the value is array or not
// console.log(Array.isArray(another_arr)) // it will check if the value is array or not
// console.log(Array.from("shivang")) // it will convert the string to array

// console.log(Array.from({name: "shivang"})) // it will convert the object to array

let score1 = 100;
let score2 = 200;
let score3 = 300;
 console.log(Array.of(score1, score2, score3)) // it will convert the values to array


 let marks1 = 80;
 let marks2 = 79;
 let marks3 = 99;
 console.log(Array.of(marks1, marks2, marks3))