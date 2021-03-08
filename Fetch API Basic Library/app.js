const http = new EasyHTTP;

// //get users

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err))

// http.post('https://jsonplaceholder.typicode.com/users',{"name":"Pranav"})
// .then(data => console.log(data))
// .catch(err => console.log(err))

// http.put('https://jsonplaceholder.typicode.com/users/2',{"name":"Pranav"})
// .then(data => console.log(data))
// .catch(err => console.log(err))


http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err))

//-----------------------------
//get users
