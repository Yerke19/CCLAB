function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(0, 192, 255);

  circle(random(width), random(height), random(10, 30));
}
