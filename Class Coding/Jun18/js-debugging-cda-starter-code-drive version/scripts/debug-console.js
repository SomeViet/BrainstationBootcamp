const locations = ["new york", "london", "toronto", "vancouver", "miami"];
const student = {
    firstName: "John",
    lastName: "Doe",
    course: "Web Development",
};

// different ways to console.log information in web console
// ADD YOUR CODE AFTER THIS LINE

console.log("this message is printed in web console using log() method");
console.info("user login good");
console.warn("Warning, this is a warning");
console.error("ERROR ERROR!");
console.log("Locations in table");
console.table(locations);
console.log("Student info in table");
console.table(student);

console.time("total_execution_time");
function add(num1, num2) {
    console.log("Addition is: ", num1 + num2);
}
function multiply(num1, num2) {
    console.log("Multiplication is: ", num1 * num2);
}
add(20, 40); // call the addition function
multiply(3, 4); // call the multiplication function
console.timeEnd("total_execution_time");
