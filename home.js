let getdate = () => {
    return new Date().toDateString();
}
console.log(getdate(),"form home.js");

let getTime = () => { 
    return new Date().getTime();
}

const appName = "Advance javascript assignment-2";

const age = 20;
export default age;

export {getdate, getTime, appName};     