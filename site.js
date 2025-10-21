let randNum = Math.random()*25;
let wholNum = Math.trunc(randNum); 

// get the element by its actual id string
const numDisplay = document.getElementById('numDisplay');

if (numDisplay) {
  numDisplay.textContent = wholNum;   // shows the number on the button
} else {
  console.log('numDisplay element not found');
}