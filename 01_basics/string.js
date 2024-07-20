// const name = "sachin";//dont show behind the scene bt is using object

// let gitRepo = 6;

//console.log("my name is " + name +" and my git repositories are more than "+gitRepo);
//this is bad syntax dont write it in this way 

//console.log(`My name is ${name} and i have more than ${gitRepo} git repostiories`);
//this is good practice of concatinating strings 

//console.log(name[0])

//another way to declare the string 
//const gameName = new String("Genshin")//string object

//console.log(gameName)

//console.log(gameName.__proto__)
//console.log(gameName.length)

//console.log(gameName.toUpperCase())
//When you call a method like toUpperCase() on a string, 
//JavaScript creates a new string object in memory with the modified characters, 
//but it doesn't modify the original string object. 
//This is because strings are immutable, 
//meaning their contents cannot be changed after they are created.

//console.log(gameName.charAt(3))//tells which char is at given position
//console.log(gameName.indexOf(3))//tells the char is at which index


// const anotherName = gameName.substring(0,4)//last value will not be considered
// console.log(anotherName)
// const oneName = gameName.slice(0,4)//same as substring
// console.log(oneName)

//const str = "   S a c h i n   "
//console.log(str)
//console.log(str.trim())//removes the starting spaces and ending spaces of string

//const url ="https://Sachin.com.Sachin%20Bijalwan"

//const a =url.replace("%20","-")//used to replace the values in string or in urls
//console.log(a)


//console.log(url.includes("Sachin"))//tells if string is available or not 

//split string to array

// const mail = "Sachin-Singh-Bijalwan-2892"

// const arr = mail.split("-")

// console.log(arr)