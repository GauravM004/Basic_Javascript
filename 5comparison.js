// Comparison of datatypes in js

// console.log(2>3);
// console.log(2==3);
// console.log(2<3);
// console.log(2!=3);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
// The reason is because comparison operators work differently for each like example >, >=, <= work differently in js

// === is a strict check as it even compares the datatype

console.log("2"===2);
console.log("0"===false);
console.log("0"== "ahjhj");

 