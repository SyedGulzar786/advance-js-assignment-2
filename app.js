// fetch("api")
// .then((res)=>res.json())
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

const { useEffect } = require("react");

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
// fetch("https://fakestoreapi.com/products")     
// .then((res)=>res.json())
// .then((res)=>console.log(res));

// console.log('show the data here');

// solutiomn 1 --> not a profretional solution and not recommended
// let products;

// fetch("https://fakestoreapi.com/products")     
// .then((res)=>res.json())
// .then((res)=> {products = res;});

// setTimeout(() =>{
//     console.log(products, "from setTimeout");
// },5000)

// issue--> .then is asynchronous so before the data is fetch the console was working so we use settimeout to prevent that but still its not a profetional way to do that

// solution 2 --> callback function

// let getData = (cb) =>{
//  fetch("https://fakestoreapi.com/products")     
// .then((res)=>res.json())
// .then((res)=> cb(res));
// };

// getData((data)=>{
//     console.log(data, "from callback function");
// })
// getData((data)=>{
//     console.log(data, "from callback function");
// })
// getData((data)=>{
//     console.log(data, "from callback function");
// })
// getData((data)=>{
//     console.log(data, "from callback function");
// })
// getData((data)=>{
//     console.log(data, "from callback function");
// })

// issue --> callback hell and not a profetional way to do that, if we got multiple api like product and categories and prodcuts got fetched before categories this will create a problem so we need to then call apis callback inside a call back to got apis fetched one after other this could be lead to call back hell and cause issue to track api request and errors to prevent this we got promises

// solution 3 -->ES-6 promises 
// tasks-> 1.) weather app 2.) news app 3.) ecommerce app 4.) chat app 5.) football score app 6.) movie app 7.) recipe app 8.) book finder app 9.) currency converter app 10.) task manager app

// to get current locationo thorugh js
// navigator
// console.log(navigator, "from navigator");

// there is a method in this object called geolocation 
// console.log(navigator.geolocation, "from geolocation");

// further init getCurrentPosition() method
// console.log(navigator.geolocation.getCurrentPosition());

// this method take a callback function as a parameter to show the location
// asks a permission from the user to access the location
// if allowed it will show the location object with lat and long
// if denied it will show an error
// 1st parameter is success callback function
// 2nd parameter is error callback function
// 3rd parameter is options object
// console.log(navigator.geolocation.getCurrentPosition((location)=>{
// console.log(location, "from location")
// }))

// weather api
// api = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


// promises
// A Promise in JavaScript is like a "container" for something that will happen in the future.

// Imagine you order food online 🍔 →

// You don’t get the food immediately.

// The restaurant promises to deliver it.

// While waiting, you can keep doing other things.

// Later, the promise will be:
// ✅ Resolved (fulfilled) = food delivered.
// ❌ Rejected = delivery failed.

// So:

// Pending → still waiting

// Resolved → success

// Rejected → failed


// Creating a Promise -->
// const myPromsie1 = new Promise((resolve, reject) => {
//     let footReady = true; // change to false to test reject

//     if (footReady) {
//         resolve("food delivered");
//     } else {
//         reject("delivery failed");
//     };

// });

// useit:
// myPromsie1
// .then((result)=>{console.log(result, " from myPromise1")})
// .catch((err)=>{console.log(err," from myPromise1")})


// const myPromsie2 = new Promise((resolve, reject) => {
//     let footReady = false; // change to true to test resolve

//     if (footReady) {
//         resolve("food delivered");
//     } else {
//         reject("delivery failed");
//     };

// });

// myPromsie2
// .then((result)=>{console.log(result, " from myPromise2")})
// .catch((err)=>{console.log(err," from myPromise2")})


// 🟢 Using Promise with APIs (fetch)
// When you fetch data from an API, it takes time (like ordering food).
// fetch
//  itself returns a Promise

// fetch("https://fakestoreapi.com/products")
// .then(res=>res.json())
// .then(data=>console.log(data, "from fetch api"))
// .catch(err=>console.log(err, "from fetch api"));

// more cleaner and easiest way mroe better recommended 
// const getData = async () => {
// try{
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     console.log(data, "from async await");
// } catch(err){
//     console.log(err, "from async await");
// }
// }
// getData();



// Function inside useEffect + call it.
useEffect(()=>{
    const getData = async () => {
        try{
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            console.log("data", data)
        }catch(err){
            console.log("err", err);
        };
    };
    getData();
},[]);


// Function outside useEffect + call it.
const getData = async () => {
    try{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log("data", data)
    }catch(err){
        console.log("err",err);
    };
};

useEffect(()=>{
    getData();
},[])


// IIFE directly inside useEffect.
useEffect(()=>{
    (async()=>{
        try{
const res = await fetch("https://fakestoreapi.com/products");
const data = await res.json();
console.log("data",data);
        }catch(err){
            console.log("err",err);
        };
    })();
},[]);