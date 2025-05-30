// singleton
//  Object.create

//object literals
// 4

const sym = Symbol("key1");

// console.log(typeof [sym])
const jsUser = {
    name : "shivang",
    "full name": "shivang upadhyay",
    [sym]: "value",
    age : 22,
    location : "delhi",
    email: "shivang@gmail.com",
    isLoggedIn: true,
    lastLogin: ["monday", "sunday", "tuesday"],
}

// console.log(jsUser.location)
// console.log(jsUser["full name"])
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
//  console.log(jsUser[sym]);


// jsUser.email = "Shivang@chatgpt.com"
// Object.freeze(jsUser) // freezes the object
 
// jsUser.email = "Shivang@microsoft.com"
// console.log(jsUser)
  

 jsUser.greeting = function(){
    console.log("hello js User");
 }

 jsUser.greetingTwo = function(){
   console.log(`hello js user, ${this.name}`)
 }

 console.log(jsUser.greeting());
 console.log(jsUser.greetingTwo());
