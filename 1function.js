
function sayMyName() {
    console.log("A");
    console.log("F");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
}
// sayMyName()
// function addTwoNumbers (num1, num2) {
//     console.log(num1 + num2);
// } Wrong method to write a function as it jus prints the log statement
// addTwoNumbers(3, 4)

function addTwoNumbers(num1, num2) {
    let result = num1 + num2
    return result;
    console.log("Hey there"); // unreachable code as it is after the return keyword
}

// const result = addTwoNumbers(3, 5)
console.log("The addition of the numbers is ", addTwoNumbers(5, 5));

function userMessage(username = "sam") { //default name
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(userMessage("Afshan"));
console.log(userMessage());  // if we doesnt pass any argument the result comes as undefined and this is also a commonly asked question in interviews


// ++++++++
// Rest Operator 
function calcualateCartPrice(...num1) {
    return num1
}

console.log(calcualateCartPrice(1200, 400, 500)); //returns an array later on you can traverse through the array amd calculate the price

// Interview example 

function calcualateCartPrice2(val1, val2, ...num2) {
    return num2
}

console.log(calcualateCartPrice2(100, 200, 300, 400, 500)); //100, 200 goes in the value 1, value 2 and the remaining are returned due to rest operator 

// embed object in our function 
const user = {
    name: "Afshan",
    price: 999
}

function callingObject(anyObject) {
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}

// callingObject(user)

callingObject({
    name: "sam",
    price: 388
})

// Functions and array collab in js 

const myArray = [100, 200, 300, 500, 250]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myArray))
console.log(returnSecondValue([200, 100, 5600]))