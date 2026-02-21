//Task 1
const fruits = ["Apple", "Banana", "Mango", "Orange"]
console.log(fruits[0])
console.log(fruits[3])
const totalFruits=fruits.length;
console.log(totalFruits);
//Task 2
const colors = ["Red", "Green", "Blue"];
colors[1] = "Yellow";
console.log(colors);
//Task 3
const numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) 
{
  console.log(numbers[i]);              
  console.log(numbers[i] * numbers[i]); 
}
//Task 4
const data = [
  ["Arun", 22],
  ["Ravi", 25],
  ["Kumar", 28]
]
console.log(data[1][1]);
console.log(data[2][0]);  
//Task 5
const users = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Ravi" }
]
console.log(users[0].name);
console.log(users[1].id);  
//Task 6
const student = {
  name: "Arun",
  age: 22,
  course: "MERN"
}
console.log(student.name);
console.log(student.course);
//Task 7
const car = {
  brand: "BMW",
  year: 2020
}
car.year = 2024;
car.color = "Black";
console.log(car);
//Task 8
const employee = {
  name: "Ravi",
  address: {
    city: "Chennai",
    pincode: 600001
  }
}

console.log(employee.address.city);
console.log(employee.address.pincode);
//Task 9
const product = {
  name: "Laptop",
  features: ["16GB RAM", "512GB SSD", "i7 Processor"]
}

console.log(product.features[1]);
console.log(product.features.length);
//Task 10
const students = [
  { name: "Arun", marks: 80 },
  { name: "Ravi", marks: 40 },
  { name: "Kumar", marks: 90 }
];
for (let i = 0; i < students.length; i++) 
     {
  if (students[i].marks > 50) 
    {
    console.log(students[i].name);
  }
}