
// 1️⃣ Declare three variables using var, let, and const. Store your name, age, and a boolean value. Print them.

var name1 = "Bharath";
let age = 27;
const boolean = 3.14;

console.log(name1);
console.log(age);
console.log(boolean);

// 2️⃣ Declare a variable without assigning a value. Print it. Then assign null to another variable and print it. What is the difference?

let a;
console.log(a);

let b = null;
console.log(b);

// 3️⃣ Create variables of type: string, number, boolean, bigint, null, undefined. Use typeof and print the result for each.

let str = "Bharath";
let num = 19;
let boo = true;
let big = 12345678987654321234n;
let nu = null;
let und = undefined;

console.log(str);
console.log(num);
console.log(boo);
console.log(big);
console.log(nu);
console.log(und);

// 4️⃣ Create two variables:

let n = 30;
let m = "hai";

console.log(n * 2);
console.log(m * 2);

// 5️⃣ Convert the text student name into:

var studentName; // camelCase

var StudentName; // PascalCase

var student_name; // snake_case

//var student-name // kebab-case

// 6️⃣ Declare two numbers and perform all Arithmetic operations:

let x = 20;
let y = 100;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// 7️⃣ Declare a variable with value 10. Apply:

let assgn = 10;

assgn += 2;
console.log(assgn);

assgn -= 3;
console.log(assgn);

assgn *= 4;
console.log(assgn);

assgn /= 2;
console.log(assgn);

// 8️⃣ Compare the following and write the output:

console.log(10 == "10");//true
console.log(10 === "10");//false
console.log(10 != "10");//false
console.log(10 !== "10");//true

// 9️⃣ Create two variables: age and hasID.

let studentAge = 29;
let hasId = true;

if (age > 18 && hasId) {
  console.log("Eligible");
}
if (age < 18 || !hasId) {
  console.log("Not Eligible");
}

// 🔟 Predict the output:

 //var a;
 console.log(a);// undefined

 a = 5;
 console.log(a);//5

console.log(typeof NaN);// number
console.log(typeof null);// object