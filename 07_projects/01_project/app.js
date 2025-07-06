// Notes and explanations for interview and new learners:
// This script implements a counter with increase, decrease, and reset buttons using DOM manipulation and event listeners.

// set initial count
let count = 0;

// select value display and all buttons
const value = document.querySelector('#value'); // The element showing the count
const btns = document.querySelectorAll('.btn'); // All buttons with class 'btn'

// Loop through each button and add a click event listener
btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        // Get the list of classes for the clicked button
        const styles = e.currentTarget.classList;
        // Check which button was clicked using class names
        if(styles.contains('decrease')){
            count--; // Decrease count
        }else if (styles.contains('increase')){
            count++; // Increase count
        }else{
            count=0; // Reset count
        }

        // Change color based on count value
        if(count > 0){
            value.style.color = 'green'; // Positive: green
        }
        if(count < 0){
            value.style.color = 'red'; // Negative: red
        }
        if(count === 0 ){
            value.style.color = '#222'; // Zero: default color
        }

        // Update the displayed count
        value.textContent = count;
    })
})

// Summary:
// - Uses querySelector and querySelectorAll to select DOM elements.
// - Adds event listeners to multiple buttons using forEach.
// - Uses classList.contains to determine which button was clicked.
// - Updates the UI and color dynamically based on the count value.
// - Good example of event-driven programming and DOM manipulation in JavaScript.