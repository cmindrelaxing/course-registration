// ClipboardEvent Object
// oncopy
// oncut
// onpaste

console.clear();


// video 44 number tutorial starting

// const input = document.querySelector("input");

// input.addEventListener("copy", function() {
//     console.log("you have copied");
// });

// input.addEventListener("cut", function() {
//     console.log("you have cuted");
// });

// input.addEventListener("paste", function() {
//     console.log("you have pasted");
// });



// const input = document.querySelector("input");
// const p = document.querySelector("p");

// input.addEventListener("copy", function() {
//     p.innerText = "You have copied";
// });

// input.addEventListener("cut", function() {
//     p.innerText = "You have cuted";
// });

// input.addEventListener("paste", function() {
//     p.innerText = "You have pasted";
// });


// video 55 tutorial starting


// DragEvent Object
// ondragstart
// ondrag
// ondragend
// ondragenter
// ondragleave
// ondragover
// ondrop


// const div = document.querySelector("div");
// const p = document.querySelector("p");

// p.addEventListener("dragstart", function(e) {
//     e.dataTransfer.setData("Text", e.target.id);
// });

// div.addEventListener("dragover", function(e) {
//     e.preventDefault();
// });

// div.addEventListener("drop", function(e) {
//     let id = e.dataTransfer.getData("Text");
//     console.log(id);
//     div.appendChild(document.getElementById(id));
//     e.preventDefault();
// });




// video 56 tutorial starting

// BOM (Browser Object Model)
// Window Object
// location object

// // href object
// console.log(location.href);

// // protocol object
// console.log(location.protocol);

// // host name
// console.log(location.hostname);

// // port number
// console.log(location.port);

// // pathname object
// console.log(location.pathname);

// var locationDiv = document.querySelector(".location-div");

// var p1 = locationDiv.children[0];
// p1.textContent = location.href;

// var p2 = locationDiv.children[1];
// p2.textContent = location.hostname;

// var p3 = locationDiv.children[2];
// p3.textContent = location.protocol;

// var p4 = locationDiv.children[3];
// p4.textContent = location.port;

// var p5 = locationDiv.children[4];
// p5.textContent = location.pathname;


// next step

// var visitButton = document.getElementById("visit-button");

// visitButton.addEventListener("click", function () {
//     location.assign("https://www.google.com");
// });





// video 57 tutorial starting
// js BOM
// popup boxes - alert, confirm, prompt



// alert("Are you sure?");

// confirm("Are you sure?");

// 1st argument

// function deleteSomething () {
//     let value = confirm("Do you want to delete?");

//     if (value) {
//         console.log("deleted");
//     }else{
//         console.log("not deleted");
//     }
// };

// deleteSomething ();

// 2nd argument

// function welcomeMessage () {

//     var h1 = document.createElement("h1");
//     let text;

//     var name = prompt("Enter your name: ");
//     if (name == null || name == "") {
//         text = "no name found"
//     }else {
//         text = "Welcome => " + name;
//     }

//     var textNote = document.createTextNode(text);
//     h1.appendChild(textNote);
//     document.body.appendChild(h1);
// };

// welcomeMessage ();






// vide 58 tutorial starting
// JS BOM
// JS Timing events methods
// setTimeout (), setInterval ()


// setTimeout(()=>{
//     console.log("Hi");
// }, 2000);


// setTimeout (dispaly, 2000);
// function dispaly() {
//     console.log("dispaly  function called");
// };


// const saveButton = document.querySelector(".save-btn");
// const message = document.querySelector(".message");

// saveButton.addEventListener("click", saveUser);
// function saveUser () {
//     message.textContent = "user registration successfully";

//     setTimeout (() => {
//         message.textContent = "";
//     }, 2000);
// };



// const saveButton = document.querySelector(".save-btn");
// const message = document.querySelector(".message");

// saveButton.addEventListener("click", displayCount);

// function displayCount () {
//     let count = 0;
//     message.textContent = count;

//     setInterval (() => {
//         count = count + 1;
//         message.textContent = count;
//     }, 1000);
// };






// video 59 tutorial starting
// 1st argument

// const saveButton = document.querySelector(".save-btn");
// const message = document.querySelector(".message");

// saveButton.addEventListener("click", startClock);
// function startClock() {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let time = hours + ":" + minutes + ":" + seconds;

//     console.log(time);
// };



// const saveButton = document.querySelector(".save-btn");
// const message = document.querySelector(".message");

// saveButton.addEventListener("click", startClock);
// function startClock() {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let time = hours + ":" + minutes + ":" + seconds;

//     message.textContent = time;

//     setInterval(startClock, 1000);
// };



// const saveButton = document.querySelector(".save-btn");
// const message = document.querySelector(".message");

// saveButton.addEventListener("click", startClock);
// function startClock() {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     hours = formatTime(hours);
//     minutes = formatTime(minutes);
//     seconds = formatTime(seconds);

//     let time = hours + ":" + minutes + ":" + seconds;

//     message.textContent = time;

//     setInterval(startClock, 1000);
// };

// function formatTime(value) {
//     if (value <10)  {
//         value = "0" + value;
//     }
//     return value;
// };






