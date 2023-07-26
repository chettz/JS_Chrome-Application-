const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
//랜덤으로 가져온 이미지를 어떻게 배경화면에 적용시킬까?
//html의 <img>만으로는 계속 변화하는 배경화면을 적용할 수 없음
//js에서 만든 후 html에 추가해야 함

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
//js에서 html element를 생성
document.body.appendChild(bgImage);
//body에 img추가 or prepend()
