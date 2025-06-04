// Notes and explanations for interview and new learners:
// This script demonstrates how to use classList methods to manipulate classes on DOM elements for toggling navigation links.

// classList - shows/gets all classes on an element
// contains - checks if a specific class exists
// add - adds a class
// remove - removes a class
// toggle - adds the class if not present, removes if present

const navToggle = document.querySelector('.nav-toggle'); // Button to toggle navigation
const links = document.querySelector('.links'); // Navigation links container

// Add click event listener to the navToggle button
navToggle.addEventListener('click', function(){
    // You can inspect the classList for debugging:
    // console.log(links.classList)
    // console.log(links.classList.contains('links')) // true if 'links' class exists
    // console.log(links.classList.contains('random')) // false if 'random' class does not exist
    
    // Manual way to toggle a class:
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links')
    // }else{
    //     links.classList.add('show-links')
    // }
    
    // Shorter way: toggle() will add if missing, remove if present
    links.classList.toggle('show-links')
})

/*
Summary:
- classList is a useful property for working with CSS classes in JavaScript.
- toggle() is a concise way to show/hide elements by adding/removing a class.
- This pattern is common for responsive navigation menus and interactive UI elements.
*/