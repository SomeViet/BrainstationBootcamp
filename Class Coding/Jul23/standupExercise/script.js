// // Kevin's attempt

// let arr1 = [1, 2, 4];
// let arr2 = [1, "abc", 3];

// function isNumber(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].constructor === Number) {
//             console.log(array[i]);
//         } else console.log("There is something here");
//     }
// }

// isNumber(arr2);

let arr1 = [1, 2, 4];
let arr2 = [1, "abc", 3];

function isNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            return false;
        }
    }
    return true;
}

console.log(isNumber(arr1));
