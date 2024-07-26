//PERFORMANCE
/*
1. measue speed of code
2. how to write efficient code
3. event loop
*/

/*
 standard way to measure how long your code takes to run
 PERFORMANCE.NOW();

 he performance.now() method returns a high resolution 
 timestamp in milliseconds.


 //REFLOW

 whenever u add a new element to ur dom then it will measure its
 dimensions etc and do calculations on how much place will it takes
 and stuff like that so this is called reflow

 //REPAINT

 when ur reflow is done , to show that element on the page 
 pixel by pixel , repaint does all that

 //DOCUMENT FRAGMENT

 lightweight document object 
 The key difference is due to the fact that the document 
 fragment isn't part of the active document tree structure. 
 Changes made to the fragment don't affect the document.

 no reflow and no repaint 

 it is just like virtual dom creates a virtual copy of com and do 
 some changes inside it and then all at once put the changes on 
 main dom only one reflow and reapint 
 performance enhance
 


 //SINGLE THREADING

 one call at a time
 javascript is a single threaded language which means it can only run
 one command at a time.

 

*/

//CALL STACK
/*
A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) 
to keep track of its place in a script that calls multiple functions — 
what function is currently being run and what functions are called from within that function, etc.

When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
If the stack takes up more space than it was assigned, a "stack overflow" error is thrown.
*/

//EVENT LOOPS

/*
so to understand this we have to take three things 

1st one is call stack
2nd one is broswer
3rd one is event queue

lets say we have this code 
console.log("ABCD")
element.addeventlistner('click', function(){
 console.log(1234);
})

console.log('xyz')


explaination:-

as u can see this code so first of all the first line of code 
will go into the call stack and after executing that code of line
successfully it will be removed from the call stack then next function
will be called means 2nd function that is addeventlistner
so lets say we dont click the mouse this means event will not happen
right and if event didnt happen than funtion will not get executed right
so call stack will give this entire fucntion to the browser and will say
please execute this function whenever that event happen understand
after that next 3rd command will be executed and now stack is all empty
now when we click the mouse and event will happen the whole 
function will move on to event queue and event queue will check if the call
stack is empty or not if it is empty it will execute the function and done

this is known as event loop.


note:- u can also use loupe tool to understand how this works

*/

//SETTIMEOUT METHOD
/*
The global setTimeout() method sets a timer 
which executes a function or specified piece 
of code once the timer expires.

time will be in millisecond

*/