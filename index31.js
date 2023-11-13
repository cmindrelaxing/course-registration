
// student details 

// 1st assignment

// var name = "Shakil Ahmed";
// var age = "27";
// var cgpa = "3.92";
// var lang = ["Bengali", "Hindi", "English"];
// console.log(name);

// var student1 = {
//     name: "Shakil Ahmed",
//     age: "27",
//     cgpa: "3.92",
//     lang: ["Bengali", "Hindi", "English"]
// }

// console.log(student1);



// 2nd assignment


// var name = "Shakil Ahmed";
// var age = "27";
// var cgpa = "3.92";
// var lang = ["Bengali", "Hindi", "English"];
// // console.log(name);

// var student1 = {
//     name: "Shakil Ahmed",
//     age: "27",
//     cgpa: "3.92",
//     lang: ["Bengali", "Hindi", "English"]
// }

// console.log(student1.name);



// var name = "Rokeya Khatun";
// var age = "27";
// var cgpa = "2.92";
// var lang = ["Bengali", "Urdu", "English"];
// // console.log(name);

// var student2 = {
//     name: "Rokeya Khatun",
//     age: "27",
//     cgpa: "2.92",
//     lang: ["Bengali", "Hindi", "English"]
// }

// console.log(student2.name);



// var name = "Keya";
// var age = "27";
// var cgpa = "4.92";
// var lang = ["Bengali", "Hindi", "English"];
// // console.log(name);

// var student3 = {
//     name: "Keya",
//     age: "27",
//     cgpa: "4.92",
//     lang: ["Bengali", "Portuguese", "English"]
// }

// console.log(student3.name);



// 3rd assignment

// function Student (name, age, cgpa, lang) {
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;
// }

// var student1 = new Student ("Shakil Ahmed", 27, 3.92, ["Bangli", "Urdu", "English"]);
// var student2 = new Student ("Khushi Khatun", 22, 3.52, ["Bangli", "Portuguese", "English"]);
// var student3 = new Student ("Keya", 21, 3.85, ["Bangli", "Nepalese", "English"]);

// console.log(student1.name);
// console.log(student2.name);
// console.log(student3.name);




// 4th assignment

function Student (name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student1 = new Student ("Shakil Ahmed", 27, 3.92, ["Bangli", "Urdu", "English"]);
var student2 = new Student ("Khushi Khatun", 22, 3.52, ["Bangli", "Portuguese", "English"]);
var student3 = new Student ("Keya", 21, 3.85, ["Bangli", "Nepalese", "English"]);

student1.display();
student2.display();
student3.display();