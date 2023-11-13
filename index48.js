
// finding the elements

// 1st argument

const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");
// console.log(name);
// const form = document.querySelector("form");
// const form = document.querySelector("form");


form.addEventListener("submit", formHandler);

// function formHandler(event) {
//     event.preventDefault();
//     console.log(name.value);
//     console.log(email.value);
//     console.log(password.value);
// }


// 2nd argument

// function formHandler(event) {
//     event.preventDefault();

//     const userInfo = {
//         name: name.value,
//         email: email.value,
//         password: password.value,
//     };

//     console.log(userInfo);


// }



// 3rd argument


function formHandler(event) {
    event.preventDefault();

    const userInfo = {
        name: name.value,
        email: email.value,
        password: password.value,
    };

    console.log(userInfo);

    name.value = "";
    email.value = "";
    password.value = "";


}