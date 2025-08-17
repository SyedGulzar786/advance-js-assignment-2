// fetch("api")
// .then((res)=>res.json())
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// let data = new Promise(
//     fetch("api")
//     .then((res)=>res.json)
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// );

// let getdata = data

// ternary operator example
// let marks = 5;
// let type = marks >= 20 ? "eligible" : marks >=10 ? "retest" : "not eligible";
// console.log(type)

// let markn = 0;
// let resultn = marks && "notavailable";
// console.log(resultn);

// let marko = 0;
// let resulto = marks || "notavailable";
// console.log(resultn);

// function example(){
//     return condition1 ? value1
//     : condition2 ? value2
//     : condition3 ? value3
//     : value4;
// }

// nullih coalescing operator example --> ??
// --> checking only null and undefined values
// let mark = 0;
// let result = mark ?? "not available";
// console.log(result);

import {getdate, getTime, appName} from "./home.js";
import masking from "./home.js";
console.log(masking, "from app.js");    
console.log(getdate(), "from app.js");
console.log(getTime(), "from app.js")
console.log(appName, "from app.js")