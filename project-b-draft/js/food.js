let img;

function preload() {
  // preload() runs once
  img = loadImage("assets/food.jpg");


}



function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(255);
  image(img, 0, 0, 800, 500);


}


