let a = 300

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("INNER: ", a);
}

console.log(a);
// console.log(b);
console.log(c);
// if multiple people are working on the same code and a function is called of var in another scope the original var will be replaced by the scope var
// the scope in windows and in node which we write in the vs code is different and is also a commonly asked questions in interview

// ++++++++++++ Nested Function scopes
// A story is that children can ask icecream from adults and adults cannot ask for ice creams from kids

function one () {
    const username = "Afshan Khan"
    function two () {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website()); 
    two()
}
one()

// if else scopes 

if (true) {
    const username = "Afshan"
    if (username==="Afshan") {
        const website = "Youtube"
        console.log(`${username} ${website}`);
    }
    // console.log(website);
} 
// console.log(username);


// +++++++++ INTERESTING ++++++++++

console.log(addOne(5))
function addOne (num) {
    return num + 1
}
addOne()

// addTwo(4) the function call doesnt work because we are calling the function in a different manner
const addTwo = function (num) {
    return num + 2
}
addTwo()