// video 60 tutorial starting
// Best practices
// use camelCase for naming conventions
// variables declarations on top and initialize
// avoid unnecessary variables
// switch, case, default
// object and array with const
//
// access dom less

// const ol = document.querySelector(".students-list");
// const firstOl = ol.children[0];
// console.log(firstOl);


// const submitButton = document.querySelector("button");
// submitButton.addEventListener("click", () => {
//     console.log("clicked");
// });
// console.log(submitButton);


// document.querySelector("button").addEventListener("click", () => {
//     console.log("clicked");
// });






// video 61 tutorial starting
// Error handling -> try, catch, finally, throw
// try...catch handle run time errors (program which is not)
// Error object

// try {
//     alert("Hi, Everyone!");
//     alert(x);
//     alert("Bye Everyone!");
// }catch(error) {
//     console.log(error);
// }


// try {
//     alert("Hi, Everyone!");
//     alert(x);
//     alert("Bye Everyone!");
// }catch(error) {
//     console.log(error);
// }finally {
//     alert("Bye Everyone!");
// }






// video 62 tutorial starting
// Error handling -> try, catch, finally, throw

// document.querySelector("#checkButton").addEventListener("click", function() {

//     var sms = document.querySelector("#numTextfield").value;
//     console.log(sms);
// });


// document.querySelector("#checkButton").addEventListener("click", function() {

//     var sms = document.querySelector("#numTextfield").value;
//     console.log(sms);

//     try {
//         if (sms < 5){
//             throw "input is too low"
//         }
//         else if (sms > 10){
//             throw "input is too high"
//         }
//     }catch (error) {
//         console.log(error);
//     }
// });






// video 63 tutorial starting

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");

// ctx.lineWidth = 3;
// ctx.strokeStyle = "black";
// ctx.strokeRect(10,10,380,280);

// ctx.fillStyle = "green";
// ctx.fillRect(12,12,376,276);

// var centerX = c.width / 2;
// var centerY = c.height / 2;

// ctx.beginPath();
// ctx.arc(centerX, centerY,80,0,2*Math.PI,false);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.strokeStyle = "pink";
// ctx.stroke();






// video 64 tutorial starting

// var x = 6;
// if (true){
//     var x = 5;
// }
// console.log(x);


// let x = 6;
// if (true){
//     let x = 5;
// }
// console.log(x);


// let x = 11;
// for (let x = 1; x <= 10; x++){
//     console.log(x);
// }
// console.log(x);


// const x = 11;
// if (true){
//     x = 10;
//     console.log(x);
// }


// var x = 25;
// var y = 30;
// var sum = x + y;

// console.log("Sum in : " + sum + ". The end");


// let x = 25;
// let y = 30;
// let sum = x + y;

// console.log(`Sum in : ${sum} the end`);


// let x = 25;
// let y = 30;

// console.log(`Sum in : ${x + y} the end`);


// let name = "Shakil Ahmed";
// let message ="I am Shakil Ahmed. I am learning JavaScript";

// console.log(message);


// let name = "Shakil Ahmed";
// let message =`I am ${name}. I am learning JavaScript`;

// console.log(message);


// function add(x,y){
//     var sum = x + y;
//     console.log(sum);
// }
// add(20,30);


// const add = (x,y) => {
//     var sum = x + y;
//     console.log(sum);
// };

// add(20,30);






// video 65 tutorial starting
/*
    1. ES6 Syntax
        1.1 ES6 Variables -> var, let, const, (scope, redeclaration, value assignings)
        1.2 Template Literals
        1.3 Hoisting & string mode
        1.4 Default and Rest parameters
        1.5 spread oparetor
        1.6 for...of
    2. Arrow Functions
    3. Destructuring Functions
        3.1 Array and Object Destructuring Functions

    .
    .
    .
*/

// x = 20;
// console.log(x);
// var x;


// x = 20;
// console.log(x);
// let x;


// x = 20;
// console.log(x);
// const x;


// x = 20;
// if (true){
//     y = 10;
//     console.log(`y = ${y}`);
//     var y = 10;
// }
// console.log(`x = ${x}`);
// var x;

// x = 20;
// console.log(`x = ${x}`);

// "use strict";
// x = 20;
// console.log(`x = ${x}`);






// video 66 tutorial starting

// "use strict";
// function message (){
//     console.log("welcome");
// }
// message();


// "use strict";
// function message (text){
//     console.log(text);
// }
// message("I love JS ES6");


// "use strict";
// function message (text = "Hello, this is default parameter") {
//     console.log(text);
// }
// message();
// message("I love JS ES6");


// "use strict";
// function sum(x,y){
//     console.log(`${x}, ${y}`);
// }
// sum(10, 20);


// "use strict";
// function printNumber(x,y, ...z){
//     console.log(`x = ${x}, y = ${y} ...z = ${z}`);
// }
// printNumber(10, 20, 30, 40, 50);






// video 67 tutorial starting

// function addNumber(x, y, z) {
//     return x + y + z;
// }

// let numbers = [1, 2, 3]
// console.log(addNumber(numbers[0], numbers[1], numbers[2]));


