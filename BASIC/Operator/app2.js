// Conditionals

// prompt() // -> used to take input from user

// alert("welcome");

// let age = prompt("Enter your age");

// if (age >= 18) {
//   console.log("You are eligible for CNIC");
// } else {
//   console.log("You are not eligible for CNIC");
// }

// --------------------******************** -----------------------------------

// let fruits = prompt("Enter Fruits Name: ");

// if (fruits === "mango") {
//   console.log("Mango is sweet");
// } else if (fruits === "orange") {
//   console.log("little bit biter in taste");
// } else if (fruits === "banana") {
//   console.log("Banana is most eatable in world");
// } else {
//   console.log("all fruits are yummy!");
// }

// --------------------**************************--------------------

// lets play with real example:
// Email authentication system

// const email = "abc@gmail.com";
// const password = "abc123";

// let userEmail = prompt("Enter Your Email: ");
// let userPassword = prompt("Enter Your Password: ");

// if (email === userEmail) {
//   if (password === userPassword) {
//     console.log("You are login");
//   } else {
//     console.log("Password is incorrect!");
//   }
// } else {
//   console.log("email is incorrect!");
// }

// ----------------------*************************----------------------------

// Switch Case statement

// let user = prompt("Enter your number");

// switch (user) {
//   case "1":
//     console.log("say Hello");
//     break;
//   case "2":
//     console.log("say Hi");
//     break;
//   case "3":
//     console.log("say Salam");
//     break;

//   default:
//     console.log("say Welcome");
//     break;
// }

// -----------------------------***************************--------------------
// Practice Set

// Q1
// let age = prompt("Enter your age: ");

// if (age > 10 && age < 20) {
//   console.log("age is between 10 and 20");
// } else {
//   console.log("age is ", age);
// }

// Q2:

// let user = prompt("Enter your number");

// switch (user) {
//   case "1":
//     console.log("say Hello");
//     break;
//   case "2":
//     console.log("say Hi");
//     break;
//   case "3":
//     console.log("say Salam");
//     break;

//   default:
//     console.log("say Welcome");
//     break;
// }

// Q3 or Q4

// let num = prompt("Enter any integer number: ");

// num = Number.parseInt(num);

// if (num % 2 == 0 && num % 3 == 0) {
//   console.log("number is divisible by 2 and 3");
// } else if (num % 2 == 0) {
//   console.log("number is divisible by 2");
// } else if (num % 3 == 0) {
//   console.log("number is divisible by 3");
// } else {
//   console.log("do not divisible by 2 or 3");
// }

// Q5:
let age = prompt("Enter your age: ");
let license = age > 18 ? "you can drive" : "you cannot drive";
console.log(license);
