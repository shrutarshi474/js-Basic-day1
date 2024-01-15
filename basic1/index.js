//JavaScript Statements
let x, y, z; // Statement 1
x = 5; // Statement 2
y = 6; // Statement 3
z = x + y; // Statement 4

let person = "ray";

// JavaScript Values
// The JavaScript syntax defines two types of values:

// Fixed values
// Variable values
// Fixed values are called Literals.

// Variable values are called Variables.
//JavaScript Literals
a = "john";
b = 24;
c = 2.4;
//JavaScript Operators
//JavaScript uses arithmetic operators ( + - * / ) to compute values:
let x, y;
x = 5;
y = 6;
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const
// Operator	Description
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement
// JavaScript Logical Operators
// Operator	Description
// &&	  logical and
// ||	  logical or
// !	  logical not

// JavaScript Type Operators
// Operator	Description
// typeof	Returns the type of a variable
// instanceof	Returns true if an object is an instance of an object type

// JavaScript Bitwise Operators
// Bit operators work on 32 bits numbers.

// Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
// Operator	Description	Example	Same as	Result	Decimal
// &	AND	5 & 1	0101 & 0001	0001	 1
// |	OR	5 | 1	0101 | 0001	0101	 5
// ~	NOT	~ 5	 ~0101	1010	 10
// ^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
// <<	left shift	5 << 1	0101 << 1	1010	 10
// >>	right shift	5 >> 1	0101 >> 1	0010	  2
// >>>	unsigned right shift	5 >>> 1	0101 >>> 1	0010	  2
// JavaScript Arithmetic Operators
// Arithmetic operators perform arithmetic on numbers (literals or variables).

// Operator	Description
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement
// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

//Exponential Notation
let y = 123e5; // 12300000
let z = 123e-5; // 0.00123

let car; // Value is undefined, type is undefined

// Function is called, the return value will end up in x
let x = myFunction(4, 3);
//Function Return
function myFunction(a, b) {
  // Function returns the product of a and b
  return a * b;
}

// JavaScript Objects
// object -> car
// porperties -> car.name
// methods -> car.start
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
//person.lastName;
//person["lastName"];

//A method is a function stored as a property.
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//JavaScript Arrays
const cars = ["Saab", "Volvo", "BMW"];
// length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
//Array Methods
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// Array Search
// Search an array for the item "Apple":

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true

//Sorting an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

//Reversing an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();

//Number to Integer
Math.round(x); //Returns x rounded to its nearest integer
Math.ceil(x); //Returns x rounded up to its nearest integer
Math.floor(x); //Returns x rounded down to its nearest integer
Math.trunc(x); //Returns the integer part of x (new in ES6)

//JavaScript Random
Math.random();
// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);
//Comparison

//JavaScript if, else, and else if

//JavaScript Switch Statement
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }

// for loop
// for (let i = 0; i < 5; i++) {
//     text += "The number is " + i + "<br>";
//   }
// let language = "JavaScript";

// let text = "";
// for (let x of language) {
// text += x;
// }

// const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//   text += person[x];
// }

// while (i < 10) {
//     text += "The number is " + i;
//     i++;
//   }

// Arrow Function
// hello = function() {
//     return "Hello World!";
//   }

// hello = () => "Hello World!";
