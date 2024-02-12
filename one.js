for (let i = 0; i <=10 ; i++) {
    const element = i;
    if (i==5) {
        console.log("5 is best number"); // if we know stack we should know that 5 is best number will come first
    }
    console.log(i);
}

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(`Outer loop ${i}`);
//     for (let j = 0; j < 10; j++) {
//         const element = j;
//         console.log(`Inner loop ${j} and outer loop ${i}`); //10 * 10 100 times
//     }   
// }

// Print table from 1 to 10

for (let i = 1; i <= 10; i++) {
    // const element = array[i];
    console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        // const element = array[j];
        console.log(i + "*" + j + "=" + i*j);
    }
}

// Arrays in javascript for loops

let myArr = ["flash", "batman", "superman"]
for (let index = 0; index < myArr.length; index++) { // we write arr.length and not arr.lrngth <= as indexing of array starts from 0
    const element = myArr[index];
    console.log(element);
}

// break and continue are important keywords in loops
// to break control flow use break
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is detected");
        break;
    }
    console.log(`Values are: ${index}`);
}

// in continue the condition is ignored 
// However the condition where we put continue doesnt run

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is detected");
        continue; // value of 5 is is being ignored
    }
    console.log(`Values are: ${index}`);
}


