const accountId = 1443567
var accountMail = "sachin@gmail.com"
let accountPass = "12345"
accountCity = "Chamba"

let accountSate;
//accountId = 2 //not allowed to change const 
//accountMail = "Sachu@google.com"   //var can be changed
//accountPass = "2892"  //let can be changed 
//console.log(accountMail)
//console.log(accountPass);


/*
always prefer the use of let in the place of var 
coz of issue with block scope and functional scope
*/


//tabular form
//we can write all the keywords we want to print at one time in table form
console.table([accountId,  accountMail, accountPass, accountCity, accountSate])