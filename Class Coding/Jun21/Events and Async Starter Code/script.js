//1. Window Click

window.addEventListener("click", (event) => {
    console.log(event.target);
});

// window.onclick((event) => {
//     console.log(event.target);
// });

//2. Logo Click
let logoElem = document.querySelector(".header__logo");
logoElem.onclick = function () {
    logoElem.style.fontWeight = "bold";
};

// Or

// logoElem.addEventListener("click", () => {
//     logoElem.style.fontweight = "bold";
// });

//Key Press Event
//1. Key Press Event

document.querySelector(".search").addEventListener("keyup", (event) => {
    console.log("I have typed " + event.key);
    document.querySelector(".hero-title").innerHTML = event.key;
    document.querySelector(".card__content").innerHTML = event.target.value;
});
