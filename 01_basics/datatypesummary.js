//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//****************************************************************************************************************************


//STACK(PRIMITIVE)  HEAPS(NON-PRIMITIVE)


let youtubeName = "Vegeta";

let anotherName = youtubeName;
anotherName = "Goku";

console.log(youtubeName);
console.log(anotherName); //this happens coz primitive data is called by value 
//it does not give a proper memory address bt provide a copy so chanes are also
//made in copy thats y original name changed here 

//non primitive

let userOne =
{
     email : "sachin@microsoft.com",
     age : 22

}

let userTwo=userOne;

console.log(userOne.email)
console.log(userTwo.email)

userTwo.email="sachin@google.com"

console.log(userOne.email)
console.log(userTwo.email)//it changed coz object is non primitive and it
//is called by refrence so all the changed made in second variable 
//coz changes in original memory so both userone and usertwo mail changed