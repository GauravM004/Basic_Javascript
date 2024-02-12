// reduce method 
// used in shopping card
// accumulator which is an empty space which holds the operation value

const myNum = [1, 2, 3]

// const myTotal = myNum.reduce( function (acc, currval) {
//     console.log(`accumulator is ${acc} and the current value is ${currval}`);
//     return acc+currval
// }, 0) // acc starting from 0

const myTotal = myNum.reduce ((acc, curr)=> acc+curr, 0)

console.log(myTotal);


// add shopping cart price 
const shoppingCart = [
    {
        name: "js Course",
        price: 2999
    },
    {
        name: "py Course",
        price: 999
    },
    {
        name: "mobile dev Course",
        price: 4999
    },
    {
        name: "data science Course",
        price: 12999
    },
]


// when we write item we get the entire object so we add the price as item.price
const totalPriceToPay = shoppingCart.reduce ((acc, item) => acc+item.price, 0)

console.log(totalPriceToPay);
