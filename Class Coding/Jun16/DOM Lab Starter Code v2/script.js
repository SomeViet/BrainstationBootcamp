// let test1 = document.getElementById("nav-bar");
// console.log(test1);

// let test2 = document.querySelector("main");
// console.log(test2);

// let test3 = document.querySelectorAll("a");
// console.log(test3);

// let test4 = document.querySelector("a");
// console.log(test4);
//~~~~
// function Logo() {
//     let test5 = document.getElementsByClassName("header-item logo");
//     console.log(test5[0].innerText);
// }

// setTimeout(Logo, 5000);
//~~~~~
// function Logo2() {
//     let test6 = (document.getElementById("logo").innerText = "Kevin's Success");
//     console.log(test6);
// }

// setTimeout(Logo2, 5000);

function multi() {
    let test7 = document.querySelectorAll("a");
    for (let i = 0; i < test7.length; i++) {
        test7[i].style.textDecoration = "underline";
    }
    console.log(test7);
}

setTimeout(multi, 3000);
