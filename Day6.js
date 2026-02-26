//Task 1

let cart = [];
cart.push("Laptop");
cart.push("Headphones");
cart.push("Mouse");


let removedItem = cart.pop();
console.log("Final cart:", cart);
console.log("Removed item:", removedItem);

//Task 2

let numbers = [10, 20, 30, 40];
let removedElement = numbers.shift();

numbers.unshift(5);


console.log("Updated array:", numbers);
console.log("Removed element:", removedElement);

//Task 3

let skills = ["HTML", "CSS", "JavaScript"];


if (!skills.includes("React")) {
  skills.push("React");
}
console.log("Skills:", skills);

//Task 4
let numbers1 = [1, 2, 3, 4, 5];


let middleThree = numbers1.slice(1, 4);

console.log("Original array:", numbers1);
console.log("Middle 3 elements:", middleThree);

//Task 5
let num = [1, 2, 3, 4, 5];
num.splice(2, 2, 100, 200);

console.log(num);

//Task 6
let arr1 = [1, 2];
let arr2 = [3, 4];

let combined = arr1.concat(arr2);

console.log(combined);

//Task 7
let technologies = ["JS", "React", "Node"];


let result = technologies.join(" - ");

console.log(result);

//Task 8
let numbers2 = [40, 5, 100, 1, 25];


let ascending = [...numbers2].sort((a, b) => a - b);


let descending = [...numbers2].sort((a, b) => b - a);

console.log("Original:", numbers2);
console.log("Ascending:", ascending);
console.log("Descending:", descending);

//Task 9
let arr = [1, 2, 3, 4, 5];

arr.reverse();

console.log(arr);

//Task 10
let numbers3 = [10, 20, 30, 40, 50];
let valueToFind = 30;


let index = numbers3.indexOf(valueToFind);


if (index !== -1) {
  console.log("Index:", index);
} else {
  console.log("Not Found");
}

//Task 11
let numbers4 = [1, 2, 3, 4];


let multiplied = numbers4.map(num => num * 5);

console.log(multiplied);

//Task 12
let people = [
  { name: "Sudhan", age: 22 },
  { name: "Ravi", age: 25 }
];


let names = people.map(person => person.name);

console.log(names);

//Task 13
let numbers5 = [10, 15, 20, 25, 30];


let result1 = numbers5.filter(num => num > 20);

console.log(result1);

//Task 14
let products = [
  { name: "Laptop", price: 55000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Phone", price: 12000 }
];


let expensiveProducts = products.filter(product => product.price > 10000);

console.log(expensiveProducts);

//Task 15
let numbers6 = [100, 200, 300];


let total = numbers6.reduce((sum, current) => sum + current, 0);

console.log(total);

//Task 16
let products1 = [
  { name: "Mobile", price: 10000 },
  { name: "Laptop", price: 50000 },
  { name: "Headset", price: 2000 }
];


let productNames = products1.map(product => product.name);


let expensiveProducts1 = products1.filter(product => product.price > 5000);


let totalPrice = products1.reduce((sum, product) => sum + product.price, 0);


let hasCheapProduct = products1.some(product => product.price < 3000);

console.log("Product Names:", productNames);
console.log("Products above 5000:", expensiveProducts);
console.log("Total Price:", totalPrice);
console.log("Any product below 3000?", hasCheapProduct);

//Task 22
let marks = [85, 72, 90, 34, 60, 78];


let above70 = marks.filter(mark => mark > 70);


let allPassed = marks.every(mark => mark >= 35);


let firstFailed = marks.find(mark => mark < 35);


let average =
  marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

console.log("Marks above 70:", above70);
console.log("All students passed?", allPassed);
console.log("First failed student mark:", firstFailed);
console.log("Average mark:", average);

//Task 23
let numbers7 = [1, 2, 2, 3, 4, 4, 5];


let uniqueNumbers = numbers7.filter(
  (value, index, self) => self.indexOf(value) === index
);

console.log(uniqueNumbers);

//Task 24
let users = [
  { name: "Sudhan", age: 22 },
  { name: "Ravi", age: 25 },
  { name: "Anita", age: 22 },
  { name: "Kiran", age: 25 },
  { name: "Meena", age: 30 }
];


let groupedByAge = users.reduce((acc, user) => {
  
  if (!acc[user.age]) {
    acc[user.age] = [];
  }


  acc[user.age].push(user);

  return acc;
}, {});

console.log(groupedByAge);

//Task 25
let nestedArray = [[1, 2], [3, 4], [5]];


let flattened = nestedArray.reduce((acc, current) => {
  return acc.concat(current);
}, []);

console.log(flattened);