// function addNumber(x, y, z) {
//     return x + y + z;
// }

// let numbers = [1, 2, 3]
// console.log(addNumber(...numbers));


// function addNumber(x, y, z) {
//     return x + y + z;
// }

// let numbers = [1, 2, 3]

// let numbers1 = [5, 6, ...numbers]
// console.log(numbers1);


// function addNumber(x, y, z) {
//     return x + y + z;
// }

// let numbers = [1, 2, 3]

// let numbers1 = [...numbers,5, 6]
// console.log(numbers1);


// function addNumber(x, y, z) {
//     return x + y + z;
// }

// let numbers1 = [1, 2, 3]
// let numbers2 = [4, 5, 6]
// let numbers = numbers1.concat(numbers2);
// console.log(numbers);


// function addNumber(x, y, z) {
//     return x + y + z;
// }

// let numbers1 = [1, 2, 3]
// let numbers2 = [4, 5, 6]
// let numbers = [...numbers1, ...numbers2];
// console.log(numbers);


// let p1 = {
//     name : "Shakil Ahmed",
//     age : 25
// }

// let p2 = {
//     nationality : "Bangladesh",
//     occupation : "Student"
// }

// let p =  {...p1, ...p2};
// console.log(p);






// video 68 tutorial starting
// Objects Literals

// function studentInfo (name, age) {
//     return {
//         name: name,
//         age: age
//     }
// }
// console.log(studentInfo("Shakil Ahmed", 25));


// function studentInfo (name, age) {
//     return {
//         name,
//         age
//     }
// }
// console.log(studentInfo("Shakil Ahmed", 25));


// function studentInfo (name, age) {
//     return {
//         name,
//         age
//     }
// }
// console.log(studentInfo("Shakil Ahmed", 25));


// let message = {
//     body : function (){
//         return `Hi, I am object function`
//     }
// }
// console.log(message.body());


// let message = {
//     body (){
//         return `Hi, I am object function`
//     }
// }
// console.log(message.body());


// let message = {
//     'body name' (){
//         return `Hi, I am object function`
//     }
// }
// console.log(message['body name']());






// video 69 tutorial starting
// for...of and for...in

// const names = ["s1", "s2", "s3"]
// for (const name of names) {
//     console.log(name);
// }


// let students = {
//     ID : 200122104,
//     name : "Md. Shakil Ahmed",
//     cgpa : 4.68
// }

// for (let x in students){
//     console.log(x);
// }


// let students = {
//     ID : 200122104,
//     name : "Md. Shakil Ahmed",
//     cgpa : 4.68
// }

// for (let x in students){
//     console.log(students[x]);
// }


// let students = {
//     ID : 200122104,
//     name : "Md. Shakil Ahmed",
//     cgpa : 4.68
// }

// for (let x in students){
//     console.log(`${x} : ${students[x]}`);
// }






// video 70 tutorial starting
// for vs foreach

// var numbers = [10, 20, 30, 40];

// for (var x = 0; x < numbers.length; x++) {
//     console.log(numbers[x]);
// }


// var numbers = [10, 20, 30, 40];
// numbers.forEach(myFunction);

// function myFunction(x){
//     console.log(x);
// }


// var numbers = [10, 20, 30, 40];
// numbers.forEach(function(x){
//     console.log(x);
// });


// var numbers = [10, 20, 30, 40];
// var squareNumbers = [];
// numbers.forEach(function(x){
//     squareNumbers.push(x * x);
// });
// console.log(squareNumbers);


// var numbers = [10, 20, 30, 40];
// var squareNumbers = [];
// numbers.forEach(function(x){
//     squareNumbers.push(x * 7);
// });
// console.log(squareNumbers);


// var numbers = [10, 20, 30, 40];
// var squareNumbers = [];
// numbers.forEach(function(x){
//     squareNumbers.push(x / 2);
// });
// console.log(squareNumbers);


// var numbers = [10, 20, 30, 40];
// var squareNumbers = [];
// numbers.forEach(function(x){
//     squareNumbers.push(x + 2);
// });
// console.log(squareNumbers);


// var numbers = [10, 20, 30, 40];
// var squareNumbers = [];
// numbers.forEach(function(x){
//     squareNumbers.push(x - 2);
// });
// console.log(squareNumbers);


// var numbers = [10, 20, 30, 40];
// console.log(numbers);
// numbers.forEach(function(x,index,array){
//     array[index] = x + 5;
// });
// console.log(numbers);






// video 71 tutorial starting
// forEach, map, filter

// var numbers = [2, 3, 4, 5];
// var squareNumbers = []

// numbers.forEach(function(x){
//     squareNumbers.push(x * x);
// });
// console.log(squareNumbers);


// var numbers = [2, 3, 4, 5];
// var squareNumbers = numbers.map(function(x){
//     return x * x;
// });
// console.log(squareNumbers);
// console.log(numbers);


// var numbers = [22, 31, 4, 5, 35, 26, 78];
// var newNumbers = numbers.filter(function(x){
//     return x > 10;
// });
// console.log(newNumbers);






// video 72 tutorial starting
// teditional functions

