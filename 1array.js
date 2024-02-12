const myArr = [1, 2, 3, 4];
const heroArr = ["Shaktiman", "Dr Strange"];
const myArr2 = new Array (1, 2, 2, 4)
console.log(myArr[0]);

myArr.push(5);
myArr.push(6);
myArr.pop();
console.log(myArr);

myArr.unshift(8); //adds 8 at the start
console.log(myArr);
myArr.shift()
console.log(myArr);
console.log(myArr.includes(3));

const newArr = myArr.join()
console.log(newArr); //returns as string 
console.log(typeof newArr);

// Slice and Splice is Javascript
// The splice method of an array instance changes the contents of an array by removing or replacing existing elements and adding new elements in place 

const Months = ["Jan", "March", "April", "June"]
Months.splice(1, 0, "Feb")
console.log(Months);
Months.splice(4, 0, "May")
// Months.splice(4, 1, "May") 
console.log(Months);

// The slice elements return a shallow copy of a portion of an array into a new array object selected from start to end and the end not included
// The original array will not be modified

const animals = ["ant", "bison", "camel", "duck", "elephant"]
// animals.slice(2, 4) this wont count as the original array is not modified
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 4));
console.log(animals.slice(-2));