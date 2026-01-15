const boxes = [document.getElementById('box1'), document.getElementById('box2'), document.getElementById('box3')];
let correctIndex = 0;
let score = 0;

function randomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function setColors() {
  correctIndex = Math.floor(Math.random()*boxes.length);
  boxes.forEach((box,i)=>box.style.background = randomColor());
  boxes[correctIndex].style.background = '#ff8c00'; // Orange target
}

boxes.forEach((box,i)=>box.addEventListener('click',()=>{
  if(i===correctIndex){score++;}else{score--;}
  document.getElementById('score').innerText = 'Score: ' + score;
  setColors();
}));

setColors();
