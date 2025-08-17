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

// import {getdate, getTime as getTiming} from "./home.js";
// import masking from "./home.js";
// import{ appName as appUserName} from "./home.js";
// import * as all from "./home.js";
// console.log(masking, "from app.js");    
// console.log(getdate(), "from app.js");
// console.log(getTiming(), "from app.js");
// console.log(appUserName, "from app.js");
// console.log(all, "from app.js");

// fetch("https://fakestoreapi.com/products")     
// .then((res)=>res.json())
// .then((res)=>console.log(res));

// fetch("https://fakestoreapi.com/products/categories")     
// .then((res)=>res.json())
// .then((res)=>console.log(res));

// fetch("https://fakestoreapi.com/products/category/jewelery")     
// .then((res)=>res.json())
// .then((res)=>console.log(res));

// fetch("https://jsonplaceholder.typicode.com/posts/1")     
// .then((response)=>response.json())
// .then((json)=>console.log(json));

// fetch("https://jsonplaceholder.typicode.com/todos/1")     
// .then((response)=>response.json())
// .then((json)=>console.log(json));


// situation show data from fetch to the consoel below
fetch("https://fakestoreapi.com/products")     
.then((res)=>res.json())
.then((res)=>console.log(res));

console.log('show the data here');

// solutiomn 1 --> not a profretional solution and not recommended
let products;

fetch("https://fakestoreapi.com/products")     
.then((res)=>res.json())
.then((res)=> {products = res;});

setTimeout(() =>{
    console.log(products, "from setTimeout");
},5000)

// issue--> .then is asynchronous so before the data is fetch the console was working so we use settimeout to prevent that but still its not a profetional way to do that

// solution 2 --> callback function

let getData = (cb) =>{
 fetch("https://fakestoreapi.com/products")     
.then((res)=>res.json())
.then((res)=> cb(res));
};

getData((data)=>{
    console.log(data, "from callback function");
})
getData((data)=>{
    console.log(data, "from callback function");
})
getData((data)=>{
    console.log(data, "from callback function");
})
getData((data)=>{
    console.log(data, "from callback function");
})
getData((data)=>{
    console.log(data, "from callback function");
})
