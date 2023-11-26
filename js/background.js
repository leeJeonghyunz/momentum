const img = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg", "6.jpg"]

const choosenImg = img[Math.floor(Math.random() * img.length)];

const bigImg = document.createElement("img");
bigImg.src = `images/${choosenImg}`;

document.body.appendChild(bigImg);

