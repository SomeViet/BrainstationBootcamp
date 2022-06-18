//Named Functions as Param

// 1. Create a function declaration called outputName

function outputName(nameToPrint) {
    let finalString = "Your name is: " + nameToPrint;
    console.log(finalString);
}

// 2. Create a function declaration called sayMyName
function sayMyName(firstName, lastName, printFunction) {
    let fullName = firstName + " " + lastName;
    printFunction(fullName);
}

// 3. Call sayMyName
sayMyName("Kevin", "Tran", outputName);

// Call Stack

/*
sayMyName("Kevin", "Tran", outputName)
    --> Line 13: sayMyName("Kevin", "Tran", outputName){
        let fullName = firstName + " " + lastName;
        outputName ("Kevin Tran");
    }   --> function 


    ???
*/

// 4. sayMyName("Kevin", "Tran", outputName);
sayMyName("Kevin", "Tran", console.log);

/*
sayMyName("Kevin", "Tran", console.log);
    --> Line 13: sayMyName("Kevin", "Tran", console.log) {
        let fullName = firstName + " " = lastName;
        console.log ("Kevin Tran")
        }*/

// Anonymous Function as Parameters
// 1. Use the setTimeout function to console.log a message of your choice after 2 seconds

setTimeout(function () {
    console.log("Im in Time");
}, 2000);

/* Call Stack 
    setTimeout(<ananymous function>,2000)
    --> Line 50 : <ananymous: true>
        --> Line 50: console.log

    */

// 2. Modify the body of the anonymous function passed to setTimeout to call sayMyName instead of console.log after 2 seconds
setTimeout(sayMyName("Kevin2", "Tran", console.log), 2000);

setTimeout(function () {
    sayMyName("Kevin3", "Tran", console.log);
});

/* CallStack??*/

// Arrow Function

let myArrowFun = (nameToprint) => {
    let finalString = "Your name is: " + nameToprint;
    console.log(finalString);
};

// Rewrite the previous exercise with arrow function
setTimeout(() => {
    console.log("I m in arrow function timer");
}, 2000);

//Rewrite outputName and sayMyName functions with the arrow function syntax
// 1. Create a function declaration called outputName

function outputName(nameToPrint) {
    let finalString = "Your name is: " + nameToPrint;
    console.log(finalString);
}

// 2. Create a function declaration called sayMyName
function sayMyName(firstName, lastName, printFunction) {
    let fullName = firstName + " " + lastName;
    printFunction(fullName);
}

// 3. Call sayMyName
sayMyName("Kevin", "Tran", outputName);
