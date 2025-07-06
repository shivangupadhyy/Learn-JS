// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 == 1);
// console.log( 2 != 1);


console.log("2" > 1 );
console.log("02" > 1 );

// console.log(null > 0); // false
// console.log(null == 0);  // false
// console.log(null >= 0);      // true

//the reason  is that an equality operator (==)  and comaprison operator < <> = <= work differently.
// comparison operator  converts the value to a number treating null as 0
// thats why null >= 0 is true and null>0 is false

// console.log(undefined == 0 ); // false
// console.log(undefined > 0); // false
// console.log(undefined >= 0); // false
// console.log(undefined < 0); // false

//=== 

// console.log("2" === 2); // false now it will not convert the string to number it will check the data type