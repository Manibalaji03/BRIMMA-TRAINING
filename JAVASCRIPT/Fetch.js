
// creating a resources
/*
fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body:JSON.stringify({
        title:'Mani',
        body:'vanakam da mapla ',
        userId:1,
    }),
    headers:{
        "content-type":'application/json; charset=UTF-8',
    },
}).then(data=>data.json()).then(data=>console.log(data)).catch(err=>console.log(err));
*/
//updatinf a resuorces

// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:'PUT',
//     body:JSON.stringify({
//         id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//     }),
//     header:{
//         "content-type": "application/json; charset=UTF-18"
//     }
// }).then(data=>data.json()).then(data=>console.log(data));


fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"HEAD"
}).then(data=>console.log(data.headers));




//updating a resuorces partially

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

//fetching all resources
// fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
// .then(data=>data.json()).then(data=>console.log(data))
// .catch(err=>console.log(err));