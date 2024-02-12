const myObj = {
    'js': "javascript",
    'cpp': "C++",
    'rb': "Ruby",
    'swift': "Swift by Apple"
}

// we can use forof loop in arrays and maps but not in objects

for (const key in myObj) {
    console.log(key);
}

// if we want to print values
for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

// using for in loop in arrays
// in for of loop we get values
// in for in loop we get keys that is 0, 1, 2
// the keys in arrays are numbers from 0...

const programming = ["js", "cpp", "java", "py"]

for (const key in programming) {
    console.log(key); // output is 0, 1, 2, ..... 
}


for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map ()

map.set ('IN', "India")
map.set ('US', "United States of America")
map.set ('FR', "France")

for (const key in map) {
    console.log(key); //maps are not iterable
}

for (const [key, value] of map) {
    console.log([key, value]);
}