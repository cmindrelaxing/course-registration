
// 1st argument

// document.querySelector("button").addEventListener("click", myFunction);

// function myFunction() {
//     alert("Hello");
// };



// 2nd argument


// document.querySelector("button").addEventListener("click", function () {
//     alert("Hello");
// });



// 3rd argument

var myVar = document.querySelector("h1");

myVar.addEventListener("mouseover", function () {
    myVar.classList.add("my-style");
});


var myVar = document.querySelector("h1");

myVar.addEventListener("mouseout", function () {
    myVar.classList.remove("my-style");
});


