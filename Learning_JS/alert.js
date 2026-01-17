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

//***********************************************************************************************
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

// function regFunction() {
//   console.log(arguments);
// }
// regFunction("hi", 5, true); //[Arguments] { '0': 'hi', '1': 5, '2': true }

// const arrowFunction = () => {
//   console.log(arguments);
// };
// arrowFunction("hello", 7, false); //ReferenceError: arguments is not defined

// let myObj = {
//   x: 2,
//   regularFunc() {
//     console.log(this.x);
//   },
//   arrowFunc: () => console.log(this.x),
// };
// myObj.regularFunc();
// myObj.arrowFunc();

//Hoisting(available only in normal functions not in arrow functions)

// sayHello();
// function sayHello() {
//   console.log("hey there, im hoisted ");
// }

//************************************************************************** */

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
//*****************************************************************************************

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

//************************************************************************************ */
// let arr = [5, 4, 3, 2, 77, 97];
// let updatedArr = arr.map((val) => val + 2);
// console.log(updatedArr);

// let arr = [5, 4, 3, 2, 77, 97];
// let updatedArr = arr.filter((val) => val > 10);
// console.log(updatedArr);

// let arr = [5, 4, 3, 2, 77, 97];
// let updatedArr = arr.reduce((prev, curr) => (curr = curr + prev));
// console.log(updatedArr);

//**************************************************************************************** */

//8. REST, SPREAD OPERATORS
//Reference vs Value
// let a= 5;
// let b = a;
// b=10;
// console.log(a);

// let a=[1,2,3];
// let b = a;
// b.push(4);
// console.log(a);// both point to the same  memory

/*const a =[1,2,3];
const b = a;*/ //this is wron way to copy an array

// const a = [1, 2, 3];
// const b = [...a]; //correct way to copy an array
// b.push(44);
// console.log(a);
// console.log(b);

//spread with objects
// const user = { name: "tommy", age: 4 };
// const updatedUser = {
//   ...user,
//   age: 5,
// };
// console.log(user);
// console.log(updatedUser);//original is untouched, new object is created

//rest operator : packs or collects items, rest gathers remaining arguments into an array
// function sum(...numbers) {
//     return numbers.reduce((curr, prev) => curr=curr+prev);
// }
// sum(33,44,66,11); //numbers = [33,44,66,11]

//rest in oject destructuring
// const user = {
//   name: "divya",
//   age: 20,
//   city: "pune",
// };
// const { name, ...rest } = user;
// console.log(name);
// console.log(rest); //{age:20, city:"pune"}

//CONDITIONAL RENDERING WITH &&
// {isLoggedIn && <Dashboard />}
/*What happens internally:
If isLoggedIn === false → React gets false and renders nothing

If isLoggedIn === true React gets <Dashboard /> and renders it*/

//console.log("End of JS file");

//Functions + Lexical Scope = Closures

//*********************************************** */

// 11. ASYNCHRONOUS JS

// function fetchDate(a) {
//   setTimeout(() => {
//     let data = "fetched data";
//     a(data, "server error");
//   }, 5000);
// }
// function handleData(data, error) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(data);
//   }
// }
// console.log("start");
// fetchData(handleData);

// const coinFlip = new Promise((resolve, reject) => {
//   const random = Math.random();

//   if (random > 0.5) {
//     resolve("Heads!");
//   } else {
//     reject("Trails!");
//   }
// });
// coinFlip
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((error) => {
//     console.log("Failed:", error);
//   });

// function username() {
//   console.log("John");}
// setTimeout(username, 5000);
// console.log("Doe");
// let id = setInterval(username, 1000);
// setTimeout(() => {
//   clearInterval(id);
//   console.log("Interval stopped");
// }, 5000);

// const fetchData = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         const data = {id: 1, name: "John Doe"};
//         resolve(data);
//         reject(new Error("Failed to fetch data"));,2000});}
//     )

// var a = 2;
// b = 1;
// function f(z) {
//   b = 3;
//   c = 4;
//   var d = 6;
//   e = 1;
//   function g() {
//     var e = 0;
//     d = 3 * d;
//     return d;
//   }
//   return g;
//   var e;
// }
// console.log(f(1));

// a = 1;
// var d = 6;
// function g() {
//   var e = 0;
//   d = 3 * d;
//   return d;
// }
// console.log(g(1));

// function one(callBack_two) {
//   console.log("Step1");
//   callBack_two();
//   console.log("callback understood");
// }
// function two() {
//   console.log("step2");
// }
// one(two);

// let order = (callBack_Production) => {
//   console.log("order placed, informing production...");
//   callBack_Production();
// };
// let production = () => {
//   console.log(
//     "order received, starting production, your food will be ready soon!"
//   );
// };
// order(production);

let stocks = {
  Fruits: ["strawberry", "apple", "blueberry"],
  Liquid: ["water", "ice"],
  Holder: ["cone", "cup", "stick"],
  Toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(` ${stocks.Fruits[fruit_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started...");

    setTimeout(() => {
      console.log("the fruit has been chopped");

      setTimeout(() => {
        console.log(`${stocks.Liquid[0]}and ${stocks.Liquid[1]} was added`);

        setTimeout(() => {
          console.log("the machine was started");

          setTimeout(() => {
            console.log(`icecreme was placed in ${stocks.Holder[0]}`);

            setTimeout(() => {
              console.log(`${stocks.Toppings[0]} was added as toppings`);

              setTimeout(() => {
                console.log("serve icecream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);
