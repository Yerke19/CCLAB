function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
}

function draw() {
  //color
  //range: 0 to 255
  // (w) // white
  // (w,a) // white, alpha
  // (r,g,b) // red,green,blue
  // (?,?,?,?)
  background(255, 192, 203);

  //sun
  // fill(255, 217, 25);
  // circle(50, 50, 80);

  // hair
  fill(51, 26, 0);
  rect(190, 110, 120, 120, 40);

  //face
  fill(255, 219, 172);
  noStroke();
  ellipse(250, 175, 80, 100);

  //bangs
  fill(51, 26, 0);
  rect(214, 113, 72, 40, 0, 0, 30, 0);

  //eyes
  fill(255);
  ellipse(230, 160, 15, 10);
  ellipse(270, 160, 15, 10);

  fill(241, 149, 162);
  ellipse(225, 180, 15, 12);
  ellipse(275, 180, 15, 12);

  //blush
  fill(66, 44, 22);
  circle(230, 160, 10);
  circle(270, 160, 10);

  //nose
  fill(222, 184, 135);
  circle(width / 2 - 5, height / 2 - 15, 2);
  circle(width / 2 + 5, height / 2 - 15, 2);

  // eye pupils
  fill(255);
  circle(228, 158, 2);
  circle(268, 158, 2);

  //lips
  noFill();
  stroke(229, 87, 139);
  arc(250, 190, 45, 35, 120, 103);

  //neck
  fill(255, 219, 172);
  noStroke();
  rect(241, 221, 20, 25);

  //ears
  fill(255, 219, 172);
  ellipse(210, 180, 10, 18);
  ellipse(290, 180, 10, 18);

  //earrings
  fill(210, 105, 30);
  circle(209, 188, 3);
  circle(291, 188, 3);

  //dress
  fill(77, 0, 64);
  noStroke();
  rect(204, 242, 95, 160, 30, 30, 0, 0);

  //flower petals
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

  //flower middle
  fill(255, 255, 25);
  circle(255, 300, 15);

  //flower stem
  push();
  stroke(" green");
  strokeWeight(2);
  line(258, 308, 260, 355);
  pop();

  fill("green");
  ellipse(256, 330, 7, 13);
  ellipse(262, 330, 7, 13);
}
