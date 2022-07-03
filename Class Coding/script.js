function formatAge(name, age) {
    let formattedAge = name + " is " + age * 7 + " in dog years.";
    return formattedAge;
}
let dog = formatAge("Ryan", 4);
console.log(dog);
console.log(formatAge("Ryan", 4));
