//selecting the element using DOM
let form = document.querySelector("form");
let fnameInput = document.getElementById("fname");
let lnameInput = document.getElementById("lname");
let positionInput = document.getElementById("position");
let unameInput = document.getElementById("uname");
let numberInput = document.getElementById("number");
let imageInput = document.getElementById("image");
let messageInput = document.getElementById("message");
let submitBtn = document.getElementById("submitBtn");
//adding event listener to the submit button
submitBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    //getting the values from the input fields
    let fname = fnameInput.value;
    let lname = lnameInput.value;
    let position = positionInput.value;
    let uname = unameInput.value;
    let number = numberInput.value;
    let image = imageInput.files[0];
    let message = messageInput.value;
    //validating the input fields   
    if (fname === "" || lname === "" || position === "" || uname === "" || number === "" || !image || message === "") {
        alert("Please fill all the fields");
        return;
    }
    //creating an object to store the values
    let formData = {
        fname: fname,
        lname: lname,
        position: position,
        uname: uname,
        number: number,
        image: image.name,
        message: message
    };
    //storing the object in local storage
    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    submissions.push(formData);
    localStorage.setItem("submissions", JSON.stringify(submissions));
    //resetting the form
    form.reset();
    alert("Form submitted successfully!");
});
//fetching the data from the local storage and logging it to the console
let storedSubmissions = JSON.parse(localStorage.getItem("submissions")) || [];
console.log(storedSubmissions);
// You can also display this data on the webpage if needed