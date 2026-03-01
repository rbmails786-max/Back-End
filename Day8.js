//1. Square
let size = 4;

for (let i = 1; i <= size; i++) {
  let row = "";
  for (let j = 1; j <= size; j++) {
    row += "*";
  }
  console.log(row);
}



// 2.Rectangle
function rectangle(rows, cols) {
  for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < cols; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

console.log("Rectangle Output:");
rectangle(3, 5);

// 3.Right Triangle
function rightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

console.log("Right Triangle Output:");
rightTriangle(4);

// 4.Left Triangle
function leftTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let space = 1; space <= n - i; space++) {
      row += "  ";
    }
    for (let star = 1; star <= i; star++) {
      row += "* ";
    }
    console.log(row);
  }
}

console.log("Left Triangle Output:");
leftTriangle(4);

//5. Inverted Triangle
function invertedTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

console.log("Inverted Triangle Output:");
invertedTriangle(4);

//6. Pyramid
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let space = 1; space <= n - i; space++) {
      row += " ";
    }
    for (let star = 1; star <= 2 * i - 1; star++) {
      row += "*";
    }
    console.log(row);
  }
}

console.log("Pyramid Output:");
pyramid(4);

// 7.Inverted Pyramid
function invertedPyramid(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let space = 1; space <= n - i; space++) {
      row += " ";
    }
    for (let star = 1; star <= 2 * i - 1; star++) {
      row += "*";
    }
    console.log(row);
  }
}

console.log("Inverted Pyramid Output:");
invertedPyramid(4);

// 8.Diamond
function diamond(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += " ";
    for (let star = 1; star <= 2 * i - 1; star++) row += "*";
    console.log(row);
  }

  for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += " ";
    for (let star = 1; star <= 2 * i - 1; star++) row += "*";
    console.log(row);
  }
}

console.log("Diamond Output:");
diamond(4);

// 9.Hollow Square
function hollowSquare(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

console.log("Hollow Square Output:");
hollowSquare(5);

//10. Hollow Triangle
function hollowTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (i === 1 || i === n || j === 1 || j === i) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

console.log("Hollow Triangle Output:");
hollowTriangle(5);

// Reverse String (Without Built-in)
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log("Reverse String Output:", reverseString("hello"));

// Reverse Number
function reverseNumber(num) {
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reversed;
}

console.log("Reverse Number Output:", reverseNumber(1234));

//Palindrome (String)
function isPalindromeString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

console.log("Palindrome String Output:", isPalindromeString("madam"));

//Palindrome (Number)
function isPalindromeNumber(num) {
  let original = num;
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return original === reversed;
}

console.log("Palindrome Number Output:", isPalindromeNumber(121));

// Factorial
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log("Factorial Output:", factorial(5));

// Fibonacci Series
function fibonacci(n) {
  let a = 0,
    b = 1;
  console.log("Fibonacci Output:");
  console.log(a);
  console.log(b);

  for (let i = 2; i < n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}

fibonacci(7);

// Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log("Prime Check Output:", isPrime(7));

// Print All Primes Till N
function printPrimes(n) {
  console.log("Primes Till N Output:");
  for (let num = 2; num <= n; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(num);
    }
  }
}

printPrimes(20);