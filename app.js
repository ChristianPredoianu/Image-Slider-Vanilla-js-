const arrowBack = document.getElementById('arrow-left');
const arrowNext = document.getElementById('arrow-right');
const image = document.getElementById('image');

let counter = 0;

loadEventListeners();

const imgArray = [
  'images/ceramic.jpg',
  'images/Driving-a-Mercedes.jpg',
  'images/ceramic2.jpg',
  'images/porsche-platinum.jpg'
];

const nextImage = () => {
  if (counter < imgArray.length) {
    image.src = imgArray[counter];
  } else {
    counter = 0;
    image.src = imgArray[counter];
  }
};

const previousImage = () => {
  if (counter === -1) {
    counter = 3;
  }
  if (counter < imgArray.length) {
    image.src = imgArray[counter];
    console.log(counter);
  }
};

function loadEventListeners() {
  arrowBack.addEventListener('click', () => {
    counter--;
    previousImage();
  });

  arrowNext.addEventListener('click', () => {
    counter++;
    nextImage();
  });
}
