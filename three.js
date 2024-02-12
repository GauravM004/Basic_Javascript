// for of loop an advanced loop usually used in arrays and objects

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num)
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    console.log(`Each char in the word greetings is ${greet}`)
}

// Map is also a datatype which only stores unique values 

const map = new Map ()

map.set ('IN', "India")
map.set ('US', "United States of America")
map.set ('FR', "France")
// map.set ('FR', "France")  doesnt gets print as map stores unique values

console.log(map);

//for of loop in map is different

for (const [key, value] of map) {
    console.log(key, ':-' , value);
}

// An important note we cant iterate on objects using for of loop

const myObj = {
    name: "Sam",
    age: 18
}

// for (const [key, values] of myObj) {
//     console.log(key, ':-' , value);
// }
// myObj is not iterable


