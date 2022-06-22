// Synchronous Callback

function add(num1, num2) {
    return num1 + num2;
}

function operation(num1, num2, calbackFN) {
    let result = calbackFN(num1, num2);
    return result;
}
//passing function as a parameter
console.log(operation(10, 5, add));

// Cal Stack

// Line 11 : operation(10 , 5 add)
//     Line 6 --> function operation (10, 5, add) {
//         let result = add(num1, num2);
//                     Line 2 --> 10 + 5
//                     return result // 15;
//     }

// Asynchronous Callback
function programming() {
    console.log("I am programming!");
}
function drinkingCoffee() {
    console.log("I am programming!");
}

// Time: 10am
setTimeout(programming, 2000);
setTimeout(drinkingCoffee, 5000);
setTimeout(programming, 2000);
setTimeout(drinkingCoffee, 5000);

// Events
// Click Event of Window

// 3 Ways of Handling Events
// 1. On Method
// Steps to work with Events
// Add Event Listener onclick
// Associate or Trigger a function
window.onclick = () => {
    console.log("Window is clicked");
};
document.querySelector(".action-button__on").onclick = () => {
    console.log("Button is clicked from on event");
};

// Stretch Assignments : Try different on click methods

// 2. using addEventListener()
// Selecting the DOM element
let actnbtn = document.querySelector(".action-button__event");
// Add Event Listner
// Associate or Trigger a function
actnbtn.addEventListener("click", () => {
    console.log("I am from event listner button");
});

// 3. Using inline function
const inlineClickfn = () => {
    console.log("I am clicked from Inline Function");
};

// Stretch ASsignemtns : Try RemoveListner

// Mouse Events
// Step 1 : Selecting the DOM Element input box
let inputElem = document.querySelector(".input-field");

// Step 2: ADD Event Listner
// Event Object

// Step 3: Associate a trigger
inputElem.addEventListener("input", (event) => {
    console.log(event.target.value);
});

// Form Events
// Step 1 : Selecting the DOM element Form
let formElem = document.querySelector("#my-form");
