const accountId = 1234543;
let accountEmail  = "Shivang140@gmail.com";
var acccountPassword = "1234567890";
let accountState ;

// accountId=5;// not allowable

accountEmail = "vansh@65gmail.com"
acccountPassword = "21212121";
accountCity = "Noida";

/*
perfer not to use var
because of issue in block scope and functional scope
let is block scoped
*/


console.log(accountId);
console.table([accountId, accountEmail, acccountPassword, accountCity, accountState])

