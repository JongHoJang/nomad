const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;  // bgImage의 src를 설정
document.body.appendChild(bgImage);  // bgImage를 body 내부에 추가