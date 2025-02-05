# TypeScript Type 'string' is not assignable to type 'number'

This repository demonstrates a common yet potentially confusing TypeScript error:  Type 'string' is not assignable to type 'number'.  The example shows how strictly typed functions in TypeScript only accept the data type specified in the function signature. Attempting to pass in a string where a number is expected will result in a compile-time error.

## How to Reproduce

1. Clone this repository.
2. Open `bug.ts` to see the example code.
3. Attempt to compile the code using a TypeScript compiler (e.g., `tsc bug.ts`).
4. Observe the compiler error indicating the type mismatch.

## Solution

The solution is to ensure that only numbers are passed as arguments to the `add` and `subtract` functions.  See `bugSolution.ts` for one way to resolve the issue, which involves converting string arguments to numbers before passing them into functions.