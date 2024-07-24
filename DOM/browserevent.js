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

