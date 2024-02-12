let myDate = new Date ()
// date is an object
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

// Months start from 0 in javascript

let myCreatedDate = new Date (2023, 0, 4)
console.log(myCreatedDate.toDateString());4

// MM/DD/YY
let dateIn = new Date ("02-28-2023")
console.log(dateIn.toLocaleDateString());

let myTimeStamp = Date.now ()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // we will get the time in seconds and not miliseconds and this is asked in interviews

let newDate = new Date ()

console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default', {
    weekday: "short",
}));