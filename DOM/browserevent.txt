//browser events
//what are events

//events are something that happens on your system when u do a particular
//thing (like click something) then a particular action will took place 
//that will be set by event handler or listner.

//if u want to check which events have been used on the websites u can use
//moniterevent(document); method on console there u can find all the events 

//if u want to turn off the events like u dont want to see which events have been 
//used u can use unmonitorevents(); method

//eventlistners
// interface->blueprint

//eventtarget??
//it is an interface or blueprint  implemented by objects that can recieve events
//and may have listners to decide what to do after those events

//Methods in event target
/*
1.addEeventListner
2.removeEventListner
3.dispatchEventListner

*/

/*
here the top level entity is event target
his child is node which inherits its properties
and at last element inherits both the properties
of eventtarget and nodes

*/

//addeventlistner
//listen to event
//respond to event
//hook into event

//syntax
//eventtarget.addEeventListner(eventotlistenfor.function to run when event hppen)
//eventtarget->component on which u want to apply eventlistner
//event-type->click
//function->what to do when event happen



//removeeventlistner

//== loose equality // only checks value 
//=== strict equality //checks value as well as dataype

//==  -> allows type coersion means js will try to convert the items
//to the compared type

//=== prevent type coersion

//if u want to apply the removeevent function u have to apply same function
//to the removeeventlistner that u apply to addevent listner


//note->functions are objects in javascript hence they will have different
//memory addesses even if they are doing same thing or giving same value

//conditions for removeeventlistner to run succesfully
//same target
//same datatype
//same function


//phases of an event
/*
1. capturing phase->founding the eventtarget
2. at target phase->find the target successfully
3. bubbling phase->going back after finding the target
*/


//by default your event listner will execute on bubbling phase

//addEventListener(type,function,usecapture or not)


//The event object
/*
when an event occurs, addeventlistner funtion gets an even object that 
has lots of info inside it about that event

if u want to check what is inside event 
a.addeventlistner('click',function(s){
       console.log(s);
})


*/

//THE DEFAULT ACTION
/*
when ever u want to prevent any action like opening link display image 
on clicking etc and u dont want these things to happen
u can use preventdefault action it will prevent the objects default action

*/


//AVOID TOO MANY EVENTS

/*
if u are doing different functions givng same output or doing same thing 
by an event then it would be better if all your events that want same thing 
by a function would refer to only one function then it would be otpimised annd 
would take lesser memory 
avoid to many events
*/