//DOM creation
let container = document.createElement("div");
container.setAttribute("class", "container");
container.innerHTML = `      
    <div class="card">
        <div class="card-header">
        <i class="fa fa-map-marker fa-2x"></i>
        <input type="text" id="city" placeholder="Enter your location">
        <button id="search"><i class="fa fa-search fa-2x"></i></button>
    </div>
    <div class="card-body">
        <h3 class="card-title" id="location"></h3>
        <span id="image"></span>
        <h4 class="card-title" id="weather"></h4>
        <h2 class="card-title" id="temperature"></h2>
     </div>`
document.body.append(container);

//javascript
let button = document.getElementById("search");
    button.addEventListener("click",area);
//fetch apin data
async function area(){
    //fetch the latitude and longitude using geocoding api
    let location = document.getElementById("city").value;
    let lat_long = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=3226ce0ee6d73b13a0cb40a0fb71540e`)
    let res = await lat_long.json();
    //fetch weather data using weather api
    let weather_data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${res[0].lat}&lon=${res[0].lon}&appid=3226ce0ee6d73b13a0cb40a0fb71540e`);
    let result = await weather_data.json();
    //data    
    document.getElementById("location").innerHTML = location;
    document.getElementById("weather").innerHTML = result.weather[0].main;
    document.getElementById("temperature").innerHTML = `${(result.main.temp - 273.15).toFixed(2)}&nbsp;<sup>o</sup>C`;   

}
