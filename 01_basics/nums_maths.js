// const score = 400

// console.log(typeof(score))

// const num = new Number(100)

// console.log(num)

// const a = num.toString();

// console.log(a)
// console.log(typeof(a))
// console.log(a.length)

// console.log(num.toFixed(3))//gives the values after decimal

//const number = 23.4968

//console.log(number.toPrecision(3))//gives precise value of how many dgits u have given

//const num1 = 10000000

//console.log(num1.toLocaleString());//gives the value with commas in us standard like 
//1 million and billions 
//if u want values in indian standard use en-IN

//console.log(num1.toLocaleString('en-IN'))


/*++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++*/


//console.log(Math)

//console.log(Math.abs(-100))//abs-absolute value converts negative values to positive vaues
//also known as modulus 

//console.log(Math.round(4.5))//gives the round off of the decimal values like 
//if we are giving 4.4 it gives 4 for 4.6 it gives 5 for 4.5 it gives 5

//console.log(Math.ceil(4.2))//gives the top value 
//console.log(Math.floor(4.6))//gives floor value

//console.log(Math.min(1,2,3,4,5))//gives minimum value 
//console.log(Math.max(1,2,3,4,5))//gives maximum value 

//console.log(Math.floor(Math.random()*10)+1)//random always gives values between 0-1 to avoid this case 
//we multiply it by 10 bt still if we get random number 0.00 something then after multiply
//by 10 we will still get 0 number to handle this case we add 1 to it so that minimum
//number that comes under random will be from 1 d

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)