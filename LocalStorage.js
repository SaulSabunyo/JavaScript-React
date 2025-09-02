//Adding an item to local storager
localStorage.setItem('name', 'John Doe');
localStorage.setItem('age', '30');
//getting an item from localStorage
const name = localStorage.getItem('name');
console.log(name); // Output: John Doe
//removing an item from localStorage
localStorage.removeItem('age');
//clearing the localStorage
//getting the length of localStorage
const length = localStorage.length;
console.log(length); // Output: 1
//getting a key by its index

//Storing an object
let User = {
    Name : 'Jane Doe',
    Age : 25
};
localStorage.setItem('User', JSON.stringify(User));
//Storing an array in local storage
let Tasks = ["Bitcoin", "BSSE-Course", "NodeJS","ReactJS","StatPath","Electric-Vehicles","AI-ML","Cyfrin-Updraft"];
localStorage.setItem('Tasks', JSON.stringify(Tasks));

//....Note that while storing the objects and arrays we stringify to convert them to string like format.
//....And while retrieving we parse them to convert them back to their original format.
const UserData = JSON.parse(localStorage.getItem('User'));
console.log(UserData);
const TasksData = JSON.parse(localStorage.getItem('Tasks'));
console.log(TasksData);