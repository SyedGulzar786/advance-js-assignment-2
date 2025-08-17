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

ternary operator example
let marks = 5;
let type = marks >= 20 ? "eligible" : marks >=10 ? "retest" : "not eligible";
console.log(type)

let markn = 0;
let resultn = marks && "notavailable";
console.log(resultn);

let marko = 0;
let resulto = marks || "notavailable";
console.log(resultn);


