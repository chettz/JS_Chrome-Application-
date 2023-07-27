function onGeoOk(position) {
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   console.log("You live in", lat, lon);
}

function onGeoError() {
   alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// 37.5866431 127.1372775
