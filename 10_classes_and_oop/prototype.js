// let myName = "shivang"
// console.log(myName.length)

let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman : "sling ",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all object`);
}
Array.prototype.heyShivang = function(){
    console.log(`hitesh says hello`)
}

Array.prototype.shivang = function(){
console.log("Shivang is present in all object")
}

// heroPower.hitesh()
// myHero.hitesh()
// myHero.heyShivang()
// heroPower.heyShivang()

// heroPower.hitesh()

//inheritance

const User = {
    name: "chai",
    email : "chai@example.com"
 }

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__ : teachingSupport
}

teacher.__proto__=User


//modern
Object.setPrototypeOf(teachingSupport, teacher)

Object.setPrototypeOf(teacher, User)

let anotherUsername = "chaiaurcode      "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is : ${this.trim().length}`)
}

String.prototype.toUppercase = function(){
    console.log(`upperCase : ${this.toUpperCase()}`)
}

"shivang".toUppercase()
// anotherUsername.trueLength()
// "hitesh         ".trueLength()
// "shivang".trueLength()