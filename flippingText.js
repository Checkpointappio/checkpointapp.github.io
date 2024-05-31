const texts = ["New York City", "Disneyland", "Venice", "Tokyo"];
let index = 1;
const textElement = document.getElementById('flipping-text');

function changeText() {
  index = (index + 1) % texts.length;
  textElement.textContent = texts[index];
}

// Change the text in sync with the CSS animation
textElement.addEventListener('animationiteration', changeText);