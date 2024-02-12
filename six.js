const coding = ["javascript", "cpp", "python", "ruby", "java"]

// we cant return values in for each loop 
// if we want to add any condition in the items we cant do it as it doesnt return values

// const values = coding.forEach( (item) => {
    // console.log(item);
//     return  item
// } )

// console.log(values);

// in filter also we can use call back functions 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

const newNums = myNums.filter( (num) => num > 4 )
console.log(newNums); // filter returns unlike forEach

const newNums1 = myNums.filter( (num) => {
    return num > 4 // as we go inside a scope we need to return the value vv important
 } )
console.log(newNums1); // filter returns unlike forEach

// for each loop condition method
const myNumss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
const nums = []
myNumss.forEach ( (num) => {
    if (num > 4) {
        (nums.push(num));
    }
})
console.log(nums);