// singleton or constructor object creating method 

// const tinderUser = new Object () singleton object
const tinderUser = {}
// non singleton object
tinderUser.id = "123ab"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullaname: {
        userfullname: {
            fname: "Afshan",
            lname: "Khan"
        }
    }
}
// console.log(regularUser.fullaname.userfullname.fname); 

const obj1 = { 1:"a", 2: "b"}
const obj2 = { 3:"a", 4: "b"}

const obj3 = {obj1, obj2}  //this is similar to arrays we get a combined set of objects

// console.log(obj3);
const obj4 = Object.assign ({}, obj1, obj2) //good practise to give {}

const obj5 = {...obj1, ...obj2}
// console.log(obj4);
// console.log(obj5);

// value in the database comes in array and object format like the following

const users  = [
    {
        id: 1,
        email: "a@gmail.com",
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com",
    }
]

console.log(users[0].email);

console.log(tinderUser);
// we need the keys and it is used in many database projects
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// interesting to note here is that the log return in arrays and we can loop throughout the array and perform functions
console.log(Object.entries(tinderUser)); // each entry is returned as an array
console.log(tinderUser.hasOwnProperty('isLogged')); // to check if it exists in our entry and there is a possibility if the value doesnt exsits the program might crash 

// +++++++ Destructor API and others in objects

const course = {
    name: "JS in Hindi",
    price: "999",
    courseInstructor: "Afshan Khan"
}

const {courseInstructor} = course
const {courseInstructor: instructor} = course //destructor 
console.log(courseInstructor);
console.log(instructor); 

// Apna sir ka kaam kisi aur ke dena hai toh we use API 

// JSON Format
// API can also return values in arrays inside an object
// {
//     "name": "Afshan Khan",
//     "id": 1, 
//     "courseName" : "JS in Hindi"
// }

// randomuserme api 
// json formatter