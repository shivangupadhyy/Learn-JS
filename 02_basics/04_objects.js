// const tinderUser =  new Object() // singleton object 

const tinderUser = {} // nonsingleton Object

tinderUser.id = "123abc"
tinderUser.name = "shivang"
tinderUser.age = 22
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "Shivang@gmail.com",
    Fullname: {
        username: {
            firstname: "shivang",
            lastname: "upadhyay"
        }
    }
}
// console.log(regularUser.Fullname.username);

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4 : "d", 5: "e", 6: "f"}

//  const obj3 = Object.assign({}, obj1, obj2) // shallow copy

const obj3 = {...obj1, ...obj2} // shallow copy


//  console.log(obj3);


//  console.log(Object.keys(tinderUser)); // returns the keys of the object
//  console.log(Object.values(tinderUser)); // returns the values of the object

//  console.log(Object.entries(tinderUser)); // returns the entries of the object

//  console.log(tinderUser.hasOwnProperty("name")); // returns true if the object has the property


//  const course = {
//     courseName: "javascript",
//     coursePrice: "199",
//     courseInstructor: "shivang"
//  }
 
//  const {courseName: Name} = course // destructuring]
//  console.log(Name); // javascript


//  const navbar = ({company}) => {

//  }

//  navbar( company = "Shivang") // function expression


// {
//     "name": "shivang",
//     "coursename": "javascript",
//     "coursePrice": "199",
//     "courseInstructor": "shivang",
// }