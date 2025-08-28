//Getting h1 element
let heading = document.querySelector('h1')
//changing the value of the heading element.
heading.innerText = "This time round serious business only."
//Changing the style of the element
heading.style.color = "Red"
heading.style.fontSize = "40px"

//Creating a new element [Empty h1 Element]
let newHead = document.createElement('h1')
newHead.innerText = "JavaScript"
//To add an element, first access the body element then you add the element there.
let bodyElement = document.querySelector('body')
//To add new element to body
bodyElement.appendChild(newHead)
newHead.style.color ="Maroon"
newHead.style.fontsize = "60px"
newHead.innerText = "My Content has been changed"
 
// Creating aparagraph element and adding it  to the body.
let newPara = document.createElement('p')
//Adding Content to the paragraph element.
newPara.innerText = "This is the new paragraph together with it's content"
//Appending it as a child to the ody element.
bodyElement.appendChild(newPara)

//Deleting an Element..
// let para = document.querySelector('p')
// para.remove(para)

//Events in JavaScript
let btn = document.querySelector('button')
//..Add an event listener to this button..takes in the name of the event and the function to respond to that event.
btn.addEventListener('click', function(){
    bodyElement.style.backgroundColor = "blue"
})

//Accesssing the h2 element
let heading2 = document.querySelector('h2')
headingstyle = {
    color: "red",
    fontSize: "70px",
    textAlign: "Center"
}
//Object.assign(heading2.style, headingstyle)// using object.assign to assign multiple styles to an element
//assigning using a for in loop
for(let key in headingstyle){    
    heading2.style[key] = headingstyle[key]
}

let button2 = document.querySelector('#btn2')
// button2.addEventListener('click', function(){
//     heading2.style.color = "green"
// })