// IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined.
// It helps to avoid polluting the global scope and is often used for initialization code.

// Named IIFE example:
(function chai () {
    // This code runs immediately after definition
    console.log(`DB connected`);
}) ();

// IIFE using arrow function syntax:
((name) =>{
    // This code also runs immediately and can take arguments
    console.log(`DB CONNECTED TWO ${name}`)
})('Shivang') // 'Shivang' is passed as an argument