// Writing to the html body

document.write("<p>Hi I am Kevin</p>");
document.write("<h2>Primitive Databases</h2>");

// Log / Warn / Debug
console.log("Hello I am logging");
console.debug("Hello, this is debugging-chan");
console.info("Hello I am info");
console.error("Error: This is an error");
console.warn("Warning: This is a warning");

console.log(1);
console.log(0.26);
//Int
console.log(156498498165165123156);
//Boolean
console.log(true); // false
//Strings
console.log("I am learning strings");
//Null
x = null;
console.log(x);

//Undefined
//console.log(y);

// Operators
console.log(5 + 5);
// BODMAS
console.log((5 + 7) * 2);

//2. Logical Operators
// not true is equivalent to false
console.log(1 && 5); //bit operation
console.log(5 && 6); //bit operation
// 001
// 101
// 1 0 1
console.log(true && true);
console.log(true || false);

//3. Comparison Operator
//Loosely typeed language and strongly type language
//What is better?
console.log(1 == "1");
console.log(1 === "1");

console.log(2 != "1");
console.log(1 !== "1");

console.log(5 > 2); // <
console.log(5 >= 5); // <=

// typeof Operator
console.log(typeof 100); //number // type of 100
console.log(typeof 101.5);
console.log(typeof "I am Kevin"); //string
console.log(typeof true); //boolean

// Variables
// Loosely Typed Language
x = 10;
console.log(x);
console.log(typeof x); //number

x = "Brainstation";
console.log(x);
console.log(typeof x); //string

//Functions:
//{...}
//1. Signature
function funName() {
  //2. Definition
  console.log("I am in a function");
  let x = 10;
  let y = 20;
  console.log(x + y);
}
// 3. Call --> return some value
// ----> just output the value
funName();

//Functions without parameter
function funNameWithoutParam() {
  //2. Definition
  console.log("I am in a function without a param");
  let x = 10;
  let y = 20;
  console.log(x + y);
}
funNameWithoutParam();

//Functions with parameter
//Scope - local
function funNameWithParam(a, b, c, d) {
  //let
  console.log("I am in a function with param");
  console.log(a + b);
}
funNameWithParam(3, 6);
