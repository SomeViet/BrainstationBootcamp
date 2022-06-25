let myClock = document.getElementById("myClock");
let stopButton = document.getElementById("stop"); // returns an html elements DOM object
let resetButton = document.getElementById("reset"); // returns an html elements DOM object

let myTimer = setInterval(function () {
    myClock = +myClock.innerHTML + 1;
}, 1000);

stopButton.addEventListener("click", function () {
    clearInterval(myTimer); // this will stop the interval from running
});
