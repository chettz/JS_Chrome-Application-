const API_KEY = "5f03516ba2c52fb01205be5093415e58";

function onGeoOk(position) {
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   fetch(url)
      .then((response) => response.json())
      .then((data) => {
         const weather = document.querySelector("#weather span:first-child");
         const city = document.querySelector("#weather span:last-child");
         city.innerText = data.name;
         weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
      });
}

function onGeoError() {
   alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// 37.5866431 127.1372775
