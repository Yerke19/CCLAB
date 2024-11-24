function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(255, 0, 192);
  circle(random(width), random(height), random(10, 30));
}
