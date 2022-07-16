// window.addEventListener("click", (event) => {
//     console.log(event.target);
// });

// let logoElem = document.querySelector(".header__logo");

// logoElem.onclick = function () {
//     logoElem.style.fontWeight = "bold";
// };

let searchText = document.querySelector(".search");

searchText.addEventListener("keyup", (event) => {
    let heroTitle = document.querySelector(".hero-title");
    heroTitle.innerHTML = event.key;
});

searchText.addEventListener("keyup", (event) => {
    let contentText = document.querySelector(".card__content");
    contentText.innerHTML = event.target.value;
});
