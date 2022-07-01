let webdevterms = ["Html", "CSS", "Java", "React"];

console.log(webdevterms);
console.log(webdevterms[0]);
console.log(webdevterms[3]);

let lastItem = webdevterms.pop();
console.log(webdevterms);
console.log(lastItem);

console.log(webdevterms[webdevterms.length - 1]);

//~~~~~~

let webdev2 = [];

let returnedValue = webdev2.push("SASS");

console.log(returnedValue);
webdev2.push("BEM");
webdev2.push("Flexbox");
webdev2.push("Position");

console.log(webdev2);

webdev2.pop();

console.log(webdev2);

webdev2[7] = "BoxModel";

console.log(webdev2);

webdev2.splice(3, 4);

console.log(webdev2);

//~~~~

let coffee = [
    {
        firstName: "Kevin",
        lastName: "Tran",
        likesCoffee: true,
    },
];

console.log(coffee);

// square brackets [] are for arrays
// squiggly brackets {} are for objects

let coffee2 = {};

coffee2.firstName = "Kevin"; // dot notation

console.log(coffee2.firstName);

coffee2["lastName"] = "Tran"; // square notation
console.log(coffee2["lastName"]);

coffee2.likesCoffee = true;

console.log(coffee2);

let currentKey = "likesCoffee";
console.log(coffee2[currentKey]);
