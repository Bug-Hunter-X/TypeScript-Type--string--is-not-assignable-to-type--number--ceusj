function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

//Uncommon error: Type 'string' is not assignable to type 'number'
let result3 = add("5", 3); //Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let result4 = subtract(10, "4"); //Error: Argument of type 'string' is not assignable to parameter of type 'number'.