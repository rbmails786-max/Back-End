//Task 1
function createProfile(user) {
  const { name, age, role = "User" } = user;
  return `${name} is ${age} years old and works as ${role}`;
}
console.log(createProfile({ name: "Sudhan", age: 22 }));
//Task 2
const calculateTotal = (discount, ...prices) => {
  const total = prices.reduce((sum, price) => sum + price, 0);
  const finalAmount = total - (total * discount / 100);
  return finalAmount;
};
console.log("Final Amount:",calculateTotal(10, 100, 200, 300));
//Task 3
function createUser(key, value) {
  return {
    [key]: value,          
    display() {           
      return `${key}: ${this[key]}`;
    }
  };
}
const user = createUser("role", "Admin");
console.log(user);
console.log(user.display());
//Task 4
const users = [
  { name: "A", marks: 80 },
  { name: "B" },
  { name: "C", marks: 60 }
];

const result = users.map(user => {
  const marks = user.marks ?? 0;   
  return `${user.name} scored ${marks}`;
});

console.log(result);