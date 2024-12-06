function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(255, 192, 203);

  // Call your character drawing function
  drawYerke();

  // Call the sun drawing function
  drawRotatingSun(150, 100, 40);
}

function drawYerke() {
  push();
  translate(150, 100);

  // Hair
  fill(51, 26, 0);
  rect(190, 110, 120, 120, 40);

  // Face
  fill(255, 219, 172);
  noStroke();
  ellipse(250, 175, 80, 100);

  // Bangs
  fill(51, 26, 0);
  rect(214, 113, 72, 40, 0, 0, 30, 0);

  // Eyes
  fill(255);
  ellipse(230, 160, 15, 10);
  ellipse(270, 160, 15, 10);

  fill(241, 149, 162);
  ellipse(225, 180, 15, 12);
  ellipse(275, 180, 15, 12);

  // Blush
  fill(66, 44, 22);
  circle(230, 160, 10);
  circle(270, 160, 10);

  // Nose
  fill(222, 184, 135);
  circle(width / 2 - 5, height / 2 - 15, 2);
  circle(width / 2 + 5, height / 2 - 15, 2);

  // Eye pupils
  fill(255);
  circle(228, 158, 2);
  circle(268, 158, 2);

  // Lips
  noFill();
  stroke(229, 87, 139);
  arc(250, 190, 45, 35, 120, 103);

  // Neck
  fill(255, 219, 172);
  noStroke();
  rect(241, 221, 20, 25);

  // Ears
  fill(255, 219, 172);
  ellipse(210, 180, 10, 18);
  ellipse(290, 180, 10, 18);

  // Earrings
  fill(210, 105, 30);
  circle(209, 188, 3);
  circle(291, 188, 3);

  // Dress
  fill(77, 0, 64);
  noStroke();
  rect(204, 242, 95, 160, 30, 30, 0, 0);

  // Flower petals
  fill(255, 0, 255);
  circle(244, 303, 11);
  circle(245, 295, 11);
  circle(250, 290, 11);
  circle(258, 290, 11);
  circle(265, 292, 11);
  circle(266, 298, 11);
  circle(267, 302, 11);
  circle(266, 304, 11);
  circle(264, 306, 11);
  circle(246, 306, 11);
  circle(250, 306, 15);

  // Flower middle
  fill(255, 255, 25);
  circle(255, 300, 15);

  // Flower stem
  push();
  stroke("green");
  strokeWeight(2);
  line(258, 308, 260, 355);
  pop();

  fill("green");
  ellipse(256, 330, 7, 13);
  ellipse(262, 330, 7, 13);
  pop();
}

// Draw the rotating sun
function drawRotatingSun(x, y, radius) {
  push();
  translate(x, y);
  radius = 45;
  // Draw sun circle
  fill(253, 225, 45);
  noStroke();
  circle(0, 0, radius);

  // Draw rotating rays

  strokeWeight(3);
  let numRays = 6;
  let angle = TWO_PI / numRays;
  for (let i = 0; i < numRays; i++) {
    let sinVal = map(sin(frameCount * 0.1), -1, 1, 10, 30)
    let cosVal = map(cos(frameCount * 0.1), -1, 1, 10, 30)
    push();
    stroke(253, 225, 45);
    rotate(frameCount * 0.01 + i * angle); // Add rotation effect
    line(radius / 2 + 5, 0, radius / 2 + sinVal, 0); // Draw rays
    pop();

    push();
    stroke(252, 180, 31);
    rotate(frameCount * 0.01 + (i + 0.5) * angle); // Add rotation effect
    line(radius / 2 + 5, 0, radius / 2 + cosVal, 0); // Draw rays
    pop();
  }
  pop();
}
