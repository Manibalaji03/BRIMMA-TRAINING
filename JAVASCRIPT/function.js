
function SimpleFunction(){
    console.log("Hello world");
}
//IIFE

let Numbers=[1,2,3,4,5,6,7,8,9,10];
let squareNumbers=[];
(function(){
    Numbers.forEach((arg)=>{
        squareNumbers.push(arg*arg);
    })
})();

for (const element of squareNumbers) {
    console.log(element);
}

// async function
async function FetchApi(){
    const Response=await fetch('http://api.weatherapi.com/v1/current.json?key=d43ab900ed694f72a8d155237242504&q=Tirunelveli&aqi=no');
    
    return  Response.json();
}

FetchApi().then(data=>console.log(data));