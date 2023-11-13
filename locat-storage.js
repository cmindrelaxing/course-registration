console.clear();

// setItem(key, value);

// localStorage.setItem("userName", "Shakil Ahmed");
// localStorage.setItem("password", "Shakil3355");

// const userName = localStorage.getItem("userName");
// const password = localStorage.getItem("password");

// console.log(userName, password);


// localStorage.setItem("userName", "Rokeya Islam");
// localStorage.setItem("password", "Shakil3355");

// localStorage.removeItem("userName");
// localStorage.removeItem("password");


// const countries = ["Astoria", " Bangladesh", " Mishora"];
// localStorage.setItem("countries", JSON.stringify(countries));

// console.log(localStorage.countries);

// getItem(key)
const countriesList = JSON.parse(localStorage.getItem("countries"));
console.log(countriesList);