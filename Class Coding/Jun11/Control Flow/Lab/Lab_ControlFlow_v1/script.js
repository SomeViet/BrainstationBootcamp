// Exercise 1
// let time = 15;
// let timeOfWeek = "weekday";

// if (timeOfWeek === "weekend") {
//     console.log("Go Home");
// } else {
//     if (time < 10) {
//         console.log("You are early");
//     } else if (time == 10) {
//         console.log("You're on time");
//     } else {
//         console.log("You're late");
//     }
// }

// Exercise 2
// let facialExpression = "scowl";

// switch (facialExpression) {
//     case "smiling":
//         console.log("You look happy");
//         break;
//     case "frowning":
//         console.log("You look sad");
//         break;
//     case "scowl":
//         console.log("You look pissed");
//         break;
//     default:
//         console.log("????");
// }

// Exercise 2 - method 2, Nathan's fun method
// let facialExpression = "moo";

// let expressions = {
//     smiling: "You look happy",
//     frowning: "You look sad",
//     scowl: "You look pissed",
//     default: "???",
// };

// let msg = "";
// msg = expressions[facialExpression]
//     ? expressions[facialExpression] // if true, then
//     : expressions.default;  // otherwise
// console.log(msg);

// Exercise 3
// let famousCats = ["garfield", "felix", "meowth"];

// for (let i = 0; i < famousCats.length; i++) {
//     console.log(famousCats[i]);
// }

// for (let i = 1; i < famousCats.length; i++) {
//     console.log(famousCats[i]);
// }

//just reverse the array list

// Exercise 3 - While loop
// let famousCats = ["garfield", "felix", "meowth"];

// let i = 0;
// while (i < famousCats.length) {
//     console.log(famousCats[i]);
//     i = i + 1;
// }

// Exercise 4

let famousCats = ["garfield", "felix", "meowth"];
let myFavorite = "meowth";

for (let i = 0; i < famousCats.length; i++) {
    if (famousCats[i] === myFavorite) {
        console.log("MY KITTY!!");
        break;
    }
    console.log("Kitty??");
}
