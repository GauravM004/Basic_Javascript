// To get well versed with javascript learn objects and events

// Singleton

//object literals :-
// key value pairs

const mySym = Symbol("key1");
const jsUser = {
    name: "Afshan Khan",
    "school" : "Bhatikar Model High School",
    age: 18,
    [mySym]: "key1",
    city: "Margao",
    email: "afshan@amazon.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Satuurday"]
}

console.log(jsUser.city);
console.log(jsUser["city"]);
 // another and prefered method to access objects as with dot we cant acceess string keys
 console.log(jsUser["school"]);
console.log(jsUser[mySym]);
 // how to use symbol in objects is also a commonly asked questions 
 // square brackets are used to make the keys as a symbol

 jsUser.email =  "afshan@google.com"
//  Object.freeze(jsUser); // with freeze we cant change the values of our object
 jsUser.email =  "afshan@microsoft.com"
//  console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello JS User");
}

jsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name} `); //string interpolation
}
// console.log(jsUser.greeting); // function anonymous
console.log(jsUser.greeting()); 
console.log(jsUser.greetingTwo()); 

