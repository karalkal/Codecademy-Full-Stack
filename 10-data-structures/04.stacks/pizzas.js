const Stack = require('./Stack');


const pizzaStack = new Stack(6) // maxSize

for (p = 1; p < 7; p++) {
    const addedPizza = "Pizza#" + p;
    pizzaStack.push(addedPizza);
    console.log("Added", addedPizza)
}

try {
    pizzaStack.push("Pizza#7");

} catch (e) {
    console.log(e)
}

let firstPizza = pizzaStack.peek();
console.log("The first pizza to deliver is", firstPizza);

for (p = 6; p > 0; p--) {
    const nextPizza = pizzaStack.pop("Pizza#" + p);
    console.log("Next is", nextPizza);
}
try {
    pizzaStack.pop();

} catch (e) {
    console.log(e);
}
