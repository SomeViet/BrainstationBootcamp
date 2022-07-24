// Exercise 1 - Create Burger Constructor

function Burger(toppings, protein, containsGluten) {
    // initialization
    this.toppings = toppings;
    this.protein = protein;
    this.containsGluten = containsGluten;

    // method
    this.describe = function () {
        console.log(
            `Burger contains : ${this.toppings} and protein : ${this.protein}`
        );
    };
}

// Exercise 2 - Create 2 Instances
const burger1 = new Burger(["Tomato", "Lettuce", "Cheese"], "Beef", false);

const burger2 = new Burger(
    ["Onion", "Tomato", "Lettuce", "Pickles"],
    "Human",
    false
);

burger1.describe();
burger2.describe();

// Exercise 3 - Console log the burgers
console.log(burger1);
console.log(burger2);

// Exercise 4 - Add warning method
Burger.prototype.warning = function () {};

// Learn on my own later
