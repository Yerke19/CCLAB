let kobyzAudio, dombraAudio;
let kobyzPlayed = false;
let dombraPlayed = false;

function preload() {
  kobyzAudio = loadSound("assets/kobyz.mp3");
  dombraAudio = loadSound("assets/dombra sound.mp3");
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  document.getElementById("p5-canvas-container").style.cursor = "none";
}


function draw() {
  background('#FFA6F1');

  //  text for KOBYZ
  push();
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  let kobyzX = width / 10;
  for (let i = 0; i < "KOBYZ".length; i++) {
    text("KOBYZ"[i], kobyzX, height / 2 - 80 + i * 40);
  }
  pop();

  //  text for DOMBRA
  push();
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  let dombraX = (3.5 * width) / 4;
  for (let i = 0; i < "DOMBRA".length; i++) {
    text("DOMBRA"[i], dombraX, height / 2 - 100 + i * 40);
  }
  pop();

  kobyz();
  dombra();

  onMouse();
  stroke('black');
  line(width / 2, 0, width / 2, height);
}


function onMouse() {
  // rect(200, 0, 50, height);

  if (mouseX < width / 2) {
    //bow
    push();
    noFill();
    // Horizontal arc moving with the mouse
    stroke("#9F5F1E");
    strokeWeight(4);
    arc(mouseX, mouseY, 150, 50, 0, PI);

    // Horizontal line moving with the mouse
    stroke("grey");
    strokeWeight(1);
    line(mouseX - 75, mouseY, mouseX + 75, mouseY); // Line matches arc's width
    pop();
  } else {
    circle(mouseX, mouseY, 10);
  }

  //MANAGE SOUND
  if (kobyzAudio.isPlaying() == false && mouseX < width / 2 && kobyzPlayed == false && mouseX > 150 && mouseX < 330 && mouseY > 150 && mouseY < 350) {
    // kobyzAudio.play();
    kobyzAudio.loop();
    kobyzPlayed = true;

  } else if (mouseX >= width / 2 || (mouseX <= 150 || mouseX >= 330) || (mouseY <= 150 || mouseY >= 350)) {
    kobyzAudio.pause();
    kobyzPlayed = false;

  }

  if (dombraAudio.isPlaying() == false && mouseX >= width / 2 && dombraPlayed == false && mouseX > 545 && mouseX < 565 && mouseY > 150 && mouseY < 370) {
    // dombraAudio.play();
    dombraAudio.loop();
    dombraPlayed = true;
    // document.getElementById("p5-canvas-container").style.cursor = "pointer";
  } else if (mouseX < width / 2 || (mouseX <= 545 || mouseX >= 565) || (mouseY <= 150 || mouseY >= 370)) {
    dombraAudio.pause();
    dombraPlayed = false;
    // document.getElementById("p5-canvas-container").style.cursor = "default";
  }
}

function dombra() {
  // dombra
  push();

  fill("#C67423");
  noStroke();
  ellipse(550, 330, 80, 100);
  pop();
  push();
  stroke("#C67423");

  strokeWeight(15);
  line(550, 150, 550, 290);
  pop();
  push();
  fill("#98530E");
  noStroke();
  circle(550, 320, 15);
  rect(538, 350, 25, 5);

  pop();
  push();
  noStroke();
  fill("#98530E");
  rect(543, 123, 15, 33);
  fill("black");
  circle(555, 130, 4);
  circle(556, 140, 4);
  stroke("#5A3816");
  strokeWeight(1);
  line(555, 133, 545, 380);
  line(556, 140, 550, 380);
  pop();
}

function kobyz() {
  push();
  translate(-150, 0);

  // Style the line.
  push();
  fill(102, 51, 0);
  rect(370, 130, 60, 10);
  pop();

  push();
  stroke(146, 78, 9);
  strokeWeight(18);
  line(400, 155, 400, 250);
  pop();

  fill(146, 78, 9);
  noStroke();
  ellipse(400, 250, 120, 50);
  ellipse(400, 310, 60, 140);

  fill(102, 51, 0);
  rect(387, 110, 25, 50);

  fill(102, 51, 0);
  ellipse(370, 250, 50, 30);
  ellipse(430, 250, 50, 30);
  rect(393, 350, 20, 10);

  push();
  stroke("black");
  strokeWeight(1);
  line(395, 133, 398, 350);
  line(405, 133, 405, 350);
  pop();

  // Arc and line moving with the mouse
  push();
  noFill();
  stroke("#9F5F1E");
  strokeWeight(4);
  pop();
  pop();
}


