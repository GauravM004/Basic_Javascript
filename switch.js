// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } syntax

// we have keys the key which fits execute that code

const month = 3
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
        // if we dont put break then the further code also executes giving us April too except the default and this is also a common interview question
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default Case");
        break;
}

const month2 = "April"
switch (month2) {
    case "Jan":
        console.log("Jan");
        break;
    case "Feb":
        console.log("Feb");
        break;
    case "March":
        console.log("March");
        break;
        // if we dont put break then the further code also executes giving us April too except the default and this is also a common interview question
    case "April":
        console.log("April");
        break;

    default:
        console.log("Default Case");
        break;
}