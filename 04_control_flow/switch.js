// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let month;

month = prompt("Enter your Month").toLowerCase();

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feb");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
        
    default:
        console.log("default case match");
        break;
}