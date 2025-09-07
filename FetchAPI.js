//Fectching data from an API
let apiUrl = "https://jsonplaceholder.typicode.com/users"

fetch(apiUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
