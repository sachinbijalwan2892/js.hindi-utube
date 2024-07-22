const marvel_heros=["ironman","spiderman","hulk","thor"]
const dc_heros=["superman","flash","batman","aquaman"]

//marvel_heros.push(dc_heros)//it will not concat
//array will be inside array making it difficult to access elements
//bad practice

// console.log(marvel_heros)

// console.log(marvel_heros[4][0])

//const new_heros=marvel_heros.concat(dc_heros)//will return new array
//returning all the elements of two array in that one 

//console.log(new_heros)

//use spread operator 
//const all_heros=[...marvel_heros,...dc_heros]
//console.log(all_heros)
//he spread (...) syntax allows an iterable, such as an array or string, 
//to be expanded in places where zero or more arguments 
//(for function calls) or elements (for array literals) are expected. 
//In an object literal, the spread syntax enumerates the properties of 
//an object and adds the key-value pairs to the object being created.

//const arr=[1,2,3,[4,5,6],7,[8,9,[10,11]]]

//const arr2=arr.flat(Infinity)
//Returns a new array with all sub-array elements 
//concatenated into it recursively up to the specified depth.
//console.log(arr2)

// console.log(Array.isArray("Sachin"))//tells if given value is array opr not 

// console.log(Array.from("Sachin"))//convert to array

let a = 100
let b = 200
let c = 300

console.log(Array.of(a,b,c))//Returns a new array from a set of elements