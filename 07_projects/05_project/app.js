const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");


//display all items when page loads
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu); // Show all menu items when page loads
    displayMenuButtons();   // Show filter buttons (function not shown here)
});

// Function to display menu items on the page
function displayMenuItems(menuItems){
    // The map() method creates a new array by calling the provided function on every element in the array
    // Here, we use map to process each menu item
    let displayMenu = menuItems.map(function(item){
        // 'item' is each object in the menu array
        // console.log(item) // For now, just log each item to the console
        // In a full implementation, you would return HTML for each item here
        return `<article class='menu-item'>
        <img src = ${item.img} alt= ${item.title} class = "photo"/>
        <div class="item-info">
        <header>
        <h4> ${item.title}</h4>
        <h4 class= "price"> $${item.price}</h4>
        </header>
        <p class="item-text">
        ${item.desc}
        </p>
        </div>
        </article>`;
    })
    displayMenu = displayMenu.join("");
     console.log(displayMenu);

     sectionCenter.innerHTML = displayMenu
     
    // displayMenu would be an array of HTML strings (if returned above)
    // You could then join and insert them into the DOM
}

function displayMenuButtons(){
    const  categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    }, ["all"])

    const categoryBtns = categories.map(function(category){
        return `<button type="button" class="filter-btn" data-id=${category}>
        ${category}
        </button>`;
    })
    .join("")

    btnContainer.innerHTML = categoryBtns;
    const filterBtn = btnContainer.querySelectorAll('.filter-btn');
    console.log(filterBtn)

    filterBtn.forEach(function (btn){
        btn.addEventListener('click', function(e){
            // console.log(e.currentTarget.dataset)
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function( menuItem){
                // console.log(menuItem.category)

                if(menuItem.category === category){
                    return menuItem
                }
            });
            if(category === "all"){
                displayMenuItems(menu)
            }else{
                displayMenuItems(menuCategory);
            }
        })

    })
}

/*
Explanation:
- window.addEventListener('DOMContentLoaded', ...) ensures the code runs after the HTML is fully loaded.
- displayMenuItems(menu) is called to show all menu items initially.
- The map() method is used to iterate over the menuItems array and process each item.
- map() returns a new array with the results of calling a function on every element (here, just logging for now).
- This is useful for transforming data (e.g., objects to HTML strings) before displaying them on the page.
*/