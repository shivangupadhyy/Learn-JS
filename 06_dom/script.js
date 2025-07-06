// DOM Traversal and Manipulation Example
const parent  = document.querySelector('.parent')
// Selects the first element with class 'parent' from the DOM

// console.log(parent) // Logs the parent element
// console.log(parent.children); // Logs all child elements (HTMLCollection)
// console.log(parent.children[0].innerText); // Logs inner text of the first child

// Loop through all children of the parent and log their inner HTML
for (let i = 0; i < parent.children.length; i++){
    console.log(parent.children[i].innerHTML);
}

// Change the text color of the first child to red
parent.children[0].style.color = "red"

// console.log(parent.firstElementChild); // Logs the first child element
// console.log(parent.lastElementChild); // Logs the last child element

// Selects the first element with class 'day'
const dayOne = document.querySelector('.day')
console.log(dayOne) // Logs the selected element
console.log(dayOne.parentElement); // Logs the parent of the selected element
console.log(dayOne.nextElementSibling) // Logs the next sibling element

// Logs all child nodes (including text, comment, and element nodes)
console.log("NODES", parent.childNodes )

// Interview Notes:
// - Demonstrates DOM selection using querySelector.
// - Shows how to access children and childNodes of an element.
// - Explains the difference between children (elements only) and childNodes (all node types).
// - Shows how to style elements dynamically with JavaScript.
// - Demonstrates DOM traversal: parentElement, nextElementSibling, firstElementChild, lastElementChild.
// - Useful for questions about DOM manipulation, traversal, and dynamic styling in interviews.