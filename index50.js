
// load, upload,
// scroll
// resize
// toggle - kaj kore (details er sathe)

// 1st argument

// window.addEventListener("load", function () {
//     console.log("load");
// });

// window.addEventListener("unload", function () {
//     console.log("unload");
// });


// window.addEventListener("scroll", function () {
//     console.log("scroll");
// });


// window.addEventListener("resize", function () {
//     console.log("resize");
// });


// window.addEventListener("resize", function () {
//     const width = window.outerWidth;
//     const height = window.outerHeight;
//     console.log("width=" + width + " height=" + height);
    
// });



// window.addEventListener("resize", function () {
//     const width = window.outerWidth;
//     const height = window.outerHeight;
    
//     console.log(`height: ${height}, width: ${width}`);
// });


// const details = document.querySelector("details");

// details.addEventListener("toggle", function () {
//     console.log("toggle");
// });



const details = document.querySelector("details");

details.addEventListener("toggle", function (event) {
    console.log(event.target.open);
});