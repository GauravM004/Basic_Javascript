// mostly used loops in arrays are for each loop . 
// You can also see it in console browser
// it is like an array object 

const coding = ["javascript", "cpp", "python", "ruby", "java"]

// function(val) {
//     console.log(val);
// }  this is a call by function and arrow function is also a call by function

coding.forEach((item) => {
    console.log(item);
})

function printMe (val1) {
    console.log("values are ", val1);
}

coding.forEach(printMe)
// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr); //we get value index and the entire array
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
]
// This is vv important in database as data in the database comes in the form of arrays and objects
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )