// // This function demonstrates how return statements work with try...finally blocks
// function init(){
//     try{
//         return 1; // This return is ignored if finally also has a return
//     } finally {
//         return 2; // The return in finally always overrides the try's return
//     }
// }
// init(); // This will always return 2, not 1