// function display1(){
//     console.log("I am display 1");
// }

// display1();

// const display2 = () => {
//     console.log("I am display 2");
// }

// display2();


// function display1(){console.log("I am display 1");}

// display1();

// const display2 = () => console.log("I am display 2");

// display2();


// function message1 (){
//     return "Hi, I am message1";
// }
// console.log(message1());

// const message2 = () => {
//     return "Hi, I am message2";
// }
// console.log(message2());

// var message3 = () => {
//     return "Hi, I am message3";
// }
// console.log(message3());

// var message4 = () => "Hi, I am message4";
// console.log(message4());


// function add(num1, num2){
//     return num1 + num2;
// }
// console.log(add(10,20));

// const add2 = (num1, num2) => {
//     return num1 + num2;
// };
// console.log(add2(10,20));

// const add3 = (num1, num2) => num1 + num2;
// console.log(add3(10,20));






// video 73 tutorial starting

// var students = [
//     {
//         id: 200122104,
//         name: 'Shakil Ahmed',
//         gpa: 2.68
//     },
//     {
//         id: 200122106,
//         name: 'Bijoy',
//         gpa: 3.65
//     },
//     {
//         id: 200122107,
//         name: 'Rabeya',
//         gpa: 4.65
//     },
//     {
//         id: 200122108,
//         name: 'Rokeya',
//         gpa: 2.65
//     }
// ]

// function studentNames(){
//     return students.filter(function(x){
//         return x.gpa > 3;
//     });
// }
// console.log(studentNames());


// function studentNames1(){
//     return students.filter(function(x){
//         return x.gpa > 3;
//     }).map(function(y){
//         return y.name;
//     });
// }
// console.log(studentNames1());


// const studentNames2 = () => {
//     return students.filter((x) => x.gpa > 3);
// }
// console.log(studentNames2());


// const studentNames3 = () => {
//     return students.filter((x) => x.gpa > 3).map((y) => y.name);
// }
// console.log(studentNames3());


// const studentNames4 = () => {
//     return students.filter((x) => x.gpa > 3).map((y) => y.id);
// }
// console.log(studentNames4());






// video 74 tutorial starting
// Destructuring
// array destructures

// let numbers = [10, 20, 30, 40, 50]
// let [num1, num2, num3, num4, num5] = numbers
// let [numo, numt, ...z] = numbers


// console.log(z);
// console.log(numbers);
// console.log(num1);
// console.log(num2);

// console.log(numbers[2]);
// console.log(numbers[4]);

// swap variables

// let a = 10, b = 20;
// [a,b] = [b, a]

// console.log(a);
// console.log(b);

// object destructure

// const studentInfo = {
//     id: 200122104,
//     fullName: 'Shakil Ahmed',
//     gpa: 4.68,
//     languages: {
//         native: 'Bangla',
//         beginner: 'English'
//     }
// }

// const {id, fullName, gpa, languages} = studentInfo;

// console.log(id);
// console.log(fullName);
// console.log(gpa);
// console.log(languages);
// console.log(languages.native);

// console.log(studentInfo.id);
// console.log(studentInfo.fullName);
// console.log(studentInfo.gpa);
// console.log(studentInfo.languages);
// console.log(studentInfo.languages.native);


// nested array destructures
// destructuring function parameters

// const studentInfo = (student) => {
//     console.log(`${student.id}, ${student.fullName}`);
// }

// const student = {
//     id: 200122104,
//     fullName: 'Shakil Ahmed',
//     gpa: 4.68
// }

// studentInfo(student);


// const studentInfo = ({id, fullName}) => {
//     console.log(`${id}, ${fullName}`);
// }

// const student = {
//     id: 200122104,
//     fullName: 'Shakil Ahmed',
//     gpa: 4.68
// }

// studentInfo(student);






// video 75 tutorial starting
// find(callback, value) return the value of the first element that pass certain condition

// let numbers = [5, 55, 14, 5, 78]
// let firstNumber = numbers.find(x => x % 2 === 0)

// console.log(firstNumber);


// let numbers = [5, 55, 14, 5, 78]

// const eventNumber = (value, index, array) => {
//     if(value % 2 === 0)
//     return value;
// }
// let firstNumber = numbers.find(eventNumber)
// let firstNumberIndex = numbers.findIndex(eventNumber)

// console.log(firstNumber);
// console.log(firstNumberIndex);


// const students = [
//     {
//         id: 101,
//         gpa: 2.5
//     },
//     {
//         id: 102,
//         gpa: 2.7
//     },
//     {
//         id: 103,
//         gpa: 4.8
//     },
//     {
//         id: 104,
//         gpa: 3.5
//     },
//     {
//         id: 105,
//         gpa: 5
//     }
// ]

// console.log(students.find(x => x.gpa > 4));

// findIndex(callback, value) return the index of the first element that pass some condition






// video 76 tutorial starting
// startsWith

// const message = "Today is Friday"
// console.log(message.startsWith("Today"));

// const message = "Today is Friday"
// console.log(message.startsWith("Today", 0));

// const message = "Today is Friday"
// console.log(message.endsWith("Today"));

