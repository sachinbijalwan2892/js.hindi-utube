//object literals 
const mysymb = Symbol();
const Jusers={
    name : "Sachin",
    "full name" : "Sachin Bijalwan",
    [mysymb] : "IDK",
    age : 20,
    email : "sachin@google.com",
    isLoggedIn : false
}

console.log(Jusers.email)
console.log(Jusers["email"])
console.log(Jusers["full name"])
console.log(typeof(mysymb))

Jusers.email="sachin@chatgpt.com"

Object.freeze(Jusers)

Jusers.email = "sachin"

console.log(Jusers)

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());