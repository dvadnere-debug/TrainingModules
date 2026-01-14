//Day 1
//alert("I am javascript.")
// let message;
// message = "you are an intern";
// console.log(message);
// let admin, name;
// name = "JohnDoe";
// admin = name;
// alert(admin);
// alert(`Hello, ${admin}, welcome to my organization!`);
// alert(` the addition is ${1 + 2}`);

//block scope vs function scope
// {
//   let myVariable = "I am global";
//   console.log(myVariable);
// }
//console.log(myVariable); gives error
//
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
//console.log(i); //gives error no such variable i

// function sayHiBye(firstName, LastName) {
//   console.log(`Hello ${firstName} ${LastName}`);
// }
// sayHiBye("Divya", "Vadnere");
// function sayHiBye(firstName, LastName) {
//   function getFullName() {
//     return firstName + " cool " + LastName;
//   }
//   console.log("Heyy " + getFullName());
//   console.log("Byee " + getFullName());
// }
// sayHiBye("John", "Doe");

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let c = makeCounter();
// console.log(counter()); // 0
// alert(counter()); // 1
//console.log(c()); // 2

//Data Types : Numbers, Strings, Boolean, null, undefined, Symbol, BigInt
// anything that isn't a primitive value is an object including arrays, dates, regular expressions and object literals
//Reassignment is pointing a name to a new thing.Mutation is changing what is inside the same thing.
// let fruit = "Apple";
// fruit = "Banana";
// const newFruit = "Orange";
// newFruit = "Grapes";💢
// Mutation only allows for complex data types like objects and arrays
const user = ["me", "you", "he", "she"];
console.log(user);
user.push("they");
console.log(user);
// let bears = 3;
// let musketeers = 3;
// console.log(bears === musketeers);
// const ghostbusters = { number: 4};
const details = { name: "Divya", age: "xYears" };
details.name = "Vadnere";

//Mutation is the act of changing the properties of a value
let user1 = { name: "John" };
