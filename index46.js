
// 1st argument

// document.addEventListener("keypress", function(event){
//     var text = event.key;

//     document.querySelector("p").innerHTML = "You have pressed " + text;
// });



// 2nd argument

// document.querySelector("textarea").addEventListener("keypress", function(event){
//     var text = event.key;

//     document.querySelector("p").innerHTML = "You have pressed " + text;
// });



// 3rd argument

var count = 0;
document.querySelector("textarea").addEventListener("keypress", function(event){
    count++;
    var text = event.key;

    document.querySelector("p").innerHTML = "You have pressed " + count;
});