//DOM

//document object model 
//it is a tree like structure

//how the dom model is acutally created 
//1. html character like <html> are converted into tags
//2.tags are converted into token by tokenizer
//3.token is converted into nodes
//4.then ur dom is ready
//characters->tags->tokens->nodes->dom


//how to fetch an element in javascript 
//use getelementbyid method

//this method is always called on document object 
//it will always return single object coz ids are unique
//and two elements cant have same id 


//if we want to access multiple element 
//then use getelementbyclassname

//this will return u all the elements having same class 
//in the form of array like object not array bt array like 
//object

//you can also use getelementbytagname
//will have to use tag names and it will return all the tags
//of that name


//keep in mind
//both the above methods use document object 
//both return multiple items
//the list return is not an array

//shortcut to accesss any element u select on webpage 
//use $0


//queryselector
//in queryselector method u can access elements by their
//tagname,classname,idname
//if u have multiple elements with same tag class or id 
//then it will return first element


//queryselectorall
//if u want to access multiple elements use query selector all


//web page is ready bt i want to do some changes now 

//properties
//1 .innerHTML//gets an element of html content
              //sets an element of html content

//2 .outerHTML//The outerHTML property of the 
//DOM interface gives the HTML fragment of that element. 
//It not only gives the content but 
//the whole HTML structure of the element. 
//It can also be used to replace the HTML structure of the element.



//3 .textContent
//used to get or set text based content


//difference bw innerhtml and text content
//if we are useing tags inside the tags then innerhtml
//will render those tags and apply that property on text
//but textcontent will treat those innertags like text too
//4 .innerText

//if display hidden in mediaquery then in innertext it will not show
// bt in text content it will be available

//if we want to change existing Element

//for creation of new element//syntax use createlement
//let newpara = document.createElement('p');
//when u use method appendchild 
//added element will always goes to the end of the element
//it is appened with

//if u want to put text inside that new created element 
//newpara.textcontent= 'i am sachin';
//a.appendchild(mypara)

//if u want to append the element to ur designated
//location use

//insertadjacenthmtl
//has to be called with two arguements
//1 arg ->location/Position where 
//2 arg htm text/content   what

//for example
//crating new object we wants to add
//let newpara = document.createElement('h3');

//newpara.textcontent = 'sachin'

//addEventListener.insertadjacentelement(beforebegin,newpara);


//DONE


