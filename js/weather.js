const API_KEY = "cc78229fcdfb1916cb96b839fcdbede0"

function onGeoOK(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("You live here ", lat, long );
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:last-child")
        city.innerText = data.name 
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`});
}
function onGeoError(){
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);