// Datatyppes are divided into based on how it is stored in memory and how we can access it. 

// Primitive data types are call by value

// Primitive data types: 7 types
// Sring, Number, Boolean, null (empty), undefined (value not defined of variable),  symbol (for unique), BigInt

// Reference data types or non primitive

// Memory reference directed in Memory
// array, Objects (VVIP), Functions

// JS is a dynamically typed language as the dataypes of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them
// example const score = 100.3 
// in typescript 
// const score:number = 100; 

const id = Symbol('123')
const anothderId = Symbol('123')

console.log(id === anothderId );

 const bigNumber = 398403498309982382289288n; //js automaticcaly assign bigint to this variable

const heros = ["shaktiman", "nagraj", "doga"];

let myObj = {
    name: "afshan",
    age: 18,
}

const myFunct = function () {
    console.log("Hello World");
}

//typeof of all reference datatypes are objects or function objects
// typeof null is object
 
console.log(typeof id);// symbol
console.log(typeof myFunct);//functiom
console.log(typeof bigNumber);