// const message = "Today is Friday"
// console.log(message.endsWith("Friday"));

// const message = "Today is Friday"
// console.log(message.includes("Friday"));


// endsWith
// includes






// video 77 tutorial starting

// import {text, setText} from './myModule.js';
// console.log(text);
// (setText("Goodbye from ES6"));
// console.log(text);

// import { message } from "./myModule.js";
// console.log(message);

// import { text as message } from "./myModule.js";
// console.log(message);

// class Student {
//     constructor(id, name){
//         this.id = id;
//         this.name = name;
//     }
//     set studentName (name){
//         this.name = name;
//     }
//     get studentInfo (){
//         return this.id + " " + this.name;
//     }
// }
// let s1 = new Student(101, "Shakil");
// console.log(s1);
// console.log(s1.id);
// console.log(s1.name);
// s1.studentName = "Shakil Ahmed";
// console.log(s1.name);
// console.log(s1.studentInfo);






// video 78 tutorial starting
// synchronous programming

// const taskOne = () => {
//     console.log("Task 1");
// }

// const taskTwo = () => {
//     console.log("Task 2");
// }

// const taskThree = () => {
//     console.log("Task 3");
// }

// const taskFour = () => {
//     console.log("Task 4");
// }

// const taskFive = () => {
//     console.log("Task 5");
// }

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();



// const taskOne = () => {
//     console.log("Task 1");
// }

// const dataLoading = () => {
//     console.log("Task 2. Data Loading");
// };

// const taskTwo = () => {
//     setTimeout(dataLoading, 2000);
// }

// const taskThree = () => {
//     console.log("Task 3");
// }

// const taskFour = () => {
//     console.log("Task 4");
// }

// const taskFive = () => {
//     console.log("Task 5");
// }

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();






// video 79 tutorial starting

// const taskOne = () => {
//     console.log("Task 1");
// }

// const taskTwo = () => {
//     setTimeout(() => {
//         console.log("Task 2. Data Loading");
//     }, 2000);
// }

// const taskThree = () => {
//     console.log("Task 3");
// }

// const taskFour = () => {
//     console.log("Task 4");
// }

// const taskFive = () => {
//     console.log("Task 5");
// }

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();

// callback and higher order functions

// function square (x){
//     console.log(`square of ${x}: ${x * x}`);
// }

// square(5);


// function square (x){
//     console.log(`square of ${x}: ${x * x}`);
// }

// square(5);

// const y = square
// y(5);

// function higherOrderFunction (num, callback){
//     callback(num);
// }

// higherOrderFunction(6, square);


// const taskOne = (callback) => {
//     console.log("Task 1");
//     callback();
// }

// const taskTwo = (callback) => {
//        setTimeout(() => {
//           console.log("Task 2. Data Loading");
//         callback();
//        }, 2000);
// }

// const taskThree = (callback) => {
//     console.log("Task 3");
//     callback();
// }

// const taskFour = (callback) => {
//     console.log("Task 4");
//     callback();
// }

// const taskFive = () => {
//     console.log("Task 5");
// }


// taskOne(function f1(){
//     taskTwo(function f2(){
//         taskThree(function f3(){
//             taskFour(function f4(){
//                 taskFive();
//             });
//         });
//     });
// });


// const taskOne = (callback) => {
//     console.log("Task 1");
//     callback();
// }

// const taskTwo = (callback) => {
//        setTimeout(() => {
//           console.log("Task 2. Data Loading");
//         callback();
//        }, 2000);
// }

// const taskThree = (callback) => {
//     console.log("Task 3");
//     callback();
// }

// const taskFour = (callback) => {
//     console.log("Task 4");
//     callback();
// }

// const taskFive = () => {
//     console.log("Task 5");
// }


// taskOne(() => {
//     taskTwo(() => {
//         taskThree(() => {
//             taskFour(() => {
//                 taskFive();
//             });
//         });
//     });
// });


// console.log("Hi");
// document.querySelector("button").addEventListener("click", () => {
//     console.log("Button clicked");
// });
// console.log("Bye");






// video 80 tutorial starting
// how to create a promise
// how to use a promise
// how to run multiple promise - all()
// race()
// promise chaining

// how to create a promise - pending, resolve, reject

// console.log("Welcome");

// const promise1 = new Promise((resolve, reject) => {
//     let completedPromise = true;
//     if(completedPromise){
//         resolve("Completed Promise 1");
//     }else{
//         reject("Not completed Promise 1");
//     }
// });

// console.log(promise1);
// promise1.then(resolve => {
//     console.log(resolve);
// }).catch(error => {

//     console.log(error);
// });
// console.log("end");



// console.log("Welcome");

// const promise1 = new Promise((resolve, reject) => {
//     let completedPromise = false;
//     if(completedPromise){
//         resolve("Completed Promise 1");
//     }else{
//         reject(new Error("Not completed Promise 1"));
//     }
// });

// console.log(promise1);
// promise1.then(resolve => {
//     console.log(resolve);
// }).catch(error => {

//     console.log(error.message);
// });
// console.log("end");



// console.log("Welcome");

