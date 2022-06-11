//1.
let sum = 3 + 5;
console.log(sum);

//2.
let first = "Kevin";
let last = "Tran";
console.log(first + " " + last);

//3.
let on = true;
let off = false;
console.log(on || off);
console.log(on && off);

//4.
console.log((3 + 5) * 11);

//5.
console.log(1 === 1);

//6.
console.log(1 === "1");

//7.
console.log(10 > 5);

//8.
console.log(2 == "2");
console.log(2 === "2");

//9.
console.log(10 % 3);

//10.
let numVar = 100;
let floatVar = 101.5;
let stringVar = "STRINGGG";
let boolVar = true;
let nullVar = null;
let y = undefined;
console.log(typeof numVar);
console.log(typeof floatVar);
console.log(typeof stringVar);
console.log(typeof boolVar);
console.log(typeof nullVar);
console.log(typeof y);

function addNumber(num1, num2) {
  return num1 + num2;
}
console.log(addNumber(15, 20));
