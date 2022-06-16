// Root DOM API Object
// Stretch Assignment : https://www.w3schools.com/jsref/obj_window.asp

/*
window.alert("Hello");

location.href = "https://www.w3schools.com";

window.history.back();
*/

/*
window.document.write("Hello World from script");
document.write("Hello World from script2");
*/

let h1Element = document.getElementById("intro");
h1Element.innerText = "Good Bye";
h1Element.style.color = "red";
h1Element.setAttribute("style", "color:green");
