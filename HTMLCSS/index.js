let Response={
    "location": {
      "name": "Tirunelveli",
      "region": "Tamil Nadu",
      "country": "India",
      "lat": 8.7333,
      "lon": 77.7,
      "tz_id": "Asia/Kolkata",
      "localtime_epoch": 1732177005,
      "localtime": "2024-11-21 13:46"
    },
    "current": {
      "last_updated_epoch": 1732176900,
      "last_updated": "2024-11-21 13:45",
      "temp_c": 25.9,
      "temp_f": 78.7,
      "is_day": 1,
      "condition": {
        "text": "Patchy rain nearby",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
        "code": 1063
      },
      "wind_mph": 6.0,
      "wind_kph": 9.7,
      "wind_degree": 15,
      "wind_dir": "NNE",
      "pressure_mb": 1010.0,
      "pressure_in": 29.82,
      "precip_mm": 0.07,
      "precip_in": 0.0,
      "humidity": 80,
      "cloud": 100,
      "feelslike_c": 28.4,
      "feelslike_f": 83.1,
      "vis_km": 10.0,
      "vis_miles": 6.0,
      "uv": 2.7,
      "gust_mph": 7.9,
      "gust_kph": 12.7
    }
  }

  let Location=Response.location;
  console.log(typeof(Location));
  let newObjArray=Object.entries(Location);
 console.log(newObjArray);


 console.log("- - - - - - - -- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
console.log("LOCATION DETAILS");


// function expression 

const MapFunction= function (ObjectArray){
                            //Arrow function
        newObjArray.map((data)=>{
    console.log(data[0]+ ":       "+data[1]);
  });
}

MapFunction(newObjArray);

  console.log("- - - - - - - -- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
  console.log("Find Method to Check day or night");
  let currentStatus=Object.entries(Response.current)
  let dayStatus = currentStatus.find((data)=>( data[0]==="is_day" && data[1]===0));
 
 // console.log(dayStatus);

  if(dayStatus[1]===1){
    console.log("Day Time");
  }else{
    console.log("Night Time");
  }