//Todo-list App
let inputField = document.querySelector('#input_field')
let addButton = document.querySelector('#btn')
let toDoscontainer = document.querySelector('#todo_container')

addButton.addEventListener('click', function(){
    //create the element and add it to te container
let newtodo = document.createElement('li')
newtodo.innerText = inputField.value
toDoscontainer.appendChild(newtodo)
//clearing the input field
inputField.value=""
})

//appendChild, adds the element to the bottom, prepend adds an element at the top