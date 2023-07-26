const clock = document.querySelector("h2#clock");

function getClock() {
   const date = new Date();
   clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); //즉시 호출하여 00:00:00 표시하는일이 없게
setInterval(getClock, 1000); // 1초마다 갱신
