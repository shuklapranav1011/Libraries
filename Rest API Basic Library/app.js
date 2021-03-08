const http = new easyHttp;

//get posts
// http.get('https://jsonplaceholder.typicode.com/posts');

// console.log(http.get('https://jsonplaceholder.typicode.com/posts'))  //we dont get a output here due to callback problem.
// //so we add a callback function

// http.get('https://jsonplaceholder.typicode.com/posts'
// , function(err,posts){
//     if(err){
//         console.log(err);
//     }else{
//     console.log(posts);
//     }
// })

//get single post

// http.get('https://jsonplaceholder.typicode.com/posts/30'
// , function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//     console.log(post);
//     }
// })



//Creating Data

const data = {
  "title": "Custom POst",
  "body": "this is a custom post"
}

//Adding Post

// http.post('https://jsonplaceholder.typicode.com/posts',data, function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//     console.log(post);
//     }
// })



//Updating post

http.put('https://jsonplaceholder.typicode.com/posts/1',data, function(err, post){
    if(err){
        console.log(err);
    }else{
    console.log(post);
    }
})


//Deleting Post


http.delete('https://jsonplaceholder.typicode.com/posts/1'
, function(err,posts){
    if(err){
        console.log(err);
    }else{
    console.log(posts);
    }
})