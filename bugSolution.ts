function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

// Solution: Convert strings to numbers before passing them to functions
let num1 = parseInt("5");
let num2 = parseInt("4");

let result3 = add(num1, 3); // result3 is 8
let result4 = subtract(10, num2); // result4 is 6