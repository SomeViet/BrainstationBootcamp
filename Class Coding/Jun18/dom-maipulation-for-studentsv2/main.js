var colorArray = ["aquamarine", "hotpink", "salmon", "orange"];
var nameArray = ["Ixlander", "Joshwa", "Ash", "Ondray"];

function changeBody() {
    // TODO: write your code here
    document.querySelector("body").style.backgroundColor = "#DFE3EE";
}

function changeNameListDiv() {
    // TODO: write your code here
    document.querySelector(".nameList").style.backgroundColor = "white";
    document.querySelector(".nameList").style.border = "2px grey solid";
}

function changeNames() {
    // TODO: write your code here
    let nameHTML = document.querySelectorAll(".nameList__names");
    for (let i = 0; i < nameHTML.length; i++) {
        nameHTML[i].style.color = colorArray[i];
        nameHTML[i].innerText = nameArray[i];
    }
}

// This function is called from the click event of the button
function changeMe() {
    // Change background color of the body
    changeBody();
    // Add gray border and `background color:white` to the `nameList` div
    changeNameListDiv();
    // call the changeNames function that you wrote above!
    changeNames();
}
