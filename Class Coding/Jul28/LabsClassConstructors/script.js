function BurgerConstructor(toppings, protein, containsGluten) {
    this.toppings = toppings;
    this.protein = protein;
    this.containsGluten = containsGluten;

    this.describe = () => {
        console.log("Toppings: ");
        console.log(this.toppings);
        console.log("Protein: ");
        console.log(this.protein);
    };
}

BurgerConstructor.prototype.warning = function () {
    if (this.containsGluten) {
        console.log("This burger may contain gluten.");
    } else if (!this.containsGluten) {
        console.log("This burger is gluten free!");
    }
};

function describeAll(describeFunctions) {
    describeFunctions.forEach((describeFunction) => {
        describeFunction();
    });
}

// Part 1

class BurgerConstructor2 {
    constructor(toppings, protein, containsGluten) {
        this.toppings = toppings;
        this.protein = protein;
        this.containsGluten = containsGluten;
    }

    describe() {
        console.log("Toppings: ");
        console.log(this.toppings);
        console.log("Protein: ");
        console.log(this.protein);
    }

    warning() {
        if (this.containsGluten) {
            console.log("This burger may contain gluten.");
        } else if (!this.containsGluten) {
            console.log("This burger is gluten free!");
        }
    }
}
let beefBurger1 = new BurgerConstructor("Tomatos", "Human", true);
let beefBurger2 = new BurgerConstructor2("Tomatos", "Human", true);
console.log(beefBurger1);
console.log(beefBurger2);

beefBurger1.describe();

// Part 2

// class BurgerWithSide extends Burger {
//     constructor(toppings, protein, containsGluten, side) {
//         super(toppings, protein, containsGluten);
//         this.side = side;
//     }

//     firesWithThat() {}
// }
