console.log(Boolean("")); // false
console.log(Boolean("Hello World")); // true
console.log(Boolean(null)); // false
console.log(Boolean(-1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(["apple", "orange", "pears"])); // true
console.log(Boolean([])); //true
console.log(Boolean({})); // true
console.log(Boolean([].length)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); // false

const myObjFromAnApi = {
    name: "Patrick",
    role: "Educator",
    hobbies: [""],
};

if (myObjFromAnApi.hobbies) {
    console.log(myObjFromAnApi.hobbies[0] || "There is no hobby");
} else {
    console.log("no hobbies");
}

const obj1 = { name: "patrick", role: "Educator" };
const obj2 = { name: "patrick", role: "Educator" };

console.log(obj1 === obj2);
console.log(obj1 === obj1);
