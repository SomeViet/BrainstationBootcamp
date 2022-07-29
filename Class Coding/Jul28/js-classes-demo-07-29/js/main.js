// Inheritance Demo
/*
 */
// Create Person
// Person --> name, age, height | sayHello()

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

// Create Student inheriting Person
// Student --> gpa

class Student extends Person {
    constructor(name, age, height, gpa) {
        super(name, age, height); // invoke parent constructor
        this.gpa = gpa;
    }
}

// Create Array of Students

const student1 = new Student("Abc", 18, 165, 3.0);
const student2 = new Student("Pqr", 21, 165, 4.0);
const student3 = new Student("123", 25, 163, 3.5);

let studentArr = [student1, student2, student3];

// Create Instructor inheriting Person
// Instructor --> course

class Instructor extends Person {
    constructor(name, age, height, courseName) {
        super(name, age, height); // invoke parent.constructor
        this.courseName = courseName;
    }
}

// Create Array of Instructors

const instructor1 = new Instructor("Nathan", 25, 163, "Math");
const instructor2 = new Instructor("Ankur", 25, 163, "English");

let instructorArr = [instructor1, instructor2];

// Console Log All the students

console.log(studentArr);

// Console log all the instructors

console.log(instructorArr);

// Display them on the UI
function createListItem(name) {
    let li = document.createElement("li");
    li.textContent = name;
    return li;
}

function showClass() {
    // get the ul#menu
    const studentsList = document.querySelector("#students-list");
    studentsList.innerHTML = "";
    // Add students from Array
    // Hint : Use for loop and use
    // studentsList.appendChild(createListItem('Student 1'));

    //Array.for each
    studentArr.forEach((student) => {
        studentArr.appendChild(
            createListItem(student.name + " " + student.gpa)
        );
    });

    const instrutorsList = document.querySelector("#instructors-list");
    instrutorsList.innerHTML = "";

    // Add instructors from Array
    // Hint : Use for loop and use
    // studentsList.appendChild(createListItem('Student 1'));
}
