

// 1st argument


// for (var i = 0; i < 3; i++) {
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function() {
//         var text = this.innerHTML;
//         console.log(text);

//         switch(text) {
//             case "Button A":
//                 var audio = new Audio('sounds/sound1.mp3');
//                 audio.play();
//                 break;

            
//             case "Button B":
//                 var audio = new Audio('sounds/sound2.mp3');
//                 audio.play();
//                 break;
//                 break;

            
//             case "Button C":
//                 var audio = new Audio('sounds/sound3.mp3');
//                 audio.play();
//                 break;
//         }
//     });
// }



// 2nd argument



for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function() {
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);

    });
}

function audioPlay(text) {
    switch(text) {
        case "Button A":
            var audio = new Audio('sounds/sound1.mp3');
            audio.play();
            break;

        
        case "Button B":
            var audio = new Audio('sounds/sound2.mp3');
            audio.play();
            break;
            break;

        
        case "Button C":
            var audio = new Audio('sounds/sound3.mp3');
            audio.play();
            break;
    }
}