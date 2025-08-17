fetch("api")
.then((res)=>res.json())
.then((res)=>console.log(res))
.catch((err)=>console.log(err));

let data = new Promise(
    fetch("api")
    .then((res)=>res.json)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
);

let getdata = data

