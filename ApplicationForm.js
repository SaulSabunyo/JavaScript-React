//Storage key of the application form details
ApplicationStorageKey = 'applicationFormData';
//DOM elements
const form = document.getElementById('application-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('num');
const skillsInput = document.getElementById('skills');
//state
let formData = []
//save data to local storage
function save(){
    localStorage.setItem(ApplicationStorageKey, JSON.stringify(formData))
}
//load data from local storage
function load(){
    try{
        const raw = localStorage.getItem(ApplicationStorageKey);
        formData = raw ? JSON.parse(raw) : [];
    } catch(e){
        formData = [];
    }
}
//handle form submission
form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const skills = skillsInput.value.trim();
    if(name && email && phone && skills){
        const entry = {id: crypto.randomUUID() , name, email, phone, skills, submittedAt: Date.now()};
        formData.push(entry);
        save();
        form.reset();
        alert('Application submitted successfully!');
    } else{
        alert('Please fill in all fields.');
    }
});
//initial load
load();