// Operators
/* 

* JavaScript provides a variety of operators that allow you to perform operations on values and variables. 
   Here are the different types of operators in JavaScript:

1. **Arithmetic Operators:**
   - Addition (`+`): Adds two values.
   - Subtraction (`-`): Subtracts the second value from the first value.
   - Multiplication (`*`): Multiplies two values.
   - Division (`/`): Divides the first value by the second value.
   - Remainder (`%`): Returns the remainder of the division of the first value by the second value.
   - Exponentiation (`**`): Raises the first value to the power of the second value.

2. **Assignment Operators:**
   - Assignment (`=`): Assigns a value to a variable.
   - Addition assignment (`+=`): Adds a value to a variable and assigns the result.
   - Subtraction assignment (`-=`): Subtracts a value from a variable and assigns the result.
   - Multiplication assignment (`*=`): Multiplies a variable by a value and assigns the result.
   - Division assignment (`/=`): Divides a variable by a value and assigns the result.
   - Remainder assignment (`%=`): Calculates the remainder of a variable divided by a value and assigns the result.

3. **Comparison Operators:**
   - Equal to (`==`): Checks if two values are equal.
   - Not equal to (`!=`): Checks if two values are not equal.
   - Strict equal to (`===`): Checks if two values are equal in value and type.
   - Strict not equal to (`!==`): Checks if two values are not equal in value or type.
   - Greater than (`>`): Checks if the first value is greater than the second value.
   - Less than (`<`): Checks if the first value is less than the second value.
   - Greater than or equal to (`>=`): Checks if the first value is greater than or equal to the second value.
   - Less than or equal to (`<=`): Checks if the first value is less than or equal to the second value.

4. **Logical Operators:**
   - Logical AND (`&&`): Returns `true` if both operands are `true`.
   - Logical OR (`||`): Returns `true` if either operand is `true`.
   - Logical NOT (`!`): Reverses the logical state of its operand.

5. **Unary Operators:**
   - Increment (`++`): Increments the value of a variable by 1.
   - Decrement (`--`): Decrements the value of a variable by 1.
   - Negation (`-`): Negates a numeric value.

6. **Ternary Operator:**
   - Conditional (`condition ? expr1 : expr2`): Evaluates a condition and returns one of two expressions based on the result.

These are the most commonly used operators in JavaScript. Understanding how to use operators effectively is crucial for performing calculations, making comparisons, and controlling program flow in your JavaScript code.

*/

// Arithmetic Operator

// Assign the value 5 to x
// let x = 5;
// Assign the value 2 to y
// let y = 2;
// Assign the value x + y to z:
// let add = x + y;
// let sub = x - y;
// let mul = x * y;
// let div = x / y;
// let mod = x % y;
// let exp = x ** y;

// console.log("x ", x, " y ", y);
// console.log("addition", add);
// console.log("subtraction", sub);
// console.log("multiplication", mul);
// console.log("division", div);
// console.log("modulus", mod);
// console.log("expression", exp);

// Assignment Operator

// Addition Assignment Examples
let x = 10;
x += 5;
console.log(x);
let text = "Hello";
text += " World";
console.log(text); //real example

// Comparision Operator

console.log(18 == 19); //equal
console.log(18 != 19); // not equal

console.log(18 === "18"); // type or value checker
console.log(18 !== "18"); // type or value checker

console.log(!true); // not operator
