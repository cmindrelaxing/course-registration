
console.clear();


// const makeRequest = async (url, method) => {
//     const result = await $.ajax({
//         url: url,
//         method: method,
//     });
//     return result;
// };

// const getData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET")
//     .then((res) => console.log(res));
// };

// getData();


// const makeRequest = async (url, method) => {
//     try {
//         const result = await $.ajax({
//             url: url,
//             method: method,
//         });
//         return result;
//     }catch  (err) {
//         console.error(err);
//     }
// };

// const getData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET")
//     .then((res) => console.log(res));
// };

// getData();


// const makeRequest = async (url, method, data) => {
//     try {
//         const result = await $.ajax({
//             url: url,
//             method: method,
//             data: data,
//         });
//         return result;
//     }catch  (err) {
//         console.error(err);
//     }
// };

// const createData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/", "POST", {
//         title: "Create Data",
//         body: "Create data information",
//         userId: 1,
//     })
//     .then((res) => console.log(res));
// };

// createData();


// const makeRequest = async (url, method, data) => {
//     try {
//         const result = await $.ajax({
//             url: url,
//             method: method,
//             data: data,
//         });
//         return result;
//     }catch  (err) {
//         console.error(err);
//     }
// };

// const updateData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
//         id: 1,
//         title: "Create Data",
//         body: "Create data information",
//         userId: 1,
//     })
//     .then((res) => console.log(res));
// };

// updateData();


// const makeRequest = async (url, method, data) => {
//     try {
//         const result = await $.ajax({
//             url: url,
//             method: method,
//             data: data,
//         });
//         return result;
//     }catch  (err) {
//         console.error(err);
//     }
// };

// const deleteData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE")
//     .then((res) => console.log(res));
// };

// deleteData();