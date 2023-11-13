
// Array methods

var names = ["Shakil", "Rokeya", "Sokina"];
console.log(names);


// shift opposite of pop

names.shift();
console.log(names);

// unshift opposite of push

names.unshift("Sagor");
console.log(names);

// names.splice(2,0, "Korim", "Rohim");
// console.log(names);


// remove 1 username
// names.splice(2,1, "Korim", "Rohim");
// console.log(names);


// names.splice(1,2);
// console.log(names);


// var newArray = names.splice(1);
// console.log(newArray);
// console.log(names);


// var sortedNames = names.sort();
// console.log(sortedNames);


// var sortedNames = names.sort();
// names.reverse;
// console.log(sortedNames);


// var numbers = [20, 5, 25, 45, 1];
// numbers.sort();
// console.log(numbers);


// var numbers = [20, 5, 25, 45, 1];
// numbers.sort(function(a, b) { 
//     return a - b;
// });
// console.log(numbers);


// var numbers = [2, 5, 25, 45, 1];
// numbers.sort(function(a, b) { 
//     return a - b;
// });
// console.log(numbers);


// var numbers = [2, 2, 25, 45, 1];
// numbers.sort(function(a, b) { 
//     return a - b;
// });
// console.log(numbers);


var numbers = [20, 5, 25, 45, 1];
numbers.sort(function(a, b) { 
    return b - a;
});
console.log(numbers);

