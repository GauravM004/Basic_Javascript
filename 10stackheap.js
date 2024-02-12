// In earlier memory storage was done by the programmer itself like in C Language

// Stack Memory (Primitive) and Heap  (Non-Primitive) 

// On stack we get a copy of our Memory
// Heap we get a refernce and whichever change we make in the code is directly affected

let myYoutubeName = "afshankhan"

let anotherName = myYoutubeName

anotherName = "dasankop"

// as a copy is created in stack we  change the copy and the myYoutube name doesnt gets changed 
console.log(myYoutubeName);
console.log(anotherName);


// Now lets see the interesting concept of heap

let userOne = {
    email: "afshan@amazon.com",
    salary: 10000000,
}

let userTwo = userOne;

userTwo.email = "afshan@amazont.com";

console.log(userOne.email);
console.log(userTwo.email);

// both email id are same as in heap we get a reference value and not a duplicate value, the value is returned in the same way as reference 
// if we change we change the original value as well in heap