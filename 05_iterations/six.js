// Notes and explanations for interview and new learners:

// 1. forEach vs filter:
// forEach: Executes a function for each array element, but does NOT return a new array.
// filter: Returns a new array containing elements that pass the test (return true in callback).

// Example with forEach (does not return array):
// const coding = ["js", "ruby", "cpp", "java"]
// const values = coding.forEach((item)=>{
//     console.log(item)
//     return item // return value is ignored by forEach
// })

// Example with filter (returns array):
// const newNums = myNums.filter((num)=> num > 4)
// console.log(newNums) // [5,6,7,8,9,10]

// filter with block body requires explicit return:
// const newNums = myNums.filter((num) => {
//   return num > 4
// })
// console.log(newNums)

// forEach to build new array (not recommended, use filter instead):
// const newNums = []
// myNums.forEach( (num)  => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums)

// 2. Filtering objects in array:
// Array of book objects
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filter books published after 1995 and genre is History
let userbooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History"
})

// Filter books published after 1988 and genre is Non-Fiction
let userbook = books.filter((bk)=>{
  return bk.publish >= 1988 && bk.genre === "Non-Fiction"
})
console.log(userbook)

// Summary:
// - Use filter to create a new array based on a condition.
// - forEach is for executing code for each element, not for building arrays.
// - When filtering objects, you can use multiple conditions (e.g., year and genre).
// - Always use return in filter's callback if using curly braces.
// - Prefer filter over forEach+push for array filtering tasks.