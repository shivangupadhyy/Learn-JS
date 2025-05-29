# Projects related to DOM

## project link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode-hqgmd5kq?file=index.html)


# Solution code

## project 1

```javascript

// Interview Notes for Project 1 (Color Changer):
// - Demonstrates DOM manipulation and event handling
// - Shows how to handle multiple elements with querySelectorAll
// - Uses event delegation and event object properties
// - Practical example of dynamic styling with JavaScript

// Select all buttons with class 'button'
const btn = document.querySelectorAll('.button');
// Select the body element for background color changes
const body = document.querySelector('body')

// Add click event listener to each button using forEach
btn.forEach(function (button){
  console.log(button)
  button.addEventListener('click', function(e){
    // 'e' is the event object, contains information about the event
    console.log(e)
    // e.target refers to the element that triggered the event
    console.log(e.target)
    
    // Check button id and change background color accordingly
    if(e.target.id ==="grey"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
  })
})

/// explanation ////



```



# project 2 // Bmi calculator


```javascript


// - Shows form handling and input validation
// - Demonstrates preventDefault() for form submission
// - Handles type conversion and data validation
// - Implements business logic with conditional statements
// - Shows different ways to update DOM content (innerHTML vs textContent)

const form = document.querySelector('form');
// Note: Don't get input values here as they'll be empty on page load
// const height =  parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  // Prevent form from submitting to server
  e.preventDefault();

  // Get input values and convert to integers
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Input validation
  if (height < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid height';
  }
  if (weight < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid weight';
  } else {
    // Calculate BMI: weight(kg) / height(m)²
    // Height is converted from cm to m by dividing by 100
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    // Display results based on BMI ranges
    if (bmi <= 18.6) {
      results.innerHTML = `<span> Under Weight BMI : ${bmi}</span>`;
    }
    if (bmi > 18.6 && bmi < 24.9) {
      results.textContent = `normal Weight BMI : ${bmi}`;
    } else {
      results.textContent = `over weigth ${bmi}`;
    }
  }
});

// Key Interview Topics:
// 1. Event Handling: click events, form submission
// 2. DOM Selection: querySelectorAll vs querySelector
// 3. Event Object: properties and usage
// 4. Form Validation: handling user input
// 5. Type Conversion: parseInt, isNaN
// 6. DOM Updates: innerHTML vs textContent
// 7. Mathematical Operations: BMI calculation
// 8. Conditional Logic: if statements
// 9. Template Literals: string interpolation
// 10. Best Practices: preventing form submission, input validation
```


# project 3 
```javascript
// Interview Notes for Project 2 (BMI Calculator):
// - Shows form handling and input validation
// - Demonstrates preventDefault() for form submission
// - Handles type conversion and data validation
// - Implements business logic with conditional statements
// - Shows different ways to update DOM content (innerHTML vs textContent)

const form = document.querySelector('form');
// Note: Don't get input values here as they'll be empty on page load
// const height =  parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  // Prevent form from submitting to server
  e.preventDefault();

  // Get input values and convert to integers
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Input validation
  if (height < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid height';
  }
  if (weight < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid weight';
  } else {
    // Calculate BMI: weight(kg) / height(m)²
    // Height is converted from cm to m by dividing by 100
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    // Display results based on BMI ranges
    if (bmi <= 18.6) {
      results.innerHTML = `<span> Under Weight BMI : ${bmi}</span>`;
    }
    if (bmi > 18.6 && bmi < 24.9) {
      results.textContent = `normal Weight BMI : ${bmi}`;
    } else {
      results.textContent = `over weigth ${bmi}`;
    }
  }
});

// Key Interview Topics:
// 1. Event Handling: click events, form submission
// 2. DOM Selection: querySelectorAll vs querySelector
// 3. Event Object: properties and usage
// 4. Form Validation: handling user input
// 5. Type Conversion: parseInt, isNaN
// 6. DOM Updates: innerHTML vs textContent
// 7. Mathematical Operations: BMI calculation
// 8. Conditional Logic: if statements
// 9. Template Literals: string interpolation
// 10. Best Practices: preventing form submission, input validation
```

# project 5 
``` javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', function (e) {
  insert.innerHTML = `<div class = "color">
  <table>
  <tr>
  <th>key</th>
  <th>keycode</th>
  <th>code</th>
  </tr>

  <tr>
  <td>${e.key === ' ' ? 'space' : e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
  </tr>
  </table>

  </div>`;
});

```