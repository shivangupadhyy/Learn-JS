let a = 400

if (true) {
    let a = 10;
    const b = 20;
     var c = 30;

    //  console.log(`inner: ${a}`)
}


// console.log(a);
// // console.log(b);
// console.log(c);
function one (){
    const username = "shivang"

    function two (){
        const website = "youtube"
        console.log(username)
    }


    // console.log(website)

    // two()
}

//one()

if (true) {
    const username = "shivang"

    if(username === "shivang"){
        const website = " youtube"

        console.log(username + website)
    }

    // console.log(website)


}

// console.log(username)

console.log (addone(5))
function addone (num){
    return num + 1
}


console.log(addTwo(5))// cannot  acces 'addTwo'  before initialization
const addTwo  = function(num){
    return num + 2 
}

// addTwo(5)






