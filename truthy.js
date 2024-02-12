// Truthy or Falsy values also asked in interviews multiple times 

// when we assume that the string has the true value it is known as truthy value for example 

const userEmail = []
// if we add an array it assumes as true 
if (userEmail) {
    console.log("User has email"); // assumes this as true value
}
else {
    console.log("User does'nt have an email");
}

// Examples of falsy value
// false, 0, -0, "", BigInt 0n, null, undefined, NaN 

// Examples of truthy value
// "0", 'false', " ", [], {}, function(), 

// to check is array is empty
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// to check is object is empty
// we know if we write 
// [ Object.keys(myObj).length ] returns an array so we use it to check empty object
const myObj = {}
if (Object.keys(myObj).length === 0) {
    console.log("Object is empty");
}

// Some weird facts

// false == 0 prints true
// false == '' prints true
// 0 == '' prints true

// Nullish Coalescing Operator ?? null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 16 
val1 = undefined ?? 18 ?? 20
// val1 = undefined ?? null

// ?? it is used to avoid any programming error checks safety 
console.log(val1);

// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("Greater than or equal to 80") : console.log("Less than 80");
