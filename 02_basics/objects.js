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