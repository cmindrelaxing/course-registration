
// 1st argument


// document.querySelectorAll(".myButton")[0].addEventListener("click", function() {

//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked";
// });

// document.querySelectorAll(".myButton")[1].addEventListener("click", function() {

//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked";
// });

// document.querySelectorAll(".myButton")[2].addEventListener("click", function() {

//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked";
// });


// 2nd argument

// for (var i = 0; i < 3; i++) {
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function() {

//         var text = this.innerHTML;
//         document.querySelector("h1").innerHTML = text + " is clicked";
//     });
// }



// 3nd argument

var len = document.querySelectorAll(".myButton").length;

for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function() {

        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " is clicked";
    });
}

