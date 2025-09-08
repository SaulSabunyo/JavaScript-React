fetch("https://jsonplaceholder.typicode.com/users")
  // The first '.then()' handles the Response object from the server
  .then(response => {
    // Check if the response was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    // Convert the response to JSON format
    return response.json();
  })
  // The second '.then()' handles the actual JSON data
  .then(data => {
    console.log(data);
  })
  // The '.catch()' block handles any errors during the fetch or parsing
  .catch(error => {
    console.error('Error fetching data:', error);
  });
