const images = [
    "0.jpeg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
// console.log(chosenImage);
// console.log(bgImage);

document.body.appendChild(bgImage);