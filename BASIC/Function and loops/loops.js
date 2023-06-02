// For loops

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// } // this will print 0 to 99

// ----------------*****************-------------------

// find sum of n natural numbers

// let sum = 0;
// let n = prompt("Enter the value of n: ");
// n = Number.parseInt(n);

// for (let i = 0; i < n; i++) {
//   sum += i + 1;
// }

// console.log("the sum of n natural number is: ", sum);

// Factorial

// let n = prompt("Enter the value of n ");
// n = Number.parseInt(n);

// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log("The factorial of ", n, " is: ", fact);

// -------------------***********************--------------------------------------
// For in loop

// let obj = {
//   bilal: 23,
//   noman: 15,
//   shan: 43,
//   shahjee: 32,
// };

// for (let a in obj) {
//   console.log(a); //this will print all key of  obj
// }

// for (let a in obj) {
//   console.log("the marks of ", a, " is ", obj[a]); //this will print all key of  obj
// }

// ------------------------------------*******************----------------------
// For of loop
// for (let a of "Bilal") {
//   console.log(a);
// }

// while loops

// let table = prompt("Which table you want to display: ");
// let n = prompt("Enter the n value: ");
// let i = 1;
// while (i <= n) {
//   console.log(table, " X ", i, " = ", table * i);
//   i++; // this is neccessary else you will run infinite
// }

// do-while loops

// find 5 number

// let isRun = true;
// let i = 1;

// do {
//   console.log(i);
//   if (i % 5 == 0) {
//     console.log("done");
//     isRun = false;
//   } else {
//     i++;
//   }
// } while (isRun);

// ---------------------***********************-------------------------------

// Practice set

// Q1

let obj = {
  bilal: 23,
  noman: 15,
  shan: 43,
  shahjee: 32,
};

// for (let i = 0; i < Object.keys(obj).length; i++) {
//   console.log(
//     "the marks of ",
//     Object.keys(obj)[i],
//     " is ",
//     obj[Object.keys(obj)[i]]
//   );
// }

// Q2

// for (let key in obj) {
//   console.log("the marks of ", key, " is ", obj[key]);
// }

// Q3

// let correctNumber = 5;

// while (true) {
//   let num = +prompt("Enter your number ");
//   if (num === correctNumber) {
//     break;
//   } else {
//     console.log("Try Again");
//   }
// }

// Q4

function mean(n1, n2, n3, n4, n5) {
  return (n1 + n2 + n3 + n4 + n5) / 5;
}

console.log(mean(52, 71, 82, 33, 65));
