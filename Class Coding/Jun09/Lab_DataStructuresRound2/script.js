// let gundam = ["Freedom", "Justice", "Destiny"];

// console.log(gundam);
// console.log(gundam[2]);
// console.log(gundam[0]);
// console.log(gundam[10]);
// ~~~~
// let gundam2 = [];

// gundam2.push("Aile");
// gundam2.push("Aegis");
// gundam2.push("Buster");

// console.log(gundam2);

// let returnedValue = gundam2.push("Duel");
// console.log(returnedValue);
// console.log(gundam2);

// //return value of the push operation is the
// //length of the array after the push operation is invoked.

// gundam2.pop();
// console.log(gundam2);
// gundam2[5] = "Blitz";
// console.log(gundam2);
// gundam2.splice(3, 2);
// console.log(gundam2);
// ~~~~

let person = {
    firstName: "Kevin",
    lastName: "Tran",
    likesCoffee: true,
};
console.log(person);

let person2 = {};
person2.firstName = "Kira"; //dot notation
person2["lastName"] = "Yamato"; //square notation
person2.likesCoffee = false;

console.log(person2.firstName);
console.log(person2["lastName"]);

let currentKey = "firstName"; //dynamic key
console.log(person2[currentKey]);
