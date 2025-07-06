//Dates

 let myDates = new Date();
// // console.log(myDates); // Current date and time
// console.log(myDates.toString()); // String representation of the date
// console.log(myDates.toDateString()); // Date in string format ../Wed Oct 25 2023
// console.log(myDates.toTimeString()); // Time in string format
// console.log(myDates.toLocaleString()); // Date and time in local format
// console.log(myDates.toUTCString()); // Date and time in UTC format
// console.log(myDates.getFullYear()); // Year
// console.log(myDates.getMonth()); // Month (0-11)
// console.log(myDates.getDate()); // Day of the month (1-31)
// console.log(myDates.getDay()); // Day of the week (0-6)
// console.log(myDates.getHours()); // Hour (0-23)
// console.log(myDates.getMinutes()); // Minute (0-59)
// console.log(myDates.getSeconds()); // Second (0-59)
// console.log(myDates.getMilliseconds()); // Millisecond (0-999)
// console.log(myDates.getTime()); // Time in milliseconds since 1970-01-01T00:00:00Z
// console.log(myDates.getTimezoneOffset()); // Timezone offset in minutes
// console.log(myDates.getUTCDate()); // UTC date
// console.log(myDates.getUTCMonth()); // UTC month
// console.log(myDates.getUTCFullYear()); // UTC year
// console.log(myDates.getUTCDay()); // UTC day of the week

// console.log(myDates.getUTCHours()); // UTC hour
// console.log(myDates.getUTCMinutes()); // UTC minute


// console.log(typeof myDates); // Object


// let myCreatedDate = new Date(2025,11, 10, 12,23,23); // year, month, day, hour, minute, second
// let myCreatedDate = new Date("2025-11-25");
let myCreatedDate = new Date("01-14-2015");//  MM-DD-YYYY                           
// console.log(myCreatedDate.toLocaleString()); // Invalid date because month is 0-11

let myTimeStamp = Date.now(); // Current timestamp in milliseconds
// console.log(myTimeStamp); // Current timestamp in milliseconds
// console.log(myCreatedDate.getTime()); // Timestamp of the created date

console.log(Math.floor(Date.now()/1000)); // Current timestamp in milliseconds

let newDate =  new Date()
console.log(newDate.getDate());// Current date
console.log(newDate.getMonth());// Current month
console.log(newDate.getFullYear());// Current year
console.log(newDate.getDay());// Current day of the week
console.log(newDate.getHours());// Current hour
console.log(newDate.getMinutes());// Current minute
console.log(newDate.getSeconds());// Current second
console.log(newDate.getMilliseconds());// Current millisecond
console.log(newDate.getTime());// Current timestamp in milliseconds

console.log(`${newDate.getTime()} this is current timestamp in milli secpond`)// Current timestamp in milliseconds


newDate.toLocaleString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) // Current date in local format