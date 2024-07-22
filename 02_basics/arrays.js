//Arrays in Javascript

// const myArr = [1,2,3,4,5,6]

// console.log(myArr)
// console.log(typeof(myArr))

//const myHero = ["Iron-Man","Flash","Venom","Spider-Man"]


//console.log(myHero)

// const myInfo = new Array("Sachin","18","2210992203")

// console.log(myInfo)
//JavaScript arrays are resizable and can contain a mix of different data types.

//Array Methods
//myHero.pop()//last value remove
//myHero.push("Deadpool")//add value at last of array
// console.log(myHero)
// myHero.shift()//remove the value from first place in array
// myHero.unshift("Captain America")//add value at first place in array

// console.log(myHero)

// console.log(myHero.includes("Flash"))//return bool value if value is present or not

// console.log(myHero.indexOf("Flash"))//returns index 

//console.log(myHero)
//const arr =myHero.join()//add all elements of array in string

//console.log(typeof(arr))


const myArr = [1,2,3,4,5,6,7]

console.log("A",myArr)

const n1=myArr.slice(1,3)//The beginning index of slice define from where to start
//. If start is undefined, then the slice begins at index 0
//ending index will not be included in slice 

console.log("B",n1)
console.log(myArr)
const n2=myArr.splice(1,3)//1st param-starting index
//2nd param - delete count
//3rd param - add items

console.log("C",n2)

console.log(myArr)






//JavaScript arrays are zero-indexed: the first element of an array is at index 0, 
//the second is at index 1, and so on — and the last element is 
//at the value of the array's length property minus 1.



//JavaScript array-copy operations create shallow copies. 


//SHALLOW COPY
//A shallow copy of an object is a copy whose properties share the same references 
//(point to the same underlying values) as those of the source object from which 
//the copy was made. As a result, when you change either the source or the copy, 
//you may also cause the other object to change too.


//DEEP COPY
//A deep copy of an object is a copy whose properties do not share the same references 
//(point to the same underlying values) as those of the source object from which 
//the copy was made. As a result, when you change either the source or the copy, 
//you can be assured you're not causing the other object to change too