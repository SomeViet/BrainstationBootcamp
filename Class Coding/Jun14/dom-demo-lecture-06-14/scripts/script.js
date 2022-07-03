// Root DOM API Object
// Stretch Assignment : https://www.w3schools.com/jsref/obj_window.asp
//window.alert("Hello");

// Location methods
// location.reload();
// () --> methods
// properties -> no parenthesis / we equate
//location.href = "https://www.w3schools.com/";

// History methods
//window.history.back();

// Document methods
//window.document.write("Hello World from script");
//document.write("Hello World from script 2");

// DOM Manipulation
// Step  1 : Selecting the element
let h1Element = document.getElementById("intro");
// Step 2 : Changing the property
h1Element.innerText = "Good Bye";
h1Element.style.color = "red";
h1Element.setAttribute("style", "color:green");

// Step  1 : Selecting the element
let h1Elements = document.getElementsByTagName("h1");
console.log(h1Elements);
// Step 2 : Changing the property
/*foreach(h1Element of h1Elements) {
    h1Element.innerText = "Good Bye";
    h1Element.setAttribute("style", "color:green");
}*/

// Selecting element
// #
// .
// p, h1
let h1ElementByClass = document.querySelector(".text-h1");
console.log(h1ElementByClass);

let h1ElementsByClass = document.querySelectorAll(".text-h1");
console.log(h1ElementsByClass);

for (let i = 0; i < h1ElementsByClass.length; i++) {
    h1ElementsByClass[i].innerText = "Good Bye";
}

// Task is to add one more item to the shopping List
// Step 1 : Select the list
// Step 2 : Get the element
let shoppingListElement = document.querySelector(".shoppingList");

// Step 3 : Manipulation
// Create a new element li
let li = document.createElement("li");
// Add text to that element
li.innerHTML = "New List Item";
// Append to the list
shoppingListElement.appendChild(li);
