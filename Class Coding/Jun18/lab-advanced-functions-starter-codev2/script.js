function outputName(nameToPrint) {
    let finalString = "Your name is: " + nameToPrint;
    console.log(finalString);
}

function sayMyName(firstName, lastName, printFunction) {
    let fullName = firstName + " " + lastName;
    printFunction(fullName);
}

sayMyName("Kevin", "Tran", outputName);
// Call Stack

/*
sayMyName("Kevin", "Tran", outputName)
    --> Line 15: sayMyName("Kevin", "Tran", outputName){
        let fullName = firstName + " " + lastName;
        outputName ("Kevin Tran");
    }   --> function outputName("Kevin Tran") {
        let finalString = "Your name is: " + "Kevin Tran";
        console.log(finalString)
    }
*/

sayMyName("Kevin", "Tran", console.log);

/*
sayMyName("Kevin", "Tran", console.log);
    --> Line 28: sayMyName("Kevin", "Tran", console.log) {
        let fullName = firstName + " " = lastName;
        console.log ("Kevin Tran")
        }*/

setTimeout(function () {
    console.log("I <3 Anime");
}, 2000);

setTimeout(function () {
    sayMyName("Kevin", "Tran", console.log);
}, 2000);

/*
Call Stack
Goes in:
setTimeout
sayMyName

Processes: 
sayMyName
setTimeout
*/

setTimeout(() => {
    sayMyName("Kevin", "Tran", console.log);
}, 1000);
