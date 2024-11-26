
 function FetchData() {
    return  fetch('http://api.weatherapi.com/v1/current.json?key=d43ab900ed694f72a8d155237242504&q=Tirunelveli&aqi=no')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
}



console.log("Using promises");


FetchData()
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));

    

    async function FetchApi(){
        const Response=await fetch('http://api.weatherapi.com/v1/current.json?key=d43ab900ed694f72a8d155237242504&q=Tirunelveli&aqi=no');
        
        return  Response.json();
    }
    
console.log("using callback function");
setTimeout(()=>{
    FetchApi().then(data=>console.log(data));
},5000);



//calllback hell

function getData(result1) {
    processResult(result1, function(result2) {
        saveResult(result2, function(result3) {
            logResult(result3, function() {
                console.log("All tasks completed.");
            });
        });
    });
};


//using promises
getData()
    .then(result1 => processResult(result1))
    .then(result2 => saveResult(result2))
    .then(result3 => logResult(result3))
    .then(() => console.log("All tasks completed."))
    .catch(err => console.error("Error:", err));

//using async awwait
    async function executeTasks() {
        try {
            const result1 = await getData();
            const result2 = await processResult(result1);
            const result3 = await saveResult(result2);
            await logResult(result3);
            console.log("All tasks completed.");
        } catch (err) {
            console.error("Error:", err);
        }
    }
    executeTasks();