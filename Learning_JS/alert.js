// 1. VARIABLES AND SCOPE
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
//**************************************************
//2. DATA TYPES
//Data Types : Numbers, Strings, Boolean, null, undefined, Symbol, BigInt
// anything that isn't a primitive value is an object including arrays, dates, regular expressions and object literals
//Reassignment is pointing a name to a new thing.Mutation is changing what is inside the same thing.
// let fruit = "Apple";
// fruit = "Banana";
// const newFruit = "Orange";
// newFruit = "Grapes";💢
// Mutation only allows for complex data types like objects and arrays
// const user = ["me", "you", "he", "she"];
// console.log(user);
// user.push("they");
// console.log(user);
// let bears = 3;
// let musketeers = 3;
// console.log(bears === musketeers);
// const ghostbusters = { number: 4};
// const details = { name: "Divya", age: "xYears" };
// details.name = "Vadnere";

//Mutation is the act of changing the properties of a value
//let user1 = { name: "John" };
//Stack (Primitive) we get the copy, Heap( Non -Primitive) we get the reference
// let myName = "Tommy";
// let myAnotherName = myName;
// myAnotherName = "TONY";
// console.log(myName, myAnotherName);
// let userOne = { email: "user@gmail.com", upi: "user@upi" };
// console.log(userOne);
// let userTwo = userOne;
// userTwo.email = "different mail";
// userTwo.upi = "different upi";
// console.log(userOne);
// console.log(userTwo);
/*const name = "CemeteryFog";
const repocount = 50;
console.log(name + repocount);
console.log(` hello ${name} you have ${repocount}`);
const gameName = new String("chess");
console.log(typeof gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("e"));
console.log(gameName.substring(1, 4));*/

/*const myArr = ["chess", "cricket", "dark", false, 45];
const myArr2 = new Array(1, 2, 3, 4); //prototype access through console
myArr.push("sudoku");
//myArr.pop(); //removes last element
console.log(myArr.at(-3));
//myArr.shift()
console.log(myArr.includes("chess"));
console.log(myArr);*/
//slice and splice
/*const games = ["chess", "sudoku", "jenga"];
console.log(games.slice(1, 3));
console.log(games.splice(1, 1, "wordcount"));
console.log(games);*/
//Objects
/*object.create;
const Jsuser = {
  name: "tommy",
  "full name": "thomas hanks",
  age: 10,
  email: "tommy@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Mon", "Tue"],
};
console.log(Jsuser["full name"]);
console.log(Jsuser.lastLoginDays[0]);*/

//****************************************************

//3. OPERATORS
/*let a = 22;
let b = a;
console.log(a == b);
console.log(a === b);
console.log(a && b);
a = true;
console.log(a && b, a || b);
console.log(!a);
console.log(2 + 3 * 5); // operator precedence
console.log((2 + 3) * 5);
// Ternary Operator
let age = 17;
let canDrive = age >= 18 ? "yes you can drive" : "no you cannot drive";
console.log(canDrive);
//Spread Operator*/

//*********************************************
//4. FUNCTIONS

// function showMessage() {
//   console.log("hi");
// }
// let message = "hi John";
// function sayHello() {
//   let greeting = "Welcome!" + message;
//   console.log(greeting);
// }
// sayHello();

// let userName = "jay prichett";
// function showMessage() {
//   userName = "gloria prichett";
//   console.log(`hello ${userName}`);
// }
// console.log(userName);
// showMessage();
// console.log(userName);

/*// Parameter vs Argument
function showMessage2(from, text) {
  text = text || "empty";
  console.log(from + ":" + text);
}
showMessage2("tommy", "hello there!");
function blackhole(lightyears, description = "no data") {
  console.log(
    ` The blackhole is ${lightyears} away. Description: ${description} `
  );
}
function checkAge(age) {
  return age > 18 ? true : console.log("Did your parents allow you?");
}
checkAge(17);

function findMinimum(a, b) {
  return a < b ? a : b;
}
console.log(findMinimum(4, 9));*/

//function expressions
// let sayHi = function () {
//   console.log(`Hello there!`);
// };
// function calculatePrice(num1, ...quantity) {
//   console.log(num1 * quantity);
//   return quantity;
// }
// console.log(calculatePrice(5, 55));
//scope
/*if(true){let a=10;
const b= 20;
var c=30;}
console.log(a);//error
console.log(b);//error
console.log(c); //output 30 */

// function one(){
//     const username="blahblah";
//     function two(){
//         const website = "johndoe";
//         console.log(username);
//     }
//     console.log(website);
//     two();
// }

//

// const user = {
//   username: "henry",
//   score: 600,
//   welcomeMessage: function () {
//     console.log(`welcome ${this.username}`);
//   },
// };
// user.welcomeMessage();

//ARROW FUNCTIONS
// const order = "drumsticks";
// const cafe = {
//   order: "abc",
//   addOne() {
//     const printorder = () => {
//       console.log(`order received: ${this.order}`);
//     };
//     printorder();
//   },
// };
// cafe.addOne();

// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(5, 66));
//******************************************** */

//5. OBJECTS

// const obj = {
//   name: "pete",
//   age: "23",
// };
// console.log(obj.name);
// obj.name = "tommy";
// console.log(obj.name);
// const obj1 = new Object();
// obj1.color = "blue";
// obj1.shape = "sq";
// console.log(obj1);
// let obj2 = new Object();
// obj2 = obj1;
// console.log(obj2);

// let obj1 = {
//   name: "coco",
//   roll: 27,
// };
// console.log(Object.seal(obj1));
// console.log(Object.isSealed(obj1));
//obj1.lastname = "asfjsf";
//console.log(obj1);
// const dummyObject = {
//   role: "harry",
//   cast: "dobby",
// };
// const { role, cast } = dummyObject;
// console.log(role, cast);
// const originalObject = { a: 1, b: 2, c: 3 };
// const copiedObject = { ...originalObject, d: 4, b: 100 };
// console.log(copiedObject);
//********************************************

// 6. ARRAYS

/*let numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(doubledNumbers);*/

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(function (number) {
  return number % 2 == 0;
});
console.log(evenNumbers);
*/

// let arr = [5, 4, 3, 2, 77, 97];
// let updatedArr = arr.map((val) => val + 2);
// console.log(updatedArr);

// let arr = [5, 4, 3, 2, 77, 97];
// let updatedArr = arr.filter((val) => val > 10);
// console.log(updatedArr);

let arr = [5, 4, 3, 2, 77, 97];
let updatedArr = arr.reduce((prev, curr) => (curr = curr + prev));
console.log(updatedArr);
