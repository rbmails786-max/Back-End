// Demonstrate difference between == and === using 5 comparison examples.

console.log(10 == "10");
console.log(10 === "10");

console.log(null == undefined);
console.log(null === undefined);

console.log(0 == false);
console.log(0 === false);

console.log("" == 0);
console.log("" === 0);

console.log(true == 1);
console.log(true === 1);

// Show 3 examples where implicit coercion gives unexpected results. Explain why.

console.log("5" + 2);
// will give 52, beacuse JS use '+' as to join 2 element while printing

console.log("5" - 2);
// will give 3, beacause in JS + and ,(comma) only used to join to elements while printing

console.log(0 == false);
// will return as true beacue JS type converts it implicitly

// Write a function calculateTotal(price, qty) where inputs are strings. Convert them explicitly before calculation.

function calculateTotal(price, quantity) {
  const numPrice = Number(price);
  const numQuantity = Number(quantity);

  return numPrice * numQuantity;
}

console.log(calculateTotal("500", 2));

// Create a function that converts any input to Boolean explicitly and returns whether it is truthy or falsy.

function checkBoolean(value) {
  const booValue = Boolean(value);

  if (booValue) {
    return "Truthy";
  } else {
    return "Falsy";
  }
}

console.log(checkBoolean(0));
console.log(checkBoolean(1));
console.log(checkBoolean(""));
console.log(checkBoolean(undefined));
console.log(checkBoolean(null));