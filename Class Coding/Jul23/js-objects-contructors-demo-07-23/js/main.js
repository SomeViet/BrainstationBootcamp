// //Test

// var x = "ankar";
// x = 123;
// x = x + "X";

// console.log(x);

// Is JAvascript a OOP ("Object Oriented Project") language?? NO
// Stricted Typed Language?? NO JS is a loosely typed "Object based" Language

// Strictly Typed Language Example
// int x = 10;
// x = "ankur" // Error

// Loosely typed Example:
// var x = "ankar";
// x = 123;
// x = x + "X";

// Object Based vs Object Oriented
// String myStr = "Brainstation";
// myStr is an object;

// Object Based Language Paradigm
// var myStr = "Brainstation";
// myStr is a literal / variable
// var obj = {key : value}

// 2015 : ES6
// Added: Objects and Classes, and Arrays

// Almost Everything is an object
// Datatype: type of Data
// - Primitive : string, interger (number), boolean
// - Object: arrays, object, promises...(custom stuff);
// Object: Datatype that contains Key:Value Pairs, methods

var str = "Brainstation";
console.log(typeof str);
console.log(str.length);
//console.dir (typeof str); ???
console.log(str.__proto__);

// array
const arr = [1, 2, 3];
console.log(typeof arr);
console.log(arr.__proto__);

// functions
const addNumber = (x, y) => {
    return x + y;
};

console.log(typeof addNumber);
console.dir(addNumber);
console.log(addNumber(5, 6));
console.log(addNumber.call(this, 5, 6));

// Added a new property
addNumber.title == "This is a function object";
console.log(addNumber.title);
console.dir(addNumber);

// Object
// Way 1
let bookObj = { title: "My Title", author: "My Author" };
console.log(bookObj);

// Way 2
// Constructor
// OOP Way
// this keyword points / references to the current instance
function Book(x, y) {
    console.log("This is a constructor");
    this.title = x;
    this.author = y;
}

const bookObj2 = new Book("My Title 2", "My Author 2");
console.log(bookObj2);

// Add Methods using this keyword
function Book(title, author) {
    //setting value
    this.title = title;
    // this.author = author;

    // Getters and Setters
    this.setAuthor = function (author) {
        this.author = author;
    };
    this.getAuthor = function () {
        return this.author;
    };
}
