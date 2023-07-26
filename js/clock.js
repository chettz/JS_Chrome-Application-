const clock = document.querySelector("h2#clock");

function getClock() {
   const date = new Date(); //Date object
   const hours = String(date.getHours()).padStart(2, "0");
   const minutes = String(date.getMinutes()).padStart(2, "0");
   const seconds = String(date.getSeconds()).padStart(2, "0");
   //string의 최대길이을 2로 설정하고 부족하면 앞부분을 "0"으로 패딩
   clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //즉시 호출하여 00:00:00 표시하는일이 없게
setInterval(getClock, 1000); // 1초마다 갱신하여 HTML에 표시
