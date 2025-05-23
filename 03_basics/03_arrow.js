const user = {
    username: "shivang",
    price : 999,

    welcomeMessage: function () {
console.log(`${this.username}, welcome to webiste`);
console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "ayushi"
// user.welcomeMessage()
// console.log(this);

// function chai (){
//     let username  = "shivang"
//     console.log(this);// undefined
// }

// chai()

// const chai = function () {
//     let username = "shivang"
//     console.log(this.username) // undefined
// }

// chai()

// const chai =()=>{
//     let username = "shivang"
//     console.log(this)
// }
// chai()

// const addTwo = (num1, num2)=>{
//  return num1 + num2
// }

// console.log(addTwo(3, 4))


// const addTwo = (num1 , num2)=> (num1 + num2)

// console.log(addTwo(3,6))

const addTwo  = (num1, num2) => ({username : "shivang"})

console.log(addTwo());


