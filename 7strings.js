const name = "Afshan "
const repoCount = 50

// console.log(name + repo + " value");

// But its recommended to use backtick lash in strings ` ` for string interpolation 

console.log(`Hello my name is ${name.toUpperCase()}and my repo count is ${repoCount}` );

const gameName = new String ('AfshanKhan')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.indexOf('f'));
console.log(gameName.charAt(2));

const newString = gameName.substring (0, 4)
console.log(newString); //afsh and index 3 is excluded 

const newStringOne = "         afshan   "
const anotheString = newStringOne.trim(); // trim removes white space

console.log(newStringOne);
console.log(anotheString);

const url = "https://afshan/%20/amazon.com";
// console.log(url.replace('%', '-'));
console.log(url.includes("afshan"));

// we can even split strings to arrays using javascript
