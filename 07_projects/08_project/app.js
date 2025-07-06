// ****** Grocery List App with Local Storage ******

// This file implements a dynamic grocery list app using vanilla JavaScript and localStorage.
// It demonstrates DOM manipulation, event handling, and persistent storage—key concepts for interviews and real-world projects.
// Real-world analogy: Think of this as a digital notepad for your groceries, where you can add, edit, and delete items, and your list is saved even if you close the browser.

// ****** Select DOM Elements ******
const form = document.querySelector(".grocery-form"); // The form for adding/editing items
const alert = document.querySelector(".alert"); // Alert box for user feedback
const grocery = document.getElementById("grocery"); // Input field for grocery item
const submitBtn = document.querySelector(".submit-btn"); // Button to submit form
const container = document.querySelector(".grocery-container"); // Container for the list
const list = document.querySelector(".grocery-list"); // The list of grocery items
const clearBtn = document.querySelector(".clear-btn"); // Button to clear all items

// Edit option state variables
let editElement; // Reference to the item being edited
let editFlag = false; // Are we editing an item?
let editID = ""; // ID of the item being edited

// ****** Event Listeners ******
form.addEventListener("submit", addItem); // Add or edit item on form submit
clearBtn.addEventListener("click", clearItems); // Clear all items
window.addEventListener("DOMContentLoaded", setupItems); // Load items from localStorage on page load

// ****** Functions ******

// Add or edit an item
function addItem(e) {
  e.preventDefault(); // Prevent form from submitting/reloading the page
  const value = grocery.value; // Get input value
  const id = new Date().getTime().toString(); // Unique ID based on timestamp

  if (value !== "" && !editFlag) {
    // --- Add new item ---
    const element = document.createElement("article"); // Create new DOM element
    let attr = document.createAttribute("data-id"); // Create data-id attribute
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    // Set inner HTML for the item, including edit and delete buttons
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
    // Add event listeners to both buttons
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);
    // Append the new item to the list
    list.appendChild(element);
    // Show success alert
    displayAlert("item added to the list", "success");
    // Show the container if hidden
    container.classList.add("show-container");
    // Save to localStorage for persistence
    addToLocalStorage(id, value);
    // Reset form and state
    setBackToDefault();
  } else if (value !== "" && editFlag) {
    // --- Edit existing item ---
    editElement.innerHTML = value; // Update the DOM
    displayAlert("value changed", "success");
    // Update localStorage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    // --- Empty input ---
    displayAlert("please enter value", "danger");
  }
}

// Show alert messages to the user
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // Remove alert after 1 second
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// Remove all items from the list and localStorage
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list"); // Remove from localStorage
}

// Delete a single item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement; // Get the article element
  const id = element.dataset.id; // Get the item's ID
  list.removeChild(element); // Remove from DOM
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");
  setBackToDefault();
  removeFromLocalStorage(id); // Remove from localStorage
}

// Edit a single item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling; // Reference to the <p> element
  grocery.value = editElement.innerHTML; // Set input value to current item
  editFlag = true; // Set edit mode
  editID = element.dataset.id; // Store the ID
  submitBtn.textContent = "edit"; // Change button text
}

// Reset form and state to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// ****** Local Storage Functions ******

// Add a new item to localStorage
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

// Get all items from localStorage
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// Remove an item from localStorage by ID
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    return item.id !== id; // Only keep items that don't match the ID
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// Edit an item in localStorage by ID
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value; // Update value if ID matches
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// ****** Setup Items on Page Load ******

// Load items from localStorage and display them
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

// Create and append a grocery item to the DOM
function createListItem(id, value) {
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("grocery-item");
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  // Add event listeners to both buttons
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);
  // Append the item to the list
  list.appendChild(element);
}

/*
--- Key Interview Points ---
1. Time complexity: All major operations (add, edit, delete, clear) are O(1) for DOM and O(n) for localStorage (since arrays are filtered/mapped).
2. Space complexity: O(n) for the number of items in the list/localStorage.
3. Common pitfalls: Not updating localStorage when deleting/editing, not resetting form state, or not handling empty input.
4. Edge cases: Editing/deleting when the list is empty, or trying to add empty items.
5. Real-world analogy: Like a digital sticky note board for groceries, with persistent storage.
6. For interviews: Be ready to explain event delegation, localStorage, and why you use unique IDs for each item.
*/