// Variables
// Variable is just like a container used to store values.
// we can changed variable value during the execution of program

// var a = "Bilal";
// console.log(a);

// var b = 12;
// console.log(b);

// there are three ways to initialize a variable in javascript
// var let const

// 1. VAR -> var is a global scope and we can redeclared it values

// var a = 5;
// var b = 10;

// {
//   a = "String";
//   console.log("In block scope");
//   console.log(a);
// }
// console.log("in Global scope");
// console.log(a);

// 2. LET -> let is block scope and we cannot redeclared it value but reinitialize the value

// let a = 5;
// let b = 10;

// // let b = "string"; // this is not allowed in js
// b = "String of b"; // but we can do this

// {
//   let a = "String"; //both are different
//   console.log("In block scope");
//   console.log(a);
// }
// console.log("in Global scope");
// console.log(a);
// console.log(b);

// 3 CONST -> const is used to store constant value and we cannot only declared it variable

// const author; -> Not allowed
// const author = "Muhammad Bilal";

// // author = "Abc"; // TypeError: Assignment to constant variable.
// console.log(author);

// ________________________________*****************____________________________________

// Primitive Data types and objects

// There are 7 Primitive Data types, such as :
// N N S S B B U

// N -> Null
// N -> Number
// S -> Symbol
// S -> String
// B -> Boolean
// B -> BigInt
// U -> Undefined

// let a = null;
// let b = 123;
// let c = "Bilal";
// let d = Symbol("this is a nice Symbol");
// let e = true; // as well as false
// let f = BigInt("12321");
// let g = undefined;
// let h; // this is also undefined

// console.log(a, b, c, d, e, f, g, h);

// // to find the type of any variable we have :
// console.log(typeof f);

// // Object -> is a non primitive data type used to store key value pair values

// let obj = {
//   name: "Bilal",
//   marks: 92,
//   pass: true,
//   address: undefined,
// };

// console.log(obj);
// console.log(obj["name"]); // object key access
// console.log(obj.pass); // object key access

// __________________________*************************_____________________________

// ______________________Practice Set #1__________________________________________

// Q1
let name = "Bilal";
let age = 21;
let res = name + age;
console.log(res); // 'Bilal21'

// Q2

console.log(typeof res);

// Q3
const obj = {
  name: "Bilal",
  age: 23,
};

// obj = 12 ;// -> TYPE ERROR
console.log(obj);

// Q4

obj[marks] = 23;
console.log(obj);

// Q5
let dict = {
  provider: "a person or thing that provides something.",
  texture: "the feel, appearance, or consistency of a surface or substance.",
  handwriting: "writing with a pen or pencil.",
  fiesta: "an event marked by festivities or celebration.",
  recursion: "the repeated application of a recursive procedure or definition",
};
alert(dict.provider);
