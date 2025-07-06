// ===============================
// Array map, filter, reduce — Interview Notes & Recap
// ===============================

// --- Sample Data ---
const arr = [5, 1, 3, 2, 6];

// --- map() ---
// map() creates a new array by applying a function to every element.
// Example: Double, triple, or convert to binary
// const output1 = arr.map(x => 2 * x); // [10, 2, 6, 4, 12]
// const output2 = arr.map(x => 3 * x); // [15, 3, 9, 6, 18]
// const output3 = arr.map(x => x.toString(2)); // ["101", "1", "11", "10", "110"]

// --- filter() ---
// filter() creates a new array with elements that pass a test (returns true).
// Example: Filter odd, even, or numbers greater than 4
// const output = arr.filter(x => x % 2); // Odd numbers
// const output = arr.filter(x => x % 2 === 0); // Even numbers
// const output = arr.filter(x => x > 4); // Numbers greater than 4

// --- reduce() ---
// reduce() reduces the array to a single value by accumulating results.
// Example: Find sum or max
// const sum = arr.reduce((acc, curr) => acc + curr, 0); // Sum of array
// const max = arr.reduce((max, curr) => curr > max ? curr : max, 0); // Max value

// --- Practical Example with Objects ---
const uses = [
   {firstName : "akshay", lastname : "saini", age:26},
   {firstName : "shivang", lastname : "upadhyay", age:21},
   {firstName : "sid", lastname : "go", age:20},
   {firstName : "ayush", lastname : "solanki", age:19},
   {firstName : "prabhat", lastname : "sinhna", age:21},
   {firstName : "babu", lastname : "aligarh", age:98},
];

// --- map(): Get full names ---
/*
const output = uses.map((x) => x.firstName + " " + x.lastname);
console.log(output); // ["akshay saini", "shivang upadhyay", ...]
*/

// --- reduce(): Count users by age ---
/*
const output = uses.reduce(function(acc, cur){
   if(acc[cur.age]){
      acc[cur.age] = ++acc[cur.age];
   }else{
      acc[cur.age] = 1
   }
   return acc
}, {});
console.log(output); // {19: 1, 20: 1, 21: 2, 26: 1, 98: 1}
*/

// --- filter + map: Get first names of users under 30 ---
const output = uses.filter((x) => x.age < 30)
                   .map((x) => x.firstName);
console.log(output); // ["akshay", "shivang", "sid", "ayush", "prabhat"]

// --- reduce: Same as above, but using only reduce ---
const output1 = uses.reduce(function(acc, cur){
   if(cur.age < 30){
      acc.push(cur.firstName)
   }
   return acc;
}, []);
console.log(output1); // ["akshay", "shivang", "sid", "ayush", "prabhat"]

// --- Interview Recap ---
// - map(): transforms each element, returns a new array (same length).
// - filter(): selects elements based on a condition, returns a new array (possibly shorter).
// - reduce(): accumulates array values into a single value (sum, object, array, etc.).
// - You can often use reduce to replicate map/filter functionality, but map/filter are more readable for those use cases.
// - Practice writing map, filter, and reduce for arrays of primitives and objects.
// - Be ready to explain and implement these patterns in interviews!
