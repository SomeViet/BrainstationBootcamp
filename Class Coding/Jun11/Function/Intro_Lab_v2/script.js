function avg(one, two, three) {
    let compute = (one + two + three) / 3;
    return compute;
}
let test = avg(1, 2, 3);
console.log(test);

//~~

function isEqual(string1, string2) {
    let areSame = string1 === string2;
    return areSame;
}
let test2 = isEqual("Meow", "Meow");
console.log(test2);

//~~

function output(rawr) {
    let woof = rawr;
    return woof;
}
let roar = output();
console.log(roar);
