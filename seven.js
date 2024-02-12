//  add 10 to the array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNums.map ( (num) => {
//     return num + 10
// })

// console.log(newNum);

const newNum = []
myNums.forEach((num) => {
    newNum.push(num + 15)
})
console.log(newNum); // i did it

// using multiple methods together is known as chaining

// an example of chaining
const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums1 = myNums1
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num > 41)

console.log(newNums1);



