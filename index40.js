
// 1st argument

// array area
var photos = ["images/img1.jpg", "images/img2.png", "images/img1.jpg"];
var imgTag = document.querySelector("img");

// function area

var count = 0;
function next () {
    count++;

    if (count >= photos.length) {
        count = 0;
        imgTag.src = photos[count];
    }
    
    else {
        imgTag.src = photos[count];
    }
};


function prev () {
    count--;

    if (count < 0) {
        count = photos.length - 1;
        imgTag.src = photos[count];
    }
    
    else {
        imgTag.src = photos[count];
    }
};