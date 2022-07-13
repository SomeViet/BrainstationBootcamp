// Synchronous Function

// Asynchronous Function
// setTimeout

// Callbacks

/////////////////
//// Promise ////
/////////////////

// Producer
const promise1 = new Promise((resolve, reject) => {
    console.log("This is a promise");
    // Variable simulating an error
    error = true;
    // Rejected
    if (error) {
        reject("This is a reject state; error has occured");
    }
    // Fulfilled
    resolve("This is a resolve state");
});

console.log(promise1);

// Consumer

// Way 1: Error Handling
// promise1.then(
//     (result) => {
//         console.log(result);
//     },
//     (error) => {
//         console.log("Received an error");
//     }
// );

// Way 2: Error Handling

// Promise Interface
// variable.then().catch()  <-- this is the template format

promise1
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Received an error");
    });

// Convert Call back hell into Promise

// Promise Chaining

const promise2 = new Promise((resolve, reject) => {
    resolve("I have completed");
});

promise2
    .then((result) => {
        console.log(result);
        return result;
    })
    .then((result1) => {
        console.log(result1);
        return result1;
    })
    .then((result2) => {
        console.log(result2);
        return result2;
    })
    .then((result3) => {
        console.log(result3);
        return result3;
    })
    .then((result4) => {
        console.log(result4);
    })
    .catch((error) => {
        console.log(error);
    });

// Promise.all

//Bulk Execution

const promise10 = new Promise((resolve, reject) => {
    console.log("This is a promise");
    // Variable simulating an error
    error = true;
    // Rejected
    if (error) {
        reject("This is a reject state; error has occured");
    }
    // Fulfilled
    resolve("This is a resolve state");
});

const promise11 = new Promise((resolve, reject) => {
    console.log("This is a promise");
    // Variable simulating an error
    error = true;
    // Rejected
    if (error) {
        reject("This is a reject state; error has occured");
    }
    // Fulfilled
    resolve("This is a resolve state");
});
