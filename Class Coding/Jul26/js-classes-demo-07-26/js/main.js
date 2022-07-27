// // 2015 : ES6
// // Objects and Classes
// // Array

// // Object
// // Way 1
// let bookObj = { title: "My Ttile", author: "My Author" };
// console.log(bookObj);

// // Way 2
// // Construtor
// // OOP way
// // this keyword points / references to the current instance
// function Book(x, y) {
//     console.log("I m in Constructor");
//     this.title = x;
//     this.author = y;
// }
// const bookObj2 = new Book("Title 1", "Author 1");
// console.log(bookObj2);

// Way 3
// The oop way
// class

class Book {
    // properties
    // constructor
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    // methods
    displayDetails() {
        console.log(`Book: ${this.title} | ${this.author}`);
    }
}

const bookObj3 = new Book("Title 3", "Author 3");
bookObj3.displayDetails();

// (Almost) Everything is an object
console.log(typeof bookObj3); // should output object
console.log(bookObj3.__proto__); // should output the object classes/methods

console.log(typeof Book);

//Difference between Classes and Functions
// Hoisting : Reference Error

// [X] Extending CLasses
//     - extends - class ChildClass extends Parentclass <...ParentClass2...>
//     - super - extends the parent class constructor

// Person --> name, age, height | sayHello ()
// Student --> gpa

class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    sayHello() {
        console.log(`${this.name} says hello`);
    }
}

class Student extends Person {
    constructor(name, age, height, gpa) {
        super(name, age, height); // invoke parent.constructor
        this.gpa = gpa;
    }
}

const student1 = new Student("ABC", 18, 165, 3.0);
const student2 = new Student("DEF", 18, 165, 3.0);

student1.sayHello();
