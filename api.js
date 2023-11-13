
// console clear is a good packtice
console.clear();

// API JS starts from here
// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()


// const makeRequest = (method, url, data) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);

    
//     xhr.setRequestHeader('Content-Type', 'application/json');


//     xhr.onload = () => {
//         let data = xhr.response;
//         console.log(JSON.parse(data));
//     };

//     xhr.onerror = () => {
//         console.log("Error is here");
//     };


//     xhr.send(JSON.stringify(data));
// };

// const getData = () => {
//     makeRequest('GET','https://jsonplaceholder.typicode.com/posts');
// };

// const sendData = () => {
//     makeRequest('POST','https://jsonplaceholder.typicode.com/posts', {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     });
// };

// const updateData = () => {
//     makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1', {
//         id: 1,
//         title: 'fooUpdate',
//         body: 'barUpdate',
//         userId: 1,
//     });
// };

// const updateSingleData = () => {
//     makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1', {
//         title: 'This is changed',
//     });
// };

// const deleteData = () => {
//     makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1');
// };




// getData();
// sendData();
// updateData();
// updateSingleData();
// deleteData();







// javascript tutorial 84 video

fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => console.log(response));