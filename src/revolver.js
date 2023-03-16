// select the container element
const container = document.querySelector('.container');

// select all the letter elements
const letters = container.querySelectorAll('.letter');

const container2 = document.querySelector('.container2');

const letters2 = container2.querySelectorAll('.letter');

const container3 = document.querySelector('.container3');

const letters3 = container3.querySelectorAll('.letter');

// calculate the angle between each letter
const angle = 360 / letters.length;

//get font size of the first letter
const fontSize = parseFloat(window.getComputedStyle(letters[0]).getPropertyValue('font-size').slice(0,-2))

// position each letter around the circle
//letters.forEach((letter, index) => {
//  letter.style.transform = //`rotateY(${angle * index}deg) translateZ(${fontSize * 1.5}px)`;
//});

arrangeLetters(letters);
arrangeLetters(letters2);
arrangeLetters(letters3);

//helper function
function arrangeLetters(str) {
  str.forEach((letter, index) => {
  letter.style.transform = `rotateY(${angle * index}deg) translateZ(${fontSize * 1.5}px)`;
  });
};

// start the animation
container.style.animation = 'rotate 15s infinite linear';

container2.style.animation = 'rotate 3s infinite linear';

container3.style.animation = 'rotate 12s infinite linear';