// const promise1 = new Promise((resolve, reject) => {
//     let completedPromise = true;
//     if(completedPromise){
//         resolve("Completed Promise 1");
//     }else{
//         reject(new Error("Not completed Promise 1"));
//     }
// });

// const promise2 = new Promise((resolve, reject) => {
//     resolve  ("Completed Promise 2");
// });

// console.log(promise1);

// Promise.all([promise1, promise2]).then((resolve) => console.log(resolve));

// Promise.all([promise1, promise2])
// .then(([resolve1, resolve2]) => console.log(resolve1));

// Promise.all([promise1, promise2])
// .then(([resolve1, resolve2]) => console.log(resolve2));

// Promise.all([promise1, promise2])
// .then(([resolve1, resolve2]) => console.log([resolve1, resolve2]));

// console.log("end");



// console.log("Welcome");

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Completed Promise 1");
//     }, 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve  ("Completed Promise 2");
//     });
// }, 1000);

// console.log(promise1);

// Promise.all([promise1, promise2]).then((resolve) => console.log(resolve));

// Promise.all([promise1, promise2])
// .then(([resolve1, resolve2]) => console.log(resolve1));

// Promise.all([promise1, promise2])
// .then(([resolve1, resolve2]) => console.log(resolve2));

// Promise.race([promise1, promise2]).then((resolve1) => console.log(resolve1));

// console.log("end");






// video 81 tutorial starting

// const taskOne = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 1 is Completed");
//     });
// }

// const taskTwo = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 2 is Completed");
//     });
// }

// const taskThree = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 3 is Completed");
//     });
// }

// const taskFour = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 4 is Completed");
//     });
// }

// taskOne().then((resolve) => console.log(resolve));
// taskTwo().then((resolve) => console.log(resolve));
// taskThree().then((resolve) => console.log(resolve));
// taskFour().then((resolve) => console.log(resolve));


// const taskOne = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 1 is Completed");
//     });
// }

// const taskTwo = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 2 is Completed");
//     });
// }

// const taskThree = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 3 is Completed");
//     });
// }

// const taskFour = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 4 is Completed");
//     });
// }

// taskOne()
// .then((resolve) => console.log(resolve))
// .then(taskTwo)
// .then((resolve) => console.log(resolve))
// .then(taskThree)
// .then((resolve) => console.log(resolve))
// .then(taskFour)
// .then((resolve) => console.log(resolve));


// console.log("Hi");

// const taskOne = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 1 is Completed");
//     });
// }

// const taskTwo = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Task 2 is Completed");
//         }, 2000);
//     });
// }

// const taskThree = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 3 is Completed");
//     });
// }

// const taskFour = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 4 is Completed");
//     });
// }

// taskOne()
// .then((resolve) => console.log(resolve))
// .then(taskTwo)
// .then((resolve) => console.log(resolve))
// .then(taskThree)
// .then((resolve) => console.log(resolve))
// .then(taskFour)
// .then((resolve) => console.log(resolve));

// console.log("Goodbye!");


// console.log("Hi");

// const taskOne = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 1 is Completed");
//     });
// }

// const taskTwo = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Task 2 is Completed");
//         }, 2000);
//     });
// }

// const taskThree = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 3 is Completed");
//     });
// }

// const taskFour = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 4 is Completed");
//     });
// }

// taskOne()
// .then((resolve) => console.log(resolve))
// .then(taskTwo)
// .then((resolve) => console.log(resolve))
// .then(taskThree)
// .then((resolve) => console.log(resolve))
// .then(taskFour)
// .then((resolve) => console.log(resolve))
// .catch((error) => console.log(error));

// console.log("Goodbye!");


// console.log("Hi");

// const taskOne = () => {
//     return new Promise((resolve, reject) => {
//         reject("Task 1 is not Completed");
//     });
// }

// const taskTwo = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Task 2 is Completed");
//         }, 2000);
//     });
// }

// const taskThree = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 3 is Completed");
//     });
// }

// const taskFour = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 4 is Completed");
//     });
// }

// taskOne()
// .then((resolve) => console.log(resolve))
// .then(taskTwo)
// .then((resolve) => console.log(resolve))
// .then(taskThree)
// .then((resolve) => console.log(resolve))
// .then(taskFour)
// .then((resolve) => console.log(resolve))
// .catch((error) => console.log(error));

// console.log("Goodbye!");


// console.log("Hi");

// const taskOne = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 1 is Completed");
//     });
// }

// const taskTwo = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Task 2 is Completed");
//         }, 2000);
//     });
// }

// const taskThree = () => {
//     return new Promise((resolve, reject) => {
//         reject("Task 3 is not Completed");
//     });
// }

// const taskFour = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 4 is Completed");
//     });
// }

// taskOne()
// .then((resolve) => console.log(resolve))
// .then(taskTwo)
// .then((resolve) => console.log(resolve))
// .then(taskThree)
// .then((resolve) => console.log(resolve))
// .then(taskFour)
// .then((resolve) => console.log(resolve))
// .catch((error) => console.log(error));

// console.log("Goodbye!");






// video 82 tutorial starting


// console.log("Hi");

