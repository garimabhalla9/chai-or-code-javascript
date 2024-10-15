const accountId = 144553    //constants declaration

//variable declarations using let and var keyword
let accountEmail = "garima1@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2    //not allowed

accountEmail="garima@g.com"
accountPassword="212121"
accountCity="Bengalore"

console.log(accountId);

/*
Preferred not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])