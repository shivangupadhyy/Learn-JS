// Notes and explanations for interview and new learners:
// This script implements a simple review carousel using DOM manipulation and event listeners.

// local reviews data 
const reviews = [
  // ...existing code...
];

// Select DOM elements for displaying review info and navigation buttons
const img = document.getElementById('person-img') // Image element for person
const author = document.getElementById('author')   // Name element
const job = document.getElementById('job')         // Job title element
const info = document.getElementById('info')       // Review text element

const prevBtn = document.querySelector('.prev-btn')    // Previous button
const nextBtn = document.querySelector('.next-btn')    // Next button
const randomBtn = document.querySelector('.random-btn')// Random button

// Set starting item index
let curItem = 0;

// Load initial item when DOM is ready
window.addEventListener('DOMContentLoaded', function(){
  showPerson()
})

// Function to display the current review based on curItem index
function showPerson(){
   const item = reviews[curItem]
   img.src = item.img;              // Set image source
   author.textContent = item.name   // Set author name
   job.textContent = item.job       // Set job title
   info.textContent = item.text     // Set review text
}

// Show next person when next button is clicked
nextBtn.addEventListener('click', function(){
    curItem++;
    // If at end, loop back to first review
    if(curItem > reviews.length - 1){
        curItem = 0
    }
    showPerson()
})

// Show previous person when previous button is clicked
prevBtn.addEventListener('click', function(){
    curItem--;
    // If at start, loop to last review
    if(curItem < 0){
        curItem = reviews.length - 1;
    }
    showPerson()
})

// Show a random person when random button is clicked
randomBtn.addEventListener('click', function(){
    curItem = Math.floor(Math.random() * reviews.length) // Pick random index
    showPerson()
})

/*
Summary:
- Uses an array of objects to store review data.
- Selects and updates DOM elements to display review info.
- Handles navigation (next, previous, random) using event listeners.
- Loops through reviews for seamless navigation.
- Demonstrates basic DOM manipulation, event handling, and working with arrays in JavaScript.
*/