const score = 400;

const newnum = new Number (100)

console.log(score);
console.log(newnum);
console.log(newnum.toString());
console.log(newnum.toString().length);
console.log(newnum.toFixed(2)); //used in ecommerece web apps

const anotherNum = 123.98627;
console.log(anotherNum.toPrecision(3)); // we can get exponential value if we set precosion less than the actual number

const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++ MATHS ++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
// console.log(Math.round(4.9));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.9));
// console.log(Math.max(4, 6, 8, 10));
// console.log(Math.min(4, 6, 8, 10));

console.log(Math.random()); //value ranges between 0 and 1
console.log(Math.floor((Math.random()*10)+1)); //value ranges between 0 and 1

const max = 200
const min = 100

console.log(Math.floor(Math.random()*(max-min+1))+min) //this is kinda a formula

