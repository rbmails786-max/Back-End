//Map 
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);

//Filter
const numbers1 = [1, 2, 3, 4, 5];

const evenNumbers = numbers1.filter(num => num % 2 === 0);

console.log(evenNumbers); 

//Reduce
const arr = [2, 3, 4];

const product = arr.reduce((acc, num) => acc * num, 1);

console.log(product); 

//Closure
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

//Callback
const validation=(value,rule)=>rule(value)

const isPositive=n=>n%2==0
const isEven=n=>n%2!=0

console.log(validation(10,isPositive));
console.log(validation(10,isEven));

//SetTimeout
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