// const taskOne = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 1 is Completed");
//     });
// }

// const taskTwo = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Task 2 is Completed");
//         }, 2000);
//     });
// }

// const taskThree = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 3 is Completed");
//     });
// }

// const taskFour = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 4 is Completed");
//     });
// }

// taskOne()
// .then((resolve) => console.log(resolve))
// .then(taskTwo)
// .then((resolve) => console.log(resolve))
// .then(taskThree)
// .then((resolve) => console.log(resolve))
// .then(taskFour)
// .then((resolve) => console.log(resolve))
// .catch((error) => console.log(error));


// async function callAllTasks() {
//     const t1 = await taskOne();
//     console.log(t1);

//     const t2 = await taskTwo();
//     console.log(t2);
    
//     const t3 = await taskThree();
//     console.log(t3);
    
//     const t4 = await taskFour();
//     console.log(t4);
// };
// callAllTasks();

// console.log("Goodbye!");



// console.log("Hi");

// const taskOne = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 1 is Completed");
//     });
// }

// const taskTwo = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Task 2 is Completed");
//         }, 2000);
//     });
// }

// const taskThree = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 3 is Completed");
//     });
// }

// const taskFour = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 4 is Completed");
//     });
// }

// taskOne()
// .then((resolve) => console.log(resolve))
// .then(taskTwo)
// .then((resolve) => console.log(resolve))
// .then(taskThree)
// .then((resolve) => console.log(resolve))
// .then(taskFour)
// .then((resolve) => console.log(resolve))
// .catch((error) => console.log(error));


// async function callAllTasks() {
//     const t1 = await taskOne();
//     console.log(t1);

//     const t2 = await taskTwo(t1);
//     console.log(t2);
    
//     const t3 = await taskThree(t2);
//     console.log(t3);
    
//     const t4 = await taskFour(t3);
//     console.log(t4);
// };
// callAllTasks();

// console.log("Goodbye!");



// console.log("Hi");

// const taskOne = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 1 is Completed");
//     });
// }

// const taskTwo = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Task 2 is Completed");
//         }, 2000);
//     });
// }

// const taskThree = () => {
//     return new Promise((resolve, reject) => {
//         reject("Task 3 is not Completed");
//     });
// }

// const taskFour = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Task 4 is Completed");
//     });
// }

// taskOne()
// .then((resolve) => console.log(resolve))
// .then(taskTwo)
// .then((resolve) => console.log(resolve))
// .then(taskThree)
// .then((resolve) => console.log(resolve))
// .then(taskFour)
// .then((resolve) => console.log(resolve))
// .catch((error) => console.log(error));


// const callAllTasks = async() => {

//     try {
//     const t1 = await taskOne();
//     console.log(t1);

//     const t2 = await taskTwo();
//     console.log(t2);
    
//     const t3 = await taskThree();
//     console.log(t3);
    
//     const t4 = await taskFour();
//     console.log(t4);
//     } 
//     catch(error) {
//         console.log(error);
//     }
// };
// callAllTasks();

// console.log("Goodbye!");






// video 83 tutorial starting

// // console clear is a good packtice

// // API JS starts from here
// // event - onload(), onerror()
// // property - response, responseText, responseType, responseURL, status, statusText
// // function - open(), send(), setRequestHeader()


// // const makeRequest = (method, url, data) => {
// //     const xhr = new XMLHttpRequest();
// //     xhr.open(method, url);

    
// //     xhr.setRequestHeader('Content-Type', 'application/json');


// //     xhr.onload = () => {
// //         let data = xhr.response;
// //         console.log(JSON.parse(data));
// //     };

// //     xhr.onerror = () => {
// //         console.log("Error is here");
// //     };


// //     xhr.send(JSON.stringify(data));
// // };

// // const getData = () => {
// //     makeRequest('GET','https://jsonplaceholder.typicode.com/posts');
// // };

// // const sendData = () => {
// //     makeRequest('POST','https://jsonplaceholder.typicode.com/posts', {
// //         title: 'foo',
// //         body: 'bar',
// //         userId: 1,
// //     });
// // };

// // const updateData = () => {
// //     makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1', {
// //         id: 1,
// //         title: 'fooUpdate',
// //         body: 'barUpdate',
// //         userId: 1,
// //     });
// // };

// // const updateSingleData = () => {
// //     makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1', {
// //         title: 'This is changed',
// //     });
// // };

// // const deleteData = () => {
// //     makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1');
// // };




// // getData();
// // sendData();
// // updateData();
// // updateSingleData();
// // deleteData();




// const makeRequest = (method, url, data) => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);

        
//         xhr.setRequestHeader('Content-Type', 'application/json');


//         xhr.onload = () => {
//             let data = xhr.response;
//             console.log(JSON.parse(data));
//         };

//         xhr.onerror = () => {
//             console.log("Error is here");
//         };


//         xhr.send(JSON.stringify(data));
//     });
// };

// const getData = () => {
//     makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
//     .then((response) => console.log(response));
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






// video 84 tutorial starting

// fetch("https://jsonplaceholder.typicode.com/posts/1").then ((res) => 
//     console.log(res)
// );


// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then ((res) => res.json())
//     .then ((res) => console.log(res))
//     .catch((err) => console.log(err));


// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     body: JSON.stringify({
//         id: 1,
//         title: "foo",
//         body: "bar",
//         userId: "user",
//     }),
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//     },
// })
// .then ((res) => {
//     if (!res.ok)  {
//         const message = `Error : ${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then ((res) => console.log(res))
// .catch((err) => console.log(err));


// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PATCH",
//     body: JSON.stringify({
//         title: "Updated patch",
//     }),
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//     },
// })
// .then ((res) => {
//     if (!res.ok)  {
//         const message = `Error : ${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then ((res) => console.log(res))
// .catch((err) => console.log(err));


// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "DELETE",
// })
// .then ((res) => {
//     if (!res.ok)  {
//         const message = `Error : ${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then ((res) => console.log(res))
// .catch((err) => console.log(err));


// const makeRequest = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     if (!res.ok) {
//         const message = `Error : ${res.status}`;
//         throw new Error(message);
//     }
//     const data = await res.json();
//     return data;
// };


// const getData = () => {
//     makeRequest()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }

// getData();


// const makeRequest = async (url, config) => {
//     const res = await fetch(url, config);
//     if (!res.ok) {
//         const message = `Error : ${res.status}`;
//         throw new Error(message);
//     }
//     const data = await res.json();
//     return data;
// };


// const getData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: "foo",
//             body: "bar",
//             userId: 1,
//         }),
//         headers: {
//             "Content-Type": "application/json; charset=utf-8"
//         },
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }

// getData();


// const makeRequest = async (url, config) => {
//     const res = await fetch(url, config);
//     if (!res.ok) {
//         const message = `Error : ${res.status}`;
//         throw new Error(message);
//     }
//     const data = await res.json();
//     return data;
// };


// const updateData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         body: JSON.stringify({
//             id: 1,
//             title: "update data using PUT method",
//             body: "update bar",
//             userId: 1,
//         }),
//         headers: {
//             "Content-Type": "application/json; charset=utf-8"
//         },
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }

// updateData();


// const makeRequest = async (url, config) => {
//     const res = await fetch(url, config);
//     if (!res.ok) {
//         const message = `Error : ${res.status}`;
//         throw new Error(message);
//     }
//     const data = await res.json();
//     return data;
// };


// const updateData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PATCH',
//         body: JSON.stringify({
//             title: "update data using PATCH method",
//         }),
//         headers: {
//             "Content-Type": "application/json; charset=utf-8"
//         },
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }

// updateData();


// const makeRequest = async (url, config) => {
//     const res = await fetch(url, config);
//     if (!res.ok) {
//         const message = `Error : ${res.status}`;
//         throw new Error(message);
//     }
//     const data = await res.json();
//     return data;
// };


// const deleteData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'DELETE',
//         body: JSON.stringify({
//         }),
//         headers: {
//             "Content-Type": "application/json; charset=utf-8"
//         },
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }

// deleteData();






// video 85 tutorial starting

// axios.get("https://jsonplaceholder.typicode.com/posts/101")
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));


// axios
// .post("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//         title: "Post content",
//         body: "bar",
//         userId: "user",
//     }),
//     headers: {
//         "Content-Type": "application/json; charset=utf-8;"
//     }
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));


// axios
// .post("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//         title: "Post content",
//         body: "bar",
//         userId: "user",
//     }),
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));


// axios
// .put("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     body: JSON.stringify({
//         id: 1,
//         title: "Post content",
//         body: "bar",
//         userId: "user",
//     }),
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));


// axios
// .put("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//         id: 1,
//         title: "Post content",
//         body: "bar",
//         userId: "user",
//     }),
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));


// axios
// .patch("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//         body: "patch bar progress",
//     }),
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));


// axios
// .delete("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//         body: "patch bar progress",
//     }),
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));     


// axios
// .delete("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//         body: "patch bar progress",
//     }),
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));    


// const makeRequest = (config) => {
//     return axios(config);
// };

// const getData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// getData();


// const makeRequest = async (config) => {
//     return await axios(config);
// };

// const createData = () => {
//     makeRequest({
//         url: "https://jsonplaceholder.typicode.com/posts",
//         method: "POST",
//         data: JSON.stringify({
//             title: "Create a new post",
//             body: "Post body",
//             userId: 1,
//         })
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// createData();


// const makeRequest = async (config) => {
//     return await axios(config);
// };

// const updateData = () => {
//     makeRequest({
//         url: "https://jsonplaceholder.typicode.com/posts",
//         method: "POST",
//         data: JSON.stringify({
//             id: 1,
//             title: "Create a new post update",
//             body: "Post body",
//             userId: 1,
//         })
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };

// updateData();


// const makeRequest = async (config) => {
//     return await axios (config);
// };

// const deleteData = () => {
//     makeRequest({
//         url: "https://jsonplaceholder.typicode.com/posts/1",
//         method: "DELETE"
//     })
//     .then((res) => console.log(res.data))   
//     .catch((err) => console.log(err));
// };

// deleteData();






// video 86 tutorial starting




































































