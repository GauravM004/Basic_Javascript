let index = 0

while (index <= 10) {
    console.log(index);
    index = index+2
}

let myArr = ['flash', "batman", "superman"]
let arr = 0

while (arr < myArr.length) {
    console.log(`Value is ${myArr[arr]}`);
    arr++
}

// do while loop me kaam pehle condition baadme 
let score = 1
do {
    console.log(`Score is ${score}`);
    score++
} while (score<10);

let score1 = 11
do {
    console.log(`Score is ${score1}`);
    score1++
} while (score1<10); 

// score is 11 is printed because the condition is checked after the iteration