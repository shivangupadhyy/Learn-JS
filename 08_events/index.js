// document.getElementById('owl').onclick = function (){
//     alert("owl clicked ")
// }it is not that much good approach

// document.getElementById('owl').onclick = function() {
//     alert('owl clicked')
// }

//attachEvent()
// jQuery - on 
// important topics of events explain : type, timestamps, defaultprevented, target, toElement , srcElement , currentTarget, clientX, clientY, screenX, screenY, altKEy, ctrlKey, shiftkey, keyCode

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log(e)
// }, false) //event propogation , event bubbling, and event captureing

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log(e.target)
// }, false)

// document.getElementById('images').addEventListener('click', function(e){
//     alert("ul is clicked");
// }, false)

// document.getElementById('images').addEventListener('click', function(e){
//     console.log('clicked inside the ul');
// }, false)


// document.getElementById('owl').addEventListener('click', function(e){
//     console.log('owl clicked');
//     e.stopPropagation() //now it will not bubble and dont go above
// }, false)  //bubbling gum bottom to up  and ture is captureing mode top to buttom

// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault()
//     e.stopPropagation()
//     console.log('google is clicked')
// }, false)

// document.querySelector('#images').addEventListener('click', function(e){
//     console.log(e.target.tagName)
//     if(e.target.tagName === 'IMG'){
//         console.log(e.target.id)
//         let removeIt = e.target.parentNode
//     removeIt.remove()
//     }

    
// }, false)

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName)
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id)
        let removeId = e.target.parentNode
        removeId.remove()
    }
})






// ===================== Event Handling in JavaScript =====================
// This file demonstrates different ways to handle events, event propagation,
// event bubbling, event capturing, and event object properties.
// These are important concepts for interviews and practical web development.

// Example: Not recommended way to handle events (overwrites previous handlers)
// document.getElementById('owl').onclick = function (){
//     alert("owl clicked ")
// }
// Instead, use addEventListener for flexibility and multiple handlers.

// ===================== Event Properties =====================
// Common event object properties:
// - type: type of the event (e.g., 'click')
// - target: the element that triggered the event
// - currentTarget: the element the event listener is attached to
// - clientX/clientY: mouse position relative to viewport
// - screenX/screenY: mouse position relative to screen
// - altKey/ctrlKey/shiftKey: modifier keys
// - keyCode: code of the key pressed (for keyboard events)
// - preventDefault(): prevents default browser action
// - stopPropagation(): stops event from bubbling up

// ===================== Event Propagation =====================
// Bubbling: Event moves from the target element up to the root (default, false)
// Capturing: Event moves from the root down to the target (set third arg to true)
// e.g.,
// document.getElementById('images').addEventListener('click', function(e){
//     console.log('clicked inside the ul');
// }, false)
// document.getElementById('owl').addEventListener('click', function(e){
//     console.log('owl clicked');
//     e.stopPropagation() // Prevents bubbling
// }, false)
// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault() // Prevents default link behavior
//     e.stopPropagation()
//     console.log('google is clicked')
// }, false)

// ===================== Practical Example: Event Delegation =====================
// document.querySelector('#images').addEventListener('click', function(e){
//     // e.target is the element that was actually clicked
//     console.log(e.target.tagName)
//     if(e.target.tagName === 'IMG'){
//         // If an image was clicked, remove its parent <li> from the DOM
//         console.log(e.target.id)
//         let removeIt = e.target.parentNode
//         removeIt.remove()
//     }
// }, false)

// Interview Notes:
// - Use addEventListener for robust event handling.
// - Understand event bubbling and capturing for complex UIs.
// - Use event delegation for efficient event handling on lists/grids.
// - Know how to use preventDefault and stopPropagation.
// - Be familiar with event object properties for debugging and advanced features.
// - Removing elements dynamically is a common interview and real-world task.
// - Practice reading event.target and event.currentTarget for clarity.
// - Always comment your code for clarity, especially for beginners!