//closuer
// function z(){

//     var b = 900;
//     function x(){
//     var a= 7;
//     function y(){
//         console.log(a,b)
//     }


//   y()

// }
// x()
// }
// z()

// var z = x()
// console.log(z)
// z()

// function x(){
//     var i = 1;
//     setTimeout(function (){
//         console.log(i)
//     }, 3000)
//     console.log("namaste javascript")
// }

// x()

function x() {
    for (var i = 1; i <= 5; i++) {// 

        function close(i) {
            setTimeout(function () {
                console.log(i)
            }, i * 1000)
        }
        close(i);

    }

    console.log("namaste Javascript")
}

x();
// function x(){
//     for(let i=1; i<=5; i++){//
//         setTimeout(function (){
//             console.log(i)
//         }, i* 1000)
//     }
//     console.log("namaste Javascript")
// }

// x();