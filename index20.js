
// var i = 1;
// while (i < 5) {
//     document.write(" " + i );
//     i++;
// }



var i = 1;
var sum = 0;

while (i < 50) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.write(" " + i);
        sum = sum + i;
    }

    i = i + 1;
}

document.write(" " + sum);
document.write(" <h1>Ending counting</h1> ");


// var i = 2;
// var sum = 0;

// while (i <=100) {
//     sum = sum +  i;
//     i = i + 2;
// }

// document.write(sum + "</br>");
// document.write("<h1> Ending Here </h1